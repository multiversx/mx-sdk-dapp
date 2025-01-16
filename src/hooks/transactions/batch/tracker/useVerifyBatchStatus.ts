import { useCallback } from 'react';
import { useResolveBatchStatusResponse } from 'hooks/transactions/batch/useResolveBatchStatusResponse';
import { extractSessionId } from 'hooks/transactions/helpers/extractSessionId';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { useUpdateTrackedTransactions } from '../../useTransactionsTracker/useUpdateTrackedTransactions';
import { useCheckBatch } from './useCheckBatch';

export const useVerifyBatchStatus = (props?: {
  onSuccess?: (sessionId: string | null) => void;
  onFail?: (sessionId: string | null, errorMessage?: string) => void;
}) => {
  const dispatch = useDispatch();
  const { signedTransactions } = useGetSignedTransactions();

  const checkBatch = useCheckBatch();
  const updateBatch = useUpdateTrackedTransactions();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  const onSuccess = props?.onSuccess;
  const onFail = props?.onFail;

  const verifyBatchStatus = useCallback(
    async ({ batchId }: { batchId: string }) => {
      const sessionId = extractSessionId(batchId)?.toString() ?? '';
      const session = signedTransactions[sessionId];

      if (!session) {
        return;
      }

      // If the grouping is missing then means the transactions were sent with the normal flow
      const grouping = session.customTransactionInformation?.grouping;
      if (!grouping) {
        return;
      }

      const sessionTransactions =
        signedTransactions[sessionId]?.transactions ?? [];

      const { isSuccessful, isFailed, isPending } = getTransactionsStatus({
        transactions: sessionTransactions
      });
      const completed = !isPending;

      if (completed) {
        if (isSuccessful) {
          onSuccess?.(sessionId);
        }

        if (isFailed) {
          onFail?.(sessionId, 'Error processing batch transactions.');
        }
      } else {
        const data = await checkBatch({ batchId });
        await updateBatch({
          sessionId: sessionId.toString(),
          isFailed: data?.isBatchFailed,
          shouldRefreshBalance: true,
          transactions: sessionTransactions
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
