import { Address, Transaction } from 'lib/sdkCore';
import { getTransferDestination } from 'utils/validation/isContract';

// ESDTNFTTransfer and MultiESDTNFTTransfer are sent to self, with the destination in their data
export const getEffectiveReceiver = (transaction: Transaction) => {
  const receiver = transaction.receiver.toBech32();

  if (receiver !== transaction.sender.toBech32()) {
    return receiver;
  }

  const data = Buffer.from(transaction.data ?? []).toString();
  const destination = getTransferDestination(data);

  if (!destination || !/^[0-9a-f]{64}$/i.test(destination)) {
    return receiver;
  }

  return Address.newFromHex(
    destination,
    transaction.receiver.getHrp()
  ).toBech32();
};
