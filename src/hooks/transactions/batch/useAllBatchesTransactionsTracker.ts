import { useCallback, useEffect, useRef } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL
} from 'constants/transactionStatus';
import { useUpdateBatches } from './useUpdateBatches';
import { useResolveBatchStatusResponse } from './useResolveBatchStatusResponse';

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

  const updateBatchAllBatches = useUpdateBatches();
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

      await updateBatchAllBatches({
        shouldRefreshBalance: true
      });
    },
    [verifyBatchStatus, updateBatchAllBatches]
  );

  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  useEffect(() => {
    const interval = setTimeout(async () => {
      stopPollingRef.current = false;
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, [onMessage, stopPollingRef.current]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (stopPollingRef.current) {
        return;
      }

      await updateBatchAllBatches({
        shouldRefreshBalance: true
      });
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [verifyBatchStatus, stopPollingRef.current]);
};
