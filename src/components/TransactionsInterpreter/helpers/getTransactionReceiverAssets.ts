import { TransactionType } from 'types/server-transations';
import { getTransactionReceiver } from './getTransactionReceiver';

/**
 * The information about an account like name, icon, etc...
 * */
export function getTransactionReceiverAssets(transaction: TransactionType) {
  const receiver = getTransactionReceiver(transaction);

  return transaction.receiver === receiver
    ? transaction.receiverAssets
    : undefined;
}
