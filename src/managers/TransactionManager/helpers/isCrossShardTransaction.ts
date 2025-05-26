import { Address } from 'lib/sdkCore';
import { getShardOfAddress } from './getShardOfAddress';

export interface IsCrossShardTransactionPropsType {
  receiverAddress: string;
  senderShard?: number;
  senderAddress?: string;
}
export function isCrossShardTransaction({
  receiverAddress,
  senderShard,
  senderAddress
}: IsCrossShardTransactionPropsType) {
  try {
    const receiver = new Address(receiverAddress);
    const receiverShard = getShardOfAddress(receiver.pubkey());
    if (senderShard == null && senderAddress != null) {
      const sender = new Address(senderAddress);
      return getShardOfAddress(sender.pubkey()) !== receiverShard;
    }
    return receiverShard !== senderShard;
  } catch (_err) {
    return false;
  }
}
