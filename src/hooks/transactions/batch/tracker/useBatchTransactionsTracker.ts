import { useEffect } from 'react';
import { useGetAccount } from 'hooks/account';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import {
  BatchTransactionsWSResponseType,
  TransactionBatchStatusesEnum
} from 'types';
import { useCheckBatchesOnWsFailureFallback } from './useCheckBatchesOnWsFailureFallback';
import { useCheckHangingBatchesFallback } from './useCheckHangingBatchesFallback';
// import { useCheckPendingTransactionsFallback } from './useCheckPendingTransactionsFallback';
import { useVerifyBatchStatus } from './useVerifyBatchStatus';

export type BatchTransactionsTrackerProps = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useBatchTransactionsTracker = ({
  onSuccess,
  onFail
}: BatchTransactionsTrackerProps) => {
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
    console.log({
      signedTransactionsArray
    });

    for (const [sessionId, session] of signedTransactionsArray) {
      if (
        session.status !== TransactionBatchStatusesEnum.sent &&
        session.status !== TransactionBatchStatusesEnum.signed
      ) {
        continue;
      }

      const batchId = `${sessionId}-${address}`;
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
  // useCheckPendingTransactionsFallback({
  //   onSuccess,
  //   onFail
  // });

  useEffect(() => {
    checkAllBatches();
  }, []);
};
