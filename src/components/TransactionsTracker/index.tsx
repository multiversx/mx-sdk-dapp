import useTransactionsTracker, {
  TransactionsTrackerType
} from './useTransactionsTracker';

export function TransactionsTracker({
  getTransactionsByHash
}: TransactionsTrackerType) {
  useTransactionsTracker({ getTransactionsByHash });
  return null;
}

export default TransactionsTracker;
