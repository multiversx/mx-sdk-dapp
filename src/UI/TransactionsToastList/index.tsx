import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  transactionToastsSelector
} from 'reduxStore/selectors/toastsSelectors';
import { addTransactionToast, removeTransactionToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { removeSignedTransaction } from 'services';
import { SignedTransactionsBodyType, SignedTransactionsType } from 'types';
import { CustomToastType, TransactionToastType } from 'types/toasts.types';
import { CustomToast } from 'UI/TransactionsToastList/components/CustomToast';
import { TransactionToast } from 'UI/TransactionsToastList/components/TransactionToast';

import { deleteCustomToast } from 'utils/toasts/customToastsActions';
import { getIsTransactionPending } from 'utils/transactions/transactionStateByStatus';

import { WithClassnameType } from '../types';
import styles from './transactionsToastListStyles.scss';

export interface TransactionsToastListPropsType extends WithClassnameType {
  toastProps?: any;
  withTxNonce?: boolean;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
  transactionToastClassName?: string;
  customToastClassName?: string;
}

interface RenderTransactionToastPropsType {
  signedTransactionsToRender: SignedTransactionsType;
  toastId: string;
  type: string;
  startTimestamp: number;
  successfulToastLifetime: number | undefined;
  handleDeleteTransactionToast: (toastId: string) => void;
  className?: string;
}

const renderTransactionToast = ({
  className,
  signedTransactionsToRender,
  successfulToastLifetime,
  handleDeleteTransactionToast,
  startTimestamp,
  toastId
}: RenderTransactionToastPropsType) => {
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
      startTimestamp={startTimestamp}
      toastId={toastId}
      transactions={transactions}
      status={status}
      lifetimeAfterSuccess={successfulToastLifetime}
      onDelete={handleDeleteTransactionToast}
      className={className}
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
        ({ toastId, type, startTimestamp }: TransactionToastType) =>
          renderTransactionToast({
            signedTransactionsToRender,
            toastId,
            type,
            startTimestamp,
            successfulToastLifetime,
            handleDeleteTransactionToast,
            className: transactionToastClassName
          })
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
    ({ toastId, duration, message = '' }: CustomToastType) => (
      <CustomToast
        key={toastId}
        message={message}
        duration={duration}
        onDelete={() => handleDeleteCustomToast(toastId)}
        className={customToastClassName}
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
