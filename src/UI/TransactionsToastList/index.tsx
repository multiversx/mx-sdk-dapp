import React, { useEffect, useState } from 'react';
import { useGetSignedTransactions } from 'hooks';
import { useSelector } from 'redux/DappProviderContext';
import { shardSelector } from 'redux/selectors';
import { useGetPendingTransactions } from 'services';
import { isCrossShardTransaction } from 'services/transactions/isCrossShardTransaction';
import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from 'storage/session';
import { SignedTransactionType } from 'types';
import TransactionToast from 'UI/TransactionToast';
import { getAddressFromDataField, getGeneratedClasses } from 'utils';

import { TransactionsToastListPropsType } from './types';

export function TransactionsToastList({
  shouldRenderDefaultCss = true,
  withTxNonce = false,
  className = 'transactions-toast-list'
}: TransactionsToastListPropsType) {
  const [toastsIds, setToastsIds] = useState<any>([]);

  const { pendingTransactions } = useGetPendingTransactions();
  const signedTransactions = useGetSignedTransactions();
  const accountShard = useSelector(shardSelector);
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
    const currentTx: any = signedTransactions[toastId];
    if (currentTx == null) {
      return null;
    }

    const { transactions, status } = currentTx;
    const isSameShard = transactions.reduce(
      (
        prevTxIsSameShard: boolean,
        { receiver, data }: SignedTransactionType
      ) => {
        const receiverAddress = getAddressFromDataField({
          receiver,
          data
        });
        if (receiverAddress == null) {
          return prevTxIsSameShard;
        }
        return (
          prevTxIsSameShard &&
          isCrossShardTransaction({
            receiverAddress,
            senderShard: accountShard
          })
        );
      },
      true
    );
    return (
      <TransactionToast
        className={className}
        key={toastId}
        isSameShard={isSameShard}
        transactions={transactions}
        status={status}
        toastId={toastId}
        withTxNonce={withTxNonce}
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
