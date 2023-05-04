import { useTransactionsTracker } from './useTransactionsTracker';

export interface TransactionsTrackerType {}

// @ts-ignore
export function TransactionsTracker(props?: TransactionsTrackerType) {
  useTransactionsTracker();
  return null;
}
