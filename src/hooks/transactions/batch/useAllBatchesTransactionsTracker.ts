import { useCallback, useEffect } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import { useGetBatches } from './useGetBatches';
import { useCheckPendingTransactionsFallback } from './tracker/useCheckPendingTransactionsFallback';
import { useCheckHangingBatchesFallback } from './tracker/useCheckHangingBatchesFallback';
import { useCheckBatchesOnWsFailureFallback } from './tracker/useCheckBatchesOnWsFailureFallback';
import { useVerifyBatchStatus } from './tracker/useVerifyBatchStatus';

export type BatchTransactionsTrackerProps = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useAllBatchesTransactionsTracker = ({
  onSuccess,
  onFail
}: BatchTransactionsTrackerProps) => {
  const { batchTransactionsArray } = useGetBatches();
  const { verifyBatchStatus } = useVerifyBatchStatus({
    onSuccess,
    onFail
  });

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

  const checkAllBatches = useCallback(async () => {
    for (const { batchId } of batchTransactionsArray) {
      await verifyBatchStatus({ batchId });
    }
  }, [batchTransactionsArray, verifyBatchStatus]);

  // register ws listener
  useRegisterWebsocketListener(onMessage, onBatchUpdate);
  // Fallbacks
  useCheckBatchesOnWsFailureFallback({
    onSuccess,
    onFail
  });
  // TODO should be added onSuccess and onFail callbacks ???
  useCheckHangingBatchesFallback();
  useCheckPendingTransactionsFallback();

  useEffect(() => {
    checkAllBatches();
  }, [checkAllBatches]);
};
