import { useEffect } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useRegisterWebsocketListener } from '../websocketListener';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';
import { useGetPollingInterval } from './useGetPollingInterval';

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingInterval = useGetPollingInterval();
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
    const interval = setInterval(onMessage, pollingInterval);

    return () => {
      clearInterval(interval);
    };
  }, [onMessage]);
}
