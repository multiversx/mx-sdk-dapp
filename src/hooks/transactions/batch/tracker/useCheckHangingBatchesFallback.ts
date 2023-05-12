import { useCallback, useEffect } from 'react';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_DROP_INTERVAL_MS
} from 'constants/transactionStatus';
import { isOlderThan } from 'hooks/transactions/helpers/isOlderThan';
import { removeBatchTransactions } from 'services/transactions';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { useGetBatches } from '../useGetBatches';
import { useUpdateBatch } from './useUpdateBatch';

/**
 * Fallback mechanism to check hanging batches
 * Resolves the toast and set the status to failed for each transaction after a certain time (10minutes)
 * */
export const useCheckHangingBatchesFallback = (props?: {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
}) => {
  const { batchTransactionsArray } = useGetBatches();
  const updateBatch = useUpdateBatch();
  const onSuccess = props?.onSuccess;
  const onFail = props?.onFail;

  const checkHangingBatches = useCallback(async () => {
    for (const { batchId, transactions } of batchTransactionsArray) {
      if (!isOlderThan(batchId, TRANSACTIONS_STATUS_DROP_INTERVAL_MS)) {
        continue;
      }

      const sessionId = batchId.split('-')[0];
      if (!sessionId) {
        continue;
      }

      await updateBatch({
        sessionId,
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
          onSuccess?.(batchId);
        }

        if (isFailed) {
          onFail?.(
            batchId,
            'Error processing batch transactions. Status: failed'
          );
        }
      }
    }
  }, [batchTransactionsArray, updateBatch, onSuccess, onFail]);

  useEffect(() => {
    const interval = setInterval(async () => {
      checkHangingBatches();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkHangingBatches]);
};
