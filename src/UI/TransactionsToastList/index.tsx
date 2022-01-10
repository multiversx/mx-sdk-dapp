import React, { useEffect, useState } from 'react';
import { useGetPendingTransactions } from 'services/transactions';
import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from 'storage/session';
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
    return <TransactionToast key={toastId} toastId={toastId} />;
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
    const sessionStorageToastsIds = getToastsIdsFromStorage();

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

    setToastsIdsToStorage(toastsIds);
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
