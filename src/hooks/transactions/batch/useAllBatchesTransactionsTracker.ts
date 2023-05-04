import { useCallback, useEffect, useRef } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
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
import { removeBatchTransactions } from 'services/transactions';
import { useCheckTransactionStatus } from '../useCheckTransactionStatus';
import { useGetPendingTransactions } from '../useGetPendingTransactions';

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
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const checkTransactionsStatuses = useCheckTransactionStatus();

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

      const { isSuccessful, isPending } = getTransactionsStatus({
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

      if (!isPending) {
        removeBatchTransactions(batchId);
      }
    },
    [
      dispatch,
      resolveBatchStatusResponse,
      updateBatch,
      signedTransactions,
      onSuccess,
      onFail
    ]
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
        removeBatchTransactions(batchId);
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
  }, [batchTransactionsArray, verifyBatchStatus]);

  // register ws listener
  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  // Activate polling after 90 seconds (the fallback for ws connection failure)
  useEffect(() => {
    const interval = setTimeout(async () => {
      startPolling.current = true;
    }, TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // On page reload check all batches
    checkAllBatchStatusesOnPageLoad();

    // Fallback (edge-case): in case of ws connection failure the toast should be resolved after a certain time (90seconds)
    const interval = setInterval(async () => {
      if (!startPolling.current) {
        return;
      }

      checkAllBatchStatusesOnPageLoad();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkAllBatchStatusesOnPageLoad]);

  // Fallback (edge-case): in case of dropped transactions the toast should be resolved setting the status to failed after a certain time (10minutes)
  useEffect(() => {
    const interval = setInterval(async () => {
      checkHangingBatches();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkHangingBatches]);

  // Fallback (edge-case): in case of pending transactions and no batch transactions found the toast should be resolved
  useEffect(() => {
    if (
      pendingTransactionsArray.length > 0 &&
      batchTransactionsArray.length === 0
    ) {
      checkTransactionsStatuses({
        shouldRefreshBalance: true
      });
    }
  }, [
    pendingTransactionsArray,
    batchTransactionsArray,
    checkTransactionsStatuses
  ]);
};
