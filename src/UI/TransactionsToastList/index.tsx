import React, { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  transactionToastsSelector
} from 'reduxStore/selectors/toastsSelectors';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import {
  SignedTransactionsBodyType,
  SignedTransactionsType,
  WithClassname
} from 'types';
import { CustomToast } from 'UI/TransactionsToastList/components/CustomToast';
import { TransactionToast } from 'UI/TransactionsToastList/components/TransactionToast';
import { deleteCustomToast, getIsTransactionPending } from 'utils';
import styles from './styles.scss';
import { CustomToastType, TransactionToastType } from 'types/toasts';
import { addTransactionToast, removeTransactionToast } from 'reduxStore/slices';
import { removeSignedTransaction } from 'services';
import { store } from 'reduxStore/store';
import classNames from 'classnames';

export interface TransactionsToastListPropsType extends WithClassname {
  toastProps?: any;
  withTxNonce?: boolean;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
  transactionToastClassName?: string;
  customToastClassName?: string;
}

const renderTransactionToast = ({
  className,
  signedTransactionsToRender,
  successfulToastLifetime,
  handleDeleteTransactionToast,
  type,
  startTimestamp,
  toastId
}: {
  signedTransactionsToRender: SignedTransactionsType;
  toastId: string;
  type: string;
  startTimestamp: number;
  successfulToastLifetime: number | undefined;
  handleDeleteTransactionToast: (toastId: string) => void;
  className?: string;
}) => {
  const currentTx: SignedTransactionsBodyType =
    signedTransactionsToRender[toastId];

  if (currentTx == null) {
    return null;
  }

  const invalidCurrentTx =
    currentTx?.transactions == null || currentTx?.status == null;
  if (invalidCurrentTx) {
    return null;
  }

  const { transactions, status } = currentTx;

  return (
    <TransactionToast
      key={toastId}
      {...{
        type,
        startTimestamp,
        toastId,
        transactions,
        status,
        lifetimeAfterSuccess: successfulToastLifetime,
        onDelete: handleDeleteTransactionToast,
        className
      }}
    />
  );
};

export const TransactionsToastList = ({
  className = 'transactions-toast-list',
  transactionToastClassName,
  customToastClassName,
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

  const signedTransactionsToRenderRef = useRef(signedTransactionsToRender);

  useEffect(() => {
    signedTransactionsToRenderRef.current = signedTransactionsToRender;
  }, [signedTransactionsToRender]);

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

  const transactionsToastsList = useMemo(
    () =>
      transactionsToasts.map(
        ({ toastId, type, startTimestamp }: TransactionToastType) => {
          return renderTransactionToast({
            signedTransactionsToRender,
            toastId,
            type,
            startTimestamp,
            successfulToastLifetime,
            handleDeleteTransactionToast,
            className: transactionToastClassName
          });
        }
      ),
    [
      transactionsToasts,
      signedTransactionsToRender,
      successfulToastLifetime,
      handleDeleteTransactionToast,
      renderTransactionToast
    ]
  );

  const customToastsList = customToasts.map(
    ({ toastId, type, duration, message = '' }: CustomToastType) => (
      <CustomToast
        key={toastId}
        {...{
          type,
          message,
          duration,
          onDelete: () => handleDeleteCustomToast(toastId),
          className: customToastClassName
        }}
      />
    )
  );

  const clearNotPendingTransactionsFromStorage = () => {
    const toasts = transactionToastsSelector(store.getState());
    toasts.forEach((transactionToast: TransactionToastType) => {
      const currentTx: SignedTransactionsBodyType =
        signedTransactionsToRenderRef.current[transactionToast.toastId];

      if (!currentTx) {
        return;
      }

      const { status } = currentTx;
      const isPending = getIsTransactionPending(status);

      if (!isPending) {
        handleDeleteTransactionToast(transactionToast.toastId);
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
    <div className={classNames(styles.toasts, className)}>
      {customToastsList}
      {transactionsToastsList}
    </div>,
    parentElement || document.body
  );
};
