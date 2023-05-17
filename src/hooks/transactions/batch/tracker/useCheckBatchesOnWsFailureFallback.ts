import { useCallback, useEffect } from 'react';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactionStatus';
import { useGetBatches } from 'hooks/transactions/batch/useGetBatches';
import { extractSessionId } from 'hooks/transactions/helpers/extractSessionId';
import { timestampIsOlderThan } from 'hooks/transactions/helpers/timestampIsOlderThan';
import { useVerifyBatchStatus } from './useVerifyBatchStatus';

/**
 * Fallback mechanism to check batches in case of ws connection failure
 * Resolves the toast by checking the status of each transaction in batch after a certain time (90seconds)
 * */
export const useCheckBatchesOnWsFailureFallback = (props?: {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
}) => {
  const { batchTransactionsArray } = useGetBatches();
  const { verifyBatchStatus } = useVerifyBatchStatus(props);

  const checkAllBatches = useCallback(async () => {
    for (const { batchId } of batchTransactionsArray) {
      const sessionId = extractSessionId(batchId);
      if (!sessionId) {
        continue;
      }

      if (
        !timestampIsOlderThan(
          sessionId,
          TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
        )
      ) {
        continue;
      }

      await verifyBatchStatus({ batchId });
    }
  }, [batchTransactionsArray, verifyBatchStatus]);

  useEffect(() => {
    const interval = setInterval(async () => {
      checkAllBatches();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkAllBatches]);
};
