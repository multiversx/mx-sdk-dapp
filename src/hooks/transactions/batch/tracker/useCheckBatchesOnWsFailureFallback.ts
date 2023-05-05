import { useCallback, useEffect, useRef } from 'react';
import { useGetBatches } from 'hooks/transactions/batch/useGetBatches';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactionStatus';
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
  const startPolling = useRef<boolean>(false);

  const checkAllBatches = useCallback(async () => {
    for (const { batchId } of batchTransactionsArray) {
      await verifyBatchStatus({ batchId });
    }
  }, [batchTransactionsArray, verifyBatchStatus]);

  useEffect(() => {
    const interval = setTimeout(async () => {
      startPolling.current = true;
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!startPolling.current) {
        return;
      }

      checkAllBatches();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkAllBatches]);
};
