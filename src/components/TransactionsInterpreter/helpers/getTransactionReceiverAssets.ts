import { getTransactionReceiver } from './getTransactionReceiver';
import { UITransactionType } from './types';

/**
 * The information about an account like name, icon, etc...
 * */
export function getTransactionReceiverAssets(transaction: UITransactionType) {
  const receiver = getTransactionReceiver(transaction);

  return transaction.receiver === receiver
    ? transaction.receiverAssets
    : undefined;
}
