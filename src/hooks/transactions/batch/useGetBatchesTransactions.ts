import { useSelector } from 'reduxStore/DappProviderContext';
import { batchesSelector } from 'reduxStore/selectors/batchTransactionsSelectors';
import { useMemo } from 'react';

export function useGetBatchesTransactions() {
  const batches = useSelector(batchesSelector);
  const batchTransactionsArray = useMemo(
    () =>
      Object.entries(batches).map(([batchId, batch]) => ({
        batchId,
        transactions: batch.transactions
      })),
    [batches]
  );

  return {
    batches,
    batchTransactionsArray
  };
}
