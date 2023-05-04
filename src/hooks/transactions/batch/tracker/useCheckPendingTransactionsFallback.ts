import { useEffect } from 'react';
import { useGetPendingTransactions } from 'hooks/transactions/useGetPendingTransactions';
import { useCheckTransactionStatus } from 'hooks/transactions/useCheckTransactionStatus';
import { useGetBatches } from 'hooks/transactions/batch/useGetBatches';

/**
 * Fallback mechanism to check pending transactions in case of no batch transactions found
 * Resolves the toast
 * */
export const useCheckPendingTransactionsFallback = () => {
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const checkTransactionsStatuses = useCheckTransactionStatus();
  const { batchTransactionsArray } = useGetBatches();

  useEffect(() => {
    if (
      pendingTransactionsArray.length > 0 &&
      batchTransactionsArray.length === 0
    ) {
      checkTransactionsStatuses({
        shouldRefreshBalance: true
      });
    }
  }, [
    pendingTransactionsArray,
    batchTransactionsArray,
    checkTransactionsStatuses
  ]);
};
