import { useCallback } from 'react';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { removeBatchTransactions } from 'services/transactions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useUpdateBatch } from './useUpdateBatch';
import { useResolveBatchStatusResponse } from 'hooks/transactions/batch/useResolveBatchStatusResponse';
import { useCheckBatch } from './useCheckBatch';

export const useVerifyBatchStatus = (props?: {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
}) => {
  const dispatch = useDispatch();
  const { signedTransactions } = useGetSignedTransactions();

  const checkBatch = useCheckBatch();
  const updateBatch = useUpdateBatch();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  const onSuccess = props?.onSuccess;
  const onFail = props?.onFail;

  const verifyBatchStatus = useCallback(
    async ({ batchId }: { batchId: string }) => {
      const data = await checkBatch({ batchId });
      await updateBatch({
        batchId,
        isBatchFailed: data?.isBatchFailed,
        shouldRefreshBalance: true
      });

      const sessionId = batchId.split('-')[0];
      if (!sessionId) {
        return;
      }

      const { isSuccessful, isPending } = getTransactionsStatus({
        transactions: signedTransactions[sessionId]?.transactions ?? []
      });

      if (isSuccessful) {
        onSuccess?.(batchId);
      } else {
        onFail?.(
          batchId,
          `Error processing batch transactions. Status: ${data?.statusResponse?.status}`
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
      checkBatch,
      onSuccess,
      onFail
    ]
  );

  return { verifyBatchStatus };
};
