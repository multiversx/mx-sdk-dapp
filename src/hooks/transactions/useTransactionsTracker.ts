import { useEffect } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import {
  useCheckTransactionStatus,
  useRegisterWebsocketListener
} from 'hooks/index';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const checkTransactionStatus = useCheckTransactionStatus();

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const onMessage = () => {
    checkTransactionStatus({
      shouldRefreshBalance: true,
      getTransactionsByHash,
      ...props
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
