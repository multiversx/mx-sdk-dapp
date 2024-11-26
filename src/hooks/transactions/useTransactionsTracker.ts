import { useEffect, useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useRegisterWebsocketListener } from '../websocketListener';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from '../websocketListener/websocketConnection';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';
import { useGetPollingInterval } from './useGetPollingInterval';

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingInterval = useGetPollingInterval();
  const pollingIntervalTimer = useRef<NodeJS.Timeout | null>(null);
  const isWebsocketCompleted =
    websocketConnection.status === WebsocketConnectionStatusEnum.COMPLETED;

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const onMessage = () => {
    checkTransactionStatus({
      getTransactionsByHash,
      ...props
    });
  };

  useRegisterWebsocketListener(onMessage);

  useEffect(() => {
    if (isWebsocketCompleted) {
      // Do not setInterval if we already subscribe to websocket event
      if (pollingIntervalTimer.current) {
        clearInterval(pollingIntervalTimer.current);
      }

      return;
    }

    if (pollingIntervalTimer.current) {
      return;
    }

    pollingIntervalTimer.current = setInterval(onMessage, pollingInterval);

    return () => {
      if (pollingIntervalTimer.current) {
        clearInterval(pollingIntervalTimer.current);
      }
    };
  }, [onMessage, websocketConnection]);
}
