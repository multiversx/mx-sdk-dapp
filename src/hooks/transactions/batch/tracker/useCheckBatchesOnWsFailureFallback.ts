import { useCallback } from 'react';
import { useWebsocketPollingFallback } from 'hooks/transactions/useTransactionsTracker/useWebsocketPollingFallback';
import { extractSessionId } from '../../helpers/extractSessionId';
import { timestampIsOlderThan } from '../../helpers/timestampIsOlderThan';
import { useGetBatches } from '../useGetBatches';
import { useVerifyBatchStatus } from './useVerifyBatchStatus';
/**
 * Fallback mechanism to check batches in case of ws connection failure
 * Resolves the toast by checking the status of each transaction in batch after a certain time (90seconds)
 * */
export const useCheckBatchesOnWsFailureFallback = (props?: {
  onSuccess?: (sessionId: string | null) => void;
  onFail?: (sessionId: string | null, errorMessage?: string) => void;
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

  useWebsocketPollingFallback({
    onPoll: checkAllBatches
  });
};
