import { UITransactionType } from './types';

export function getTransactionReceiver(transaction: UITransactionType) {
  let receiver = transaction.receiver;
  if (transaction.action?.arguments?.receiver) {
    receiver = transaction.action.arguments.receiver;
  }

  return receiver;
}
