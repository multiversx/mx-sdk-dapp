import { useCallback } from 'react';
import { useResolveBatchStatusResponse } from 'hooks/transactions/batch/useResolveBatchStatusResponse';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { useCheckBatch } from './useCheckBatch';
import { useUpdateBatch } from './useUpdateBatch';

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
      const sessionId = batchId.split('-')[0];
      const session = signedTransactions[sessionId];

      if (!session) {
        return;
      }

      const { isSuccessful, isFailed, isPending } = getTransactionsStatus({
        transactions: signedTransactions[sessionId]?.transactions ?? []
      });
      const completed = !isPending;

      if (completed) {
        if (isSuccessful) {
          onSuccess?.(batchId);
        }

        if (isFailed) {
          onFail?.(batchId, 'Error processing batch transactions.');
        }
      } else {
        const data = await checkBatch({ batchId });
        await updateBatch({
          batchId,
          isBatchFailed: data?.isBatchFailed,
          shouldRefreshBalance: true
        });
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
