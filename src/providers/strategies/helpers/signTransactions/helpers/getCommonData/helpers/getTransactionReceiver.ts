import { Address, Transaction } from 'lib/sdkCore';
import { TransactionTypesEnum } from 'types/enums.types';

const getEmbeddedReceiver = (data: string) => {
  const [functionName, ...args] = data.split('@');

  switch (functionName) {
    case TransactionTypesEnum.ESDTNFTTransfer:
      return args[3];
    case TransactionTypesEnum.MultiESDTNFTTransfer:
      return args[0];
    default:
      return undefined;
  }
};

// ESDTNFTTransfer and MultiESDTNFTTransfer are sent to self, with the destination in their data
export const getTransactionReceiver = (transaction: Transaction) => {
  const receiver = transaction.receiver.toBech32();

  if (receiver !== transaction.sender.toBech32()) {
    return receiver;
  }

  const data = Buffer.from(transaction.data ?? []).toString();
  const embeddedReceiver = getEmbeddedReceiver(data);

  if (!embeddedReceiver || !/^[0-9a-f]{64}$/i.test(embeddedReceiver)) {
    return receiver;
  }

  return Address.newFromHex(
    embeddedReceiver,
    transaction.receiver.getHrp()
  ).toBech32();
};
