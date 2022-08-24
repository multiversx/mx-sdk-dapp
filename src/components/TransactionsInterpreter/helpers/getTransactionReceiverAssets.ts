import { ServerTransactionType } from 'types/serverTransactions';
import { getTransactionReceiver } from './getTransactionReceiver';

/**
 * The information about an account like name, icon, etc...
 * */
export function getTransactionReceiverAssets(
  transaction: ServerTransactionType
) {
  const receiver = getTransactionReceiver(transaction);

  return transaction.receiver === receiver
    ? transaction.receiverAssets
    : undefined;
}
