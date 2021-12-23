import React, { useEffect, useMemo } from 'react';
import moment from 'moment';
import { useGetPendingTransactions } from 'services/transactions';
import TransactionToast from 'UI/TransactionToast';
import { getGeneratedClasses } from 'utils';

import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from '../../storage/session';
import { TransactionsToastListPropsType } from './types';

export function TransactionsToastList({
  shouldRenderDefaultCss = true,
  className = 'transactions-toast-list'
}: TransactionsToastListPropsType) {
  const { pendingTransactions, hasPendingTransactions } =
    useGetPendingTransactions();
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper:
        'toast-messages d-flex flex-column align-items-center justify-content-sm-end',
      toast: ''
    }
  );

  const toastsList = useMemo(() => {
    const toastsFromStorage = getToastsIdsFromStorage();
    const renderedToasts = [...toastsFromStorage];
    for (const sessionId in pendingTransactions) {
      const hasToast = renderedToasts.includes(sessionId);

      if (!hasToast) {
        renderedToasts.push(sessionId);
      }
    }

    return renderedToasts?.map((toastId: string) => {
      const startTime = moment().unix();
      const endTime = moment().add(10, 'seconds').unix();
      return (
        <TransactionToast
          key={toastId}
          toastId={toastId}
          endTime={endTime}
          startTime={startTime}
        />
      );
    });
  }, [pendingTransactions]);

  const saveSessionStorageToasts = () => {
    if (!hasPendingTransactions) {
      return;
    }
    setToastsIdsToStorage(Object.keys(pendingTransactions));
  };

  useEffect(() => {
    window.addEventListener('beforeunload', () => saveSessionStorageToasts);
  }, []);

  return <div className={generatedClasses.wrapper}>{toastsList}</div>;
}

export default TransactionsToastList;
