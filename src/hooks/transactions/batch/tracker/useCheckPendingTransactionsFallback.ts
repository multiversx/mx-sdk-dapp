import { useCallback, useEffect } from 'react';
import { useGetPendingTransactions } from 'hooks/transactions/useGetPendingTransactions';
import { useCheckTransactionStatus } from 'hooks/transactions/useCheckTransactionStatus';
import { useGetBatches } from 'hooks/transactions/batch/useGetBatches';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';

/**
 * Fallback mechanism to check pending transactions in case of no batch transactions found
 * Resolves the toast
 * */
export const useCheckPendingTransactionsFallback = (props?: {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
}) => {
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const checkTransactionsStatuses = useCheckTransactionStatus();
  const { batchTransactionsArray } = useGetBatches();

  const onSuccess = props?.onSuccess;
  const onFail = props?.onFail;

  const checkTransactions = useCallback(async () => {
    if (
      pendingTransactionsArray.length > 0 &&
      batchTransactionsArray.length === 0
    ) {
      await checkTransactionsStatuses({
        shouldRefreshBalance: true
      });

      for (const [_, data] of pendingTransactionsArray) {
        const { isPending, isSuccessful, isFailed } = getTransactionsStatus({
          transactions: data.transactions ?? []
        });

        if (!isPending) {
          if (isSuccessful) {
            onSuccess?.(null);
          }

          if (isFailed) {
            onFail?.(
              null,
              `Error processing batch transactions. Status: failed`
            );
          }
        }
      }
    }
  }, [
    pendingTransactionsArray,
    batchTransactionsArray,
    checkTransactionsStatuses,
    onSuccess,
    onFail
  ]);

  useEffect(() => {
    checkTransactions();
  }, [checkTransactions, pendingTransactionsArray, batchTransactionsArray]);
};
