import { useCallback } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactionStatus';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { timestampIsOlderThan } from '../helpers/timestampIsOlderThan';
import { useCheckTransactionStatus } from '../useCheckTransactionStatus';
import { useGetPendingTransactions } from '../useGetPendingTransactions';
import { useWebsocketPollingFallback } from './useWebsocketPollingFallback';
/**
 * Fallback mechanism to check hanging transactions
 * Resolves the toast and set the status to failed for each transaction after a certain time (90 seconds)
 * */
export const useCheckHangingTransactionsFallback = (
  props?: TransactionsTrackerType
) => {
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const checkTransactionStatus = useCheckTransactionStatus();
  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const checkHangingTransactions = useCallback(async () => {
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
  }, [
    pendingTransactionsArray,
    checkTransactionStatus,
    getTransactionsByHash,
    props
  ]);

  useWebsocketPollingFallback({
    onPoll: checkHangingTransactions,
    pollingInterval: TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
  });
};
