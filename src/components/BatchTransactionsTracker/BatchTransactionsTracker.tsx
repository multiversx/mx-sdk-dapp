import {
  BatchTransactionsTrackerProps,
  useAllBatchesTransactionsTracker
} from 'hooks/transactions/batch/useAllBatchesTransactionsTracker';

export function BatchTransactionsTracker(props: BatchTransactionsTrackerProps) {
  useAllBatchesTransactionsTracker(props);
  return null;
}
