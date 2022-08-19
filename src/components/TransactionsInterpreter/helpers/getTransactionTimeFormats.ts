import { timeRemaining } from 'utils/operations/timeRemaining';
import { UITransactionType } from './types';

export function getTransactionTimeFormats(transaction: UITransactionType) {
  const shortTimeAgo = timeRemaining(transaction.timestamp, true);
  const longTimeAgo = timeRemaining(transaction.timestamp, false);

  return {
    shortTimeAgo,
    longTimeAgo
  };
}
