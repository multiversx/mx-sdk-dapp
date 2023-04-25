import {
  AllBatchesTransactionsTracker,
  useAllBatchesTransactionsTracker
} from 'hooks/transactions/batch/useAllBatchesTransactionsTracker';

export function BatchTransactionsTracker(props: AllBatchesTransactionsTracker) {
  useAllBatchesTransactionsTracker(props);
  return null;
}
