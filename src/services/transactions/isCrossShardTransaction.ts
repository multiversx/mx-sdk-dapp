import { Address } from '@elrondnetwork/erdjs/out';
import { getShardOfAddress } from 'utils';

interface IsCrossShardTransactionPropsType {
  receiverAddress: string;
  senderShard?: number;
  senderAddress?: string;
}
export function isCrossShardTransaction({
  receiverAddress,
  senderShard,
  senderAddress
}: IsCrossShardTransactionPropsType) {
  const receiver = new Address(receiverAddress);
  const receiverShard = getShardOfAddress(receiver.pubkey());
  if (senderShard == null) {
    const sender = new Address(senderAddress);
    return getShardOfAddress(sender) === receiverShard;
  }
  return receiverShard === senderShard;
}
