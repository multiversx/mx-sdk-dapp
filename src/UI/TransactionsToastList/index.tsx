import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  transactionToastsSelector
} from 'reduxStore/selectors/toastsSelectors';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { getGeneratedClasses } from 'UI/utils/getGeneratedClasses';
import { SignedTransactionsBodyType, SignedTransactionsType } from 'types';

import CustomToast from 'UI/TransactionsToastList/components/CustomToast';
import TransactionToast from 'UI/TransactionsToastList/components/TransactionToast';
import { deleteCustomToast, getIsTransactionPending } from 'utils';

import styles from './styles.scss';
import { CustomToastType, TransactionToastType } from 'types/toasts';
import { addTransactionToast, removeTransactionToast } from 'reduxStore/slices';
import { removeSignedTransaction } from 'services';
export interface TransactionsToastListPropsType {
  toastProps?: any;
  className?: string;
  withTxNonce?: boolean;
  shouldRenderDefaultCss?: boolean;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
}

export const TransactionsToastList = ({
  shouldRenderDefaultCss = true,
  className = 'transactions-toast-list',
  signedTransactions,
  successfulToastLifetime,
  parentElement
}: TransactionsToastListPropsType) => {
  const customToasts = useSelector(customToastsSelector);
  const transactionsToasts = useSelector(transactionToastsSelector);
  const dispatch = useDispatch();

  const signedTransactionsFromStore =
    useGetSignedTransactions().signedTransactions;

  const signedTransactionsToRender =
    signedTransactions || signedTransactionsFromStore;

  const handleDeleteCustomToast = (toastId: string) => {
    deleteCustomToast(toastId);
  };

  const handleDeleteTransactionToast = (toastId: string) => {
    dispatch(removeTransactionToast(toastId));
    removeSignedTransaction(toastId);
  };

  const handleSignedTransactionsListUpdate = () => {
    for (const sessionId in signedTransactionsToRender) {
      const alreadyHasToastForThisTransaction = transactionsToasts.some(
        (toast: TransactionToastType): boolean => toast.toastId === sessionId
      );

      if (!alreadyHasToastForThisTransaction) {
        dispatch(addTransactionToast(sessionId));
      }
    }
  };

  useEffect(() => {
    handleSignedTransactionsListUpdate();
  }, [signedTransactionsToRender]);

  const style = getGeneratedClasses(className ?? '', !!shouldRenderDefaultCss, {
    ...styles
  });

  const transactionsToastsList = useMemo(
    () =>
      transactionsToasts.map(
        ({ toastId, type, startTimestamp }: TransactionToastType) => (
          <TransactionToast
            key={toastId}
            {...{
              type,
              startTimestamp,
              toastId,
              signedTransactionsToRender,
              lifetimeAfterSuccess: successfulToastLifetime,
              onDelete: handleDeleteTransactionToast
            }}
          />
        )
      ),
    [transactionsToasts]
  );

  const customToastsList = customToasts.map(
    ({ toastId, type, message, duration }: CustomToastType) => (
      <CustomToast
        key={toastId}
        {...{
          type,
          message: message ?? '',
          duration,
          onDelete: () => handleDeleteCustomToast(toastId)
        }}
      />
    )
  );

  const clearNotPendingTransactionsFromStorage = (e: BeforeUnloadEvent) => {
    e.preventDefault();

    transactionsToasts.forEach((transactionToast: TransactionToastType) => {
      const currentTx: SignedTransactionsBodyType =
        signedTransactionsToRender[transactionToast.toastId];

      localStorage.setItem(
        'ciprian:current_transaction',
        JSON.stringify(currentTx)
      );

      const { status } = currentTx;

      localStorage.setItem('ciprian:status', JSON.stringify(status));

      const isPending = getIsTransactionPending(status);

      localStorage.setItem('ciprian:isPending', JSON.stringify(isPending));

      if (!isPending) {
        localStorage.setItem(
          'ciprian:isRemoving',
          JSON.stringify(transactionToast.toastId)
        );
        removeSignedTransaction(transactionToast.toastId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener(
      'beforeunload',
      clearNotPendingTransactionsFromStorage
    );

    return () => {
      window.removeEventListener(
        'beforeunload',
        clearNotPendingTransactionsFromStorage
      );
    };
  }, []);

  return createPortal(
    <div className={style.toasts}>
      {customToastsList}
      {transactionsToastsList}
    </div>,
    parentElement || document.body
  );
};
