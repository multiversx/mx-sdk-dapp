import { SignedTransactionType } from 'types/transactions.types';
import { getAddressFromDataField } from 'utils';
import { isCrossShardTransaction } from './isCrossShardTransaction';

export const getAreTransactionsCrossShards = (
  transactions?: SignedTransactionType[],
  accountShard = 1
): boolean => {
  if (!transactions?.length) {
    return true;
  }

  return transactions.reduce(
    (prevTxIsSameShard: boolean, { receiver, data }: SignedTransactionType) => {
      const receiverAddress = getAddressFromDataField({
        receiver,
        data: data ?? ''
      });
      if (receiverAddress == null) {
        return prevTxIsSameShard;
      }
      return (
        prevTxIsSameShard &&
        isCrossShardTransaction({
          receiverAddress,
          senderShard: accountShard
        })
      );
    },
    true
  );
};
