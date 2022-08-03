import { timeRemaining } from 'utils';
import { UITransactionType } from './types';

export function parseTransactionTime(transaction: UITransactionType) {
  const shortTimeAgo = timeRemaining(transaction.timestamp, true);
  const longTimeAgo = timeRemaining(transaction.timestamp, false);

  return {
    shortTimeAgo,
    longTimeAgo
  };
}
