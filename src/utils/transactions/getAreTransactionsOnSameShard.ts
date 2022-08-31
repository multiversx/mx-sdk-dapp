import { isCrossShardTransaction } from 'services/transactions/isCrossShardTransaction';
import { SignedTransactionType } from 'types';
import { getAddressFromDataField } from 'utils/smartContracts';

export const getAreTransactionsOnSameShard = (
  transactions?: SignedTransactionType[],
  accountShard = 1
): boolean =>
  transactions != null
    ? transactions!.reduce(
        (
          prevTxIsSameShard: boolean,
          { receiver, data }: SignedTransactionType
        ) => {
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
      )
    : true;
