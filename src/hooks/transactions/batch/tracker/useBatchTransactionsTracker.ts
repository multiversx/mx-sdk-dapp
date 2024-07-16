import { useEffect } from 'react';
import { useGetAccount } from 'hooks/account';
import { useGetBatches } from 'hooks/transactions/batch/useGetBatches';
import { buildBatchId } from 'hooks/transactions/helpers/buildBatchId';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import {
  BatchTransactionsWSResponseType,
  TransactionBatchStatusesEnum
} from 'types';
import { useCheckBatchesOnWsFailureFallback } from './useCheckBatchesOnWsFailureFallback';
import { useCheckHangingBatchesFallback } from './useCheckHangingBatchesFallback';
import { useVerifyBatchStatus } from './useVerifyBatchStatus';

export type BatchTransactionsTrackerProps = {
  onSuccess?: (sessionId: string | null) => void;
  onFail?: (sessionId: string | null, errorMessage?: string) => void;
};

export const useBatchTransactionsTracker = ({
  onSuccess,
  onFail
}: BatchTransactionsTrackerProps) => {
  const { batches } = useGetBatches();
  const { signedTransactionsArray } = useGetSignedTransactions();
  const { address } = useGetAccount();

  const { verifyBatchStatus } = useVerifyBatchStatus({
    onSuccess,
    onFail
  });

  const onMessage = () => {
    // Do nothing, used for backwards compatibility to avoid breaking changes
    // TODO: Will be removed in the next major release
  };

  const onBatchUpdate = async (data: BatchTransactionsWSResponseType) => {
    await verifyBatchStatus({ batchId: data.batchId });
  };

  const checkAllBatches = async () => {
    for (const [sessionId, session] of signedTransactionsArray) {
      const batchId = buildBatchId({
        sessionId,
        address
      });

      const batchDoesNotExists = !Boolean(batches[batchId]);
      const isPending = session.status !== TransactionBatchStatusesEnum.sent;
      const isCompleted = !isPending;

      if (isCompleted || batchDoesNotExists) {
        continue;
      }

      await verifyBatchStatus({ batchId });
    }
  };

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

  useEffect(() => {
    checkAllBatches();
  }, []);
};
