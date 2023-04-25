import { useMemo } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import { batchesSelector } from 'reduxStore/selectors/batchTransactionsSelectors';

export function useGetBatches() {
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
