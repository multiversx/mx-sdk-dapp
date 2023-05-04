import { useCallback, useEffect, useRef } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import {
  clearBatchTransactions,
  updateBatchTransactions
} from 'reduxStore/slices';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_DROP_INTERVAL_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactionStatus';
import { useResolveBatchStatusResponse } from './useResolveBatchStatusResponse';
import { useGetBatches } from './useGetBatches';
import { useUpdateBatch } from './useUpdateBatch';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { useGetSignedTransactions } from '../useGetSignedTransactions';
import { store } from 'reduxStore/store';

export type AllBatchesTransactionsTracker = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useAllBatchesTransactionsTracker = ({
  onSuccess,
  onFail
}: AllBatchesTransactionsTracker) => {
  const dispatch = useDispatch();
  const startPolling = useRef<boolean>(false);

  const { signedTransactions } = useGetSignedTransactions();
  const { batches, batchTransactionsArray } = useGetBatches();

  const updateBatch = useUpdateBatch();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  const verifyBatchStatus = useCallback(
    async ({ batchId }: { batchId: string }) => {
      const { statusResponse, isBatchFailed } =
        await resolveBatchStatusResponse({ batchId });

      if (!statusResponse) {
        return;
      }

      dispatch(updateBatchTransactions(statusResponse));

      const sessionId = batchId.split('-')[0];
      if (!sessionId) {
        return;
      }

      await updateBatch({
        batchId,
        isBatchFailed,
        shouldRefreshBalance: true
      });

      const { isSuccessful } = getTransactionsStatus({
        transactions: signedTransactions[sessionId]?.transactions ?? []
      });

      if (isSuccessful) {
        onSuccess?.(batchId);
      } else {
        onFail?.(
          batchId,
          `Error processing batch transactions. Status: ${statusResponse?.status}`
        );
      }
    },
    [dispatch, resolveBatchStatusResponse, onSuccess, onFail]
  );

  const onMessage = useCallback(() => {
    // Do nothing, used for backwards compatibility to avoid breaking changes
    // TODO: Will be removed in the next major release
  }, []);

  const onBatchUpdate = useCallback(
    async (data: BatchTransactionsWSResponseType) => {
      await verifyBatchStatus({ batchId: data.batchId });
    },
    [verifyBatchStatus]
  );

  const isBatchHanding = useCallback((batchId: string, olderThanMs: number) => {
    const sessionTimestamp = parseInt(batchId.split('-')[0]);

    const diff = new Date().getTime() - sessionTimestamp;

    return diff > olderThanMs;
  }, []);

  const checkHangingBatches = useCallback(async () => {
    for (const { batchId, transactions } of batchTransactionsArray) {
      if (!isBatchHanding(batchId, TRANSACTIONS_STATUS_DROP_INTERVAL_MS)) {
        continue;
      }

      const sessionId = batchId.split('-')[0];
      if (!sessionId) {
        continue;
      }

      await updateBatch({
        batchId,
        shouldRefreshBalance: true,
        dropUnprocessedTransactions: true
      });

      const batchTransactionsArray = sequentialToFlatArray({ transactions });

      const { isPending } = getTransactionsStatus({
        transactions: batchTransactionsArray
      });

      if (!isPending) {
        store.dispatch(clearBatchTransactions({ batchId }));
      }
    }
  }, [
    isBatchHanding,
    batches,
    batchTransactionsArray,
    signedTransactions,
    dispatch
  ]);

  const checkAllBatchStatusesOnPageLoad = useCallback(async () => {
    for (const { batchId } of batchTransactionsArray) {
      await verifyBatchStatus({ batchId });
    }
  }, [batchTransactionsArray, verifyBatchStatus, updateBatch]);

  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  useEffect(() => {
    const interval = setTimeout(async () => {
      startPolling.current = true;
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!startPolling.current || batchTransactionsArray.length === 0) {
        return;
      }

      checkAllBatchStatusesOnPageLoad();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkAllBatchStatusesOnPageLoad, batchTransactionsArray]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (batchTransactionsArray.length === 0) {
        return;
      }

      checkHangingBatches();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkHangingBatches, batchTransactionsArray]);

  useEffect(() => {
    checkAllBatchStatusesOnPageLoad();
  }, [checkAllBatchStatusesOnPageLoad]);
};
