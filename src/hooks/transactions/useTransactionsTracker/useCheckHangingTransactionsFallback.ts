import { useEffect, useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactionStatus';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { timestampIsOlderThan } from '../helpers/timestampIsOlderThan';
import { useGetPendingTransactions } from '../useGetPendingTransactions';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';

/**
 * Fallback mechanism to check hanging transactions
 * Resolves the toast and set the status to failed for each transaction after a certain time (90 seconds)
 * */
export const useCheckHangingTransactionsFallback = (
  props?: TransactionsTrackerType
) => {
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingIntervalTimer = useRef<NodeJS.Timeout | null>(null);

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
    if (pollingIntervalTimer.current) {
      return;
    }

    pollingIntervalTimer.current = setInterval(() => {
      checkHangingTransactions();
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);

    return () => {
      if (pollingIntervalTimer.current) {
        clearInterval(pollingIntervalTimer.current);
      }
    };
  }, []);
};
