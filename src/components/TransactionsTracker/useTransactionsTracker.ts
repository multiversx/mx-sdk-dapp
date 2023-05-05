import { useEffect } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { useCheckTransactionStatus, useRegisterWebsocketListener } from 'hooks';
import { GetTransactionsByHashesType } from 'types/transactions.types';

export interface TransactionsTrackerType {
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const checkTransactionStatus = useCheckTransactionStatus();

  const onMessage = () => {
    checkTransactionStatus({
      shouldRefreshBalance: true,
      getTransactionsByHash
    });
  };

  useRegisterWebsocketListener(onMessage);

  useEffect(() => {
    const interval = setInterval(onMessage, 30000);
    return () => {
      clearInterval(interval);
    };
  }, [onMessage]);
}
