import { useCallback, useEffect } from 'react';
import { useGetAccount } from 'hooks/account';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import { BatchTransactionsWSResponseType } from 'types';
import { useCheckBatchesOnWsFailureFallback } from './useCheckBatchesOnWsFailureFallback';
import { useCheckHangingBatchesFallback } from './useCheckHangingBatchesFallback';
import { useCheckPendingTransactionsFallback } from './useCheckPendingTransactionsFallback';
import { useVerifyBatchStatus } from './useVerifyBatchStatus';

export type BatchTransactionsTrackerProps = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useAllBatchTransactionsTracker = ({
  onSuccess,
  onFail
}: BatchTransactionsTrackerProps) => {
  const { signedTransactionsArray } = useGetSignedTransactions();
  const { address } = useGetAccount();

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
    for (const [sessionId, session] of signedTransactionsArray) {
      if (session.status !== 'sent') {
        continue;
      }

      const batchId = `${sessionId}-${address}`;
      await verifyBatchStatus({ batchId });
    }
  }, [signedTransactionsArray, verifyBatchStatus, address]);

  // register ws listener
  useRegisterWebsocketListener(onMessage, onBatchUpdate);
  // Fallbacks
  useCheckBatchesOnWsFailureFallback({
    onSuccess,
    onFail
  });
  useCheckHangingBatchesFallback({
    onSuccess,
    onFail
  });
  useCheckPendingTransactionsFallback({
    onSuccess,
    onFail
  });

  useEffect(() => {
    checkAllBatches();
  }, [checkAllBatches]);
};
