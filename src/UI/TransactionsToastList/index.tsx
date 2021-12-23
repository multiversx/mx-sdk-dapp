import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useGetPendingTransactions } from 'services/transactions';
import TransactionToast from 'UI/TransactionToast';
import { getGeneratedClasses } from 'utils';

import { TransactionsToastListPropsType } from './types';

export function TransactionsToastList({
  shouldRenderDefaultCss = true,
  className = 'transactions-toast-list'
}: TransactionsToastListPropsType) {
  const [toastsIds, setToastsIds] = useState<any>([]);

  const { pendingTransactions } = useGetPendingTransactions();
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper:
        'toast-messages d-flex flex-column align-items-center justify-content-sm-end',
      toast: ''
    }
  );

  const mappedToastsList = toastsIds?.map((toastId: string) => {
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

  const mapPendingSignedTransactions = () => {
    const newToasts = [...toastsIds];

    for (const sessionId in pendingTransactions) {
      const hasToast = toastsIds.includes(sessionId);

      if (!hasToast) {
        newToasts.push(sessionId);
      }
    }

    setToastsIds(newToasts);
  };

  const fetchSessionStorageToasts = () => {
    const sessionStorageToastsIds = sessionStorage.getItem('toasts');

    if (sessionStorageToastsIds) {
      const newToasts = [...toastsIds, ...sessionStorageToastsIds];
      setToastsIds(newToasts);
    }
  };

  const saveSessionStorageToasts = () => {
    const shouldSaveLocalToasts = Boolean(toastsIds.length);
    if (!shouldSaveLocalToasts) {
      return;
    }

    sessionStorage.setItem('toasts', toastsIds);
  };

  useEffect(() => {
    fetchSessionStorageToasts();
    return () => {
      saveSessionStorageToasts();
    };
  }, []);

  useEffect(() => {
    mapPendingSignedTransactions();
  }, [pendingTransactions]);

  return <div className={generatedClasses.wrapper}>{mappedToastsList}</div>;
}

export default TransactionsToastList;
