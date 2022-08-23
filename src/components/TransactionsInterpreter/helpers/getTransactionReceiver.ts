import { TransactionType } from 'types/server-transations';

export function getTransactionReceiver(transaction: TransactionType) {
  let receiver = transaction.receiver;
  if (transaction.action?.arguments?.receiver) {
    receiver = transaction.action.arguments.receiver;
  }

  return receiver;
}
