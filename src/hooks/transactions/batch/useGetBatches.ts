import { useMemo } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import { batchesSelector } from 'reduxStore/selectors/batchTransactionsSelectors';
import { BatchTransactionsResponseType, SignedTransactionType } from 'types';

export function useGetBatches() {
  const batches = useSelector(batchesSelector);
  const batchTransactionsArray: {
    batchId: string;
    transactions: SignedTransactionType[][];
  }[] = useMemo(
    () =>
      Object.entries(batches).map(([batchId, batch]) => ({
        batchId,
        transactions: (batch as BatchTransactionsResponseType).transactions
      })),
    [batches]
  );

  return {
    batches,
    batchTransactionsArray
  };
}
