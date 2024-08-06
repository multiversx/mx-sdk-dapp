import { useEffect, useState } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useRegisterWebsocketListener } from '../websocketListener';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';
import { useGetPollingInterval } from './useGetPollingInterval';
import { WebsocketConnectionStatusEnum } from '../websocketListener/websocketConnection';

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingInterval = useGetPollingInterval();
  const [pollingIntervalTimer, setPollingIntervalTimer] =
    useState<NodeJS.Timeout>();

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const onMessage = () => {
    checkTransactionStatus({
      shouldRefreshBalance: true,
      getTransactionsByHash,
      ...props
    });
  };

  const websocketConnection = useRegisterWebsocketListener(onMessage);

  const setPollingInterval = async () => {
    if (
      websocketConnection.status === WebsocketConnectionStatusEnum.COMPLETED ||
      pollingIntervalTimer
    ) {
      // Do not setInterval if we already subscribe to websocket event
      clearInterval(pollingIntervalTimer);
      setPollingIntervalTimer(undefined);
      return;
    }

    setPollingIntervalTimer(setInterval(onMessage, pollingInterval));

    return () => {
      clearInterval(pollingIntervalTimer);
    };
  };

  useEffect(() => {
    setPollingInterval();
  }, [onMessage, websocketConnection]);
}
