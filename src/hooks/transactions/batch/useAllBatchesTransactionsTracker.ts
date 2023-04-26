import { useCallback, useEffect, useRef } from 'react';
import { BatchTransactionStatus, BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL
} from 'constants/transactionStatus';
import { useUpdateBatches } from './useUpdateBatches';
import { useResolveBatchStatusResponse } from './useResolveBatchStatusResponse';
import { useGetBatches } from './useGetBatches';

export type AllBatchesTransactionsTracker = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useAllBatchesTransactionsTracker = ({
  onSuccess,
  onFail
}: AllBatchesTransactionsTracker) => {
  const dispatch = useDispatch();
  const stopPollingRef = useRef<boolean>(true);

  const { batches, batchTransactionsArray } = useGetBatches();

  const updateAllBatches = useUpdateBatches();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  const verifyBatchStatus = useCallback(
    async ({ batchId }: { batchId: string }) => {
      const { statusResponse, isBatchSuccessful, isBatchFailed } =
        await resolveBatchStatusResponse({ batchId });

      if (!statusResponse) {
        stopPollingRef.current = true;
        return;
      }

      dispatch(updateBatchTransactions(statusResponse));

      if (isBatchSuccessful) {
        onSuccess?.(batchId);
      } else if (isBatchFailed) {
        onFail?.(
          batchId,
          `Error processing batch transactions. Status: ${statusResponse?.status}`
        );
      }

      stopPollingRef.current = true;
    },
    [resolveBatchStatusResponse, onSuccess, onFail]
  );

  const onMessage = useCallback(() => {
    // Do nothing, used for backwards compatibility to avoid breaking changes
    // TODO: Will be removed in the next major release
  }, []);

  const onBatchUpdate = useCallback(
    async (data: BatchTransactionsWSResponseType) => {
      await verifyBatchStatus({ batchId: data.batchId });

      await updateAllBatches({
        shouldRefreshBalance: true
      });
    },
    [verifyBatchStatus, updateAllBatches]
  );

  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  useEffect(() => {
    const interval = setTimeout(async () => {
      stopPollingRef.current = false;
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (stopPollingRef.current) {
        return;
      }

      const pendingBatches = batchTransactionsArray.filter((batch) => {
        const isPending =
          batch.batchId != null &&
          batches[batch.batchId]?.status === BatchTransactionStatus.pending;
        return isPending;
      });

      for (const { batchId } of pendingBatches) {
        await verifyBatchStatus({ batchId });
      }

      await updateAllBatches({
        shouldRefreshBalance: true
      });
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [verifyBatchStatus, updateAllBatches, batches, batchTransactionsArray]);
};
