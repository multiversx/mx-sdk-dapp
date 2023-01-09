import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  failTransactionToastSelector,
  transactionToastsSelector
} from 'reduxStore/selectors/toastsSelectors';
import { addTransactionToast, removeTransactionToast } from 'reduxStore/slices';

import { store } from 'reduxStore/store';
import { removeSignedTransaction } from 'services';
import { SignedTransactionsBodyType, SignedTransactionsType } from 'types';
import { TransactionToastType } from 'types/toasts.types';

import { deleteCustomToast } from 'utils/toasts/customToastsActions';
import { getIsTransactionPending } from 'utils/transactions/transactionStateByStatus';

import { WithClassnameType } from '../types';
import {
  CustomToast,
  TransactionToastGuard,
  TransactionToastGuardPropsType
} from './components';
import styles from './transactionsToastList.styles.scss';
import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';
// import { StatusIconType } from 'components/TransactionStatusToast/transactionStatusToast.types';
// import { StatusMessageComponent } from 'components/TransactionStatusToast/StatusMessageComponent';
// import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';

export interface TransactionsToastListPropsType extends WithClassnameType {
  toastProps?: any;
  withTxNonce?: boolean;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
  transactionToastClassName?: string;
  customToastClassName?: string;
}

export const TransactionsToastList = ({
  className = 'transactions-toast-list',
  transactionToastClassName,
  customToastClassName,
  signedTransactions,
  successfulToastLifetime,
  parentElement
}: TransactionsToastListPropsType) => {
  const customToasts = useSelector(customToastsSelector);
  // @ts-ignore
  const failedTransactionToast = useSelector(failTransactionToastSelector);
  const transactionsToasts = useSelector(transactionToastsSelector);
  const dispatch = useDispatch();

  const { signedTransactions: signedTransactionsFromStore } =
    useGetSignedTransactions();

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

  const MemoizedTransactionsToastsList = useMemo(
    () =>
      transactionsToasts.map(
        ({ toastId, type, startTimestamp }: TransactionToastType, i) => {
          const transactionToastGuardProps: TransactionToastGuardPropsType = {
            signedTransactionsToRender,
            toastId,
            type,
            startTimestamp,
            successfulToastLifetime,
            handleDeleteTransactionToast,
            className: transactionToastClassName
          };
          return (
            <TransactionToastGuard
              {...transactionToastGuardProps}
              key={startTimestamp + i}
            />
          );
        }
      ),
    [
      transactionsToasts,
      signedTransactionsToRender,
      successfulToastLifetime,
      handleDeleteTransactionToast
    ]
  );

  const customToastsList = customToasts.map((props) => (
    <CustomToast
      key={props.toastId}
      {...props}
      onDelete={() => handleDeleteCustomToast(props.toastId)}
      className={customToastClassName}
    />
  ));

  // const failedTransactionToastComponent = (
  //   <CustomToast
  //     {...failedTransactionToast}
  //     toastId='failed-status-toast'
  //     duration={20000}
  //     messageComponent={
  //       <StatusMessageComponent
  //         type={StatusIconType.WARNING}
  //         message={message}
  //       />
  //     }
  //     // onDelete={handleDelete}
  //     className={classNames(styles.transactionsStatusToast, className)}
  //     onDelete={console.log}
  //   />
  // );

  console.log({ failedTransactionToast });

  if (failedTransactionToast) {
    customToastsList.push(
      <FailedTransactionStatusToast
        key='failed-status-toast'
        {...failedTransactionToast}
      />
    );
  }

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
      {MemoizedTransactionsToastsList}
    </div>,
    parentElement || document?.body
  );
};
