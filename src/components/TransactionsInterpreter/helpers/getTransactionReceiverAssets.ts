import { UITransactionType } from './types';
import { getTransactionReceiver } from './getTransactionReceiver';

/**
 * The information about an account like name, icon, etc...
 * */
export function getTransactionReceiverAssets(transaction: UITransactionType) {
  const receiver = getTransactionReceiver(transaction);

  return transaction.receiver === receiver
    ? transaction.receiverAssets
    : undefined;
}
