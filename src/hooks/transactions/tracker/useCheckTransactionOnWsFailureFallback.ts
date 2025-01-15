import { useEffect, useRef } from 'react';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useGetPollingInterval } from '../useGetPollingInterval';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from '../../websocketListener/websocketConnection';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';

/**
 * Fallback mechanism to check the transaction in case of ws connection failure
 * Resolves the toast by checking the transaction after a certain time (90seconds)
 * */
export const useCheckTransactionOnWsFailureFallback = (
  props?: TransactionsTrackerType
) => {
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingInterval = useGetPollingInterval();
  const pollingIntervalTimer = useRef<NodeJS.Timeout | null>(null);
  const isWebsocketCompleted =
    websocketConnection.status === WebsocketConnectionStatusEnum.COMPLETED;

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

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

    pollingIntervalTimer.current = setInterval(() => {
      checkTransactionStatus({
        getTransactionsByHash,
        ...props
      });
    }, pollingInterval);

    return () => {
      if (pollingIntervalTimer.current) {
        clearInterval(pollingIntervalTimer.current);
      }
    };
  }, [checkTransactionStatus]);
};
