import {
  BatchTransactionsTrackerProps,
  useAllBatchTransactionsTracker
} from 'hooks/transactions/batch/tracker/useAllBatchTransactionsTracker';

export function BatchTransactionsTracker(props: BatchTransactionsTrackerProps) {
  useAllBatchTransactionsTracker(props);
  return null;
}
