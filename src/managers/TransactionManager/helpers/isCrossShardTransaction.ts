import { Address, AddressComputer } from 'lib/sdkCore';

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
  const addressComputer = new AddressComputer();
  try {
    const receiver = new Address(receiverAddress);
    const computedReceiverShard = addressComputer.getShardOfAddress(receiver);
    if (senderShard == null && senderAddress != null) {
      const sender = new Address(senderAddress);
      const computedSenderShard = addressComputer.getShardOfAddress(sender);
      return computedSenderShard !== computedReceiverShard;
    }
    return computedReceiverShard !== senderShard;
  } catch (_err) {
    return false;
  }
}
