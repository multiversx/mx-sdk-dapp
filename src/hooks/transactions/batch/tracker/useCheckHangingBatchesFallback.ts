import { useCallback } from 'react';
import {
  TRANSACTIONS_STATUS_DROP_INTERVAL_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactionStatus';
import { useWebsocketPollingFallback } from 'hooks/transactions/useTransactionsTracker/useWebsocketPollingFallback';
import { removeBatchTransactions } from 'services/transactions';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { extractSessionId } from '../../helpers/extractSessionId';
import { timestampIsOlderThan } from '../../helpers/timestampIsOlderThan';
import { useUpdateTrackedTransactions } from '../../useTransactionsTracker/useUpdateTrackedTransactions';
import { useGetBatches } from '../useGetBatches';

/**
 * Fallback mechanism to check hanging batches
 * Resolves the toast and set the status to failed for each transaction after a certain time (10minutes)
 * */
export const useCheckHangingBatchesFallback = (props?: {
  onSuccess?: (sessionId: string | null) => void;
  onFail?: (sessionId: string | null, errorMessage?: string) => void;
}) => {
  const { batchTransactionsArray } = useGetBatches();
  const updateBatch = useUpdateTrackedTransactions();
  const onSuccess = props?.onSuccess;
  const onFail = props?.onFail;

  const checkHangingBatches = useCallback(async () => {
    for (const { batchId, transactions } of batchTransactionsArray) {
      const sessionId = extractSessionId(batchId);
      if (!sessionId) {
        continue;
      }

      if (
        !timestampIsOlderThan(sessionId, TRANSACTIONS_STATUS_DROP_INTERVAL_MS)
      ) {
        continue;
      }

      await updateBatch({
        sessionId: sessionId.toString(),
        shouldRefreshBalance: true,
        dropUnprocessedTransactions: true
      });

      const batchTransactionsArray = sequentialToFlatArray({ transactions });

      const { isPending, isSuccessful, isFailed } = getTransactionsStatus({
        transactions: batchTransactionsArray
      });

      if (!isPending) {
        removeBatchTransactions(batchId);

        if (isSuccessful) {
          onSuccess?.(sessionId.toString());
        }

        if (isFailed) {
          onFail?.(
            sessionId.toString(),
            'Error processing batch transactions. Status: failed'
          );
        }
      }
    }
  }, [batchTransactionsArray, updateBatch, onSuccess, onFail]);

  useWebsocketPollingFallback({
    onPoll: checkHangingBatches,
    pollingInterval: TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
  });
};
