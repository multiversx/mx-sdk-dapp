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

      const { isSuccessful, isFailed, isPending } = getTransactionsStatus({
        transactions: signedTransactions[sessionId]?.transactions ?? []
      });

      if (!isPending) {
        removeBatchTransactions(batchId);

        if (isSuccessful) {
          onSuccess?.(batchId);
        }

        if (isFailed) {
          onFail?.(
            batchId,
            `Error processing batch transactions. Status: ${data?.statusResponse?.status}`
          );
        }
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
