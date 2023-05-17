import {
  BatchTransactionsTrackerProps,
  useBatchTransactionsTracker
} from 'hooks/transactions/batch/tracker/useBatchTransactionsTracker';

export function BatchTransactionsTracker(props: BatchTransactionsTrackerProps) {
  useBatchTransactionsTracker(props);
  return null;
}
