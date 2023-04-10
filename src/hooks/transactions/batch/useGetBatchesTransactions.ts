import { useSelector } from 'reduxStore/DappProviderContext';
import { batchesSelector } from 'reduxStore/selectors/batchTransactionsSelectors';

export function useGetBatchesTransactions() {
  const batches = useSelector(batchesSelector);
  const batchTransactionsArray = Object.entries(batches).map(
    ([batchId, batch]) => ({
      batchId,
      transactions: batch.transactions
    })
  );

  return {
    batches,
    batchTransactionsArray
  };
}
