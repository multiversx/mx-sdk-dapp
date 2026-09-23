import { Address, Transaction } from 'lib/sdkCore';
import { getAddressIndex } from 'utils/validation/isContract';

// ESDTNFTTransfer and MultiESDTNFTTransfer are sent to self, with the destination in their data
export const getTransactionReceiver = (transaction: Transaction) => {
  const receiver = transaction.receiver.toBech32();

  if (receiver !== transaction.sender.toBech32()) {
    return receiver;
  }

  const data = Buffer.from(transaction.data ?? []).toString();
  const addressIndex = getAddressIndex(data);
  const embeddedReceiver =
    addressIndex > -1 ? data.split('@')[addressIndex] : undefined;

  if (!embeddedReceiver || !/^[0-9a-f]{64}$/i.test(embeddedReceiver)) {
    return receiver;
  }

  return Address.newFromHex(
    embeddedReceiver,
    transaction.receiver.getHrp()
  ).toBech32();
};
