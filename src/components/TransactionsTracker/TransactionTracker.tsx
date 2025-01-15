import { useBatchTransactionsTracker } from 'hooks/transactions/batch/tracker/useBatchTransactionsTracker';
import { useTransactionsTracker } from 'hooks/transactions/tracker/useTransactionsTracker';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';

export function TransactionsTracker(props: TransactionsTrackerType) {
  useTransactionsTracker(props);
  useBatchTransactionsTracker(props);
  return null;
}
