import { useCallback, useEffect } from 'react';
import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactionStatus';
import { extractSessionId } from '../../helpers/extractSessionId';
import { timestampIsOlderThan } from '../../helpers/timestampIsOlderThan';
import { useGetPollingInterval } from '../../useGetPollingInterval';
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
  const pollingInterval = useGetPollingInterval();

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
    }, pollingInterval);

    return () => clearInterval(interval);
  }, [checkAllBatches]);
};
