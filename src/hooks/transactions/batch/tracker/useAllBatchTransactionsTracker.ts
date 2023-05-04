import { useCallback, useEffect } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import { useGetBatches } from '../useGetBatches';
import { useCheckPendingTransactionsFallback } from './useCheckPendingTransactionsFallback';
import { useCheckHangingBatchesFallback } from './useCheckHangingBatchesFallback';
import { useCheckBatchesOnWsFailureFallback } from './useCheckBatchesOnWsFailureFallback';
import { useVerifyBatchStatus } from './useVerifyBatchStatus';

export type BatchTransactionsTrackerProps = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useAllBatchTransactionsTracker = ({
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
