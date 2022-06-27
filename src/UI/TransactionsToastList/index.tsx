import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  transactionToastsSelector
} from 'reduxStore/selectors/toastsSelectors';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { getGeneratedClasses } from 'UI/utils/getGeneratedClasses';
import { SignedTransactionsType } from 'types';

import CustomToast from 'UI/TransactionsToastList/components/CustomToast';
import TransactionToast from 'UI/TransactionsToastList/components/TransactionToast';
import { deleteCustomToast } from 'utils';

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

  const signedTransactionsFromStore = useGetSignedTransactions()
    .signedTransactions;

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

  const transactionsToastsList = transactionsToasts.map(
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

  return createPortal(
    <div className={style.toasts}>
      {customToastsList}
      {transactionsToastsList}
    </div>,
    parentElement || document.body
  );
};
