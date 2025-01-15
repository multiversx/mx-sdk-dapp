import { useEffect, useRef } from 'react';
import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactionStatus';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useGetPendingTransactions } from '../useGetPendingTransactions';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from '../../websocketListener/websocketConnection';
import { useGetPollingInterval } from '../useGetPollingInterval';
import { timestampIsOlderThan } from '../helpers/timestampIsOlderThan';
import { getTransactionsByHashes as defaultGetTxByHash } from '../../../apiCalls';

/**
 * Fallback mechanism to check hanging transactions
 * Resolves the toast and set the status to failed for each transaction after a certain time (90 seconds)
 * */
export const useCheckHangingTransactionsFallback = (
  props?: TransactionsTrackerType
) => {
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const pollingInterval = useGetPollingInterval();
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingIntervalTimer = useRef<NodeJS.Timeout | null>(null);
  const isWebsocketCompleted =
    websocketConnection.status === WebsocketConnectionStatusEnum.COMPLETED;

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const checkHangingTransactions = async () => {
    for (const [sessionId] of pendingTransactionsArray) {
      if (
        !timestampIsOlderThan(
          Number(sessionId),
          TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
        )
      ) {
        continue;
      }

      await checkTransactionStatus({
        getTransactionsByHash,
        ...props
      });
    }
  };

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
      checkHangingTransactions();
    }, pollingInterval);

    return () => {
      if (pollingIntervalTimer.current) {
        clearInterval(pollingIntervalTimer.current);
      }
    };
  }, []);
};
