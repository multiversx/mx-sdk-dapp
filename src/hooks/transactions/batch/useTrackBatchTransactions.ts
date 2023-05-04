import { useCallback, useEffect, useMemo, useRef } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import { useUpdateBatch } from './useUpdateBatch';
import { useGetBatches } from './useGetBatches';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactionStatus';
import { useResolveBatchStatusResponse } from './useResolveBatchStatusResponse';

type TrackBatchTransactionsStatusProps = {
  batchId: string | null;
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useTrackBatchTransactions = ({
  batchId,
  onSuccess,
  onFail
}: TrackBatchTransactionsStatusProps) => {
  const dispatch = useDispatch();
  const stopPollingRef = useRef<boolean>(true);

  const updateBatchTransactionsStatuses = useUpdateBatch();
  const { batches } = useGetBatches();

  const batchTransactions = useMemo(() => {
    if (!batchId) {
      return {};
    }

    return batches[batchId] ?? {};
  }, [batchId, batches]);

  const batchStatus = useMemo(() => {
    if (!batchId) {
      return '';
    }

    return batches[batchId]?.status ?? '';
  }, [batchId, batches]);

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

      await updateBatchTransactionsStatuses({
        batchId: data.batchId,
        shouldRefreshBalance: true
      });
    },
    [verifyBatchStatus, updateBatchTransactionsStatuses]
  );

  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  useEffect(() => {
    const interval = setTimeout(async () => {
      stopPollingRef.current = false;
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (stopPollingRef.current || !batchId) {
        return;
      }

      await verifyBatchStatus({ batchId });
      await updateBatchTransactionsStatuses({
        batchId,
        shouldRefreshBalance: true
      });
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [batchId, verifyBatchStatus, updateBatchTransactionsStatuses]);

  return {
    batchStatus,
    batchTransactions
  };
};
