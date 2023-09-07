import { useBatchTransactionsTracker } from 'hooks/transactions/batch/tracker/useBatchTransactionsTracker';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useTransactionsTracker } from './useTransactionsTracker';

export function TransactionsTracker(props: TransactionsTrackerType) {
  useTransactionsTracker(props);
  useBatchTransactionsTracker(props);
  return null;
}
