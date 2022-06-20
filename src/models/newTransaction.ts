import {
  Transaction,
  Address,
  TransactionPayload,
  TransactionOptions,
  TransactionVersion
} from '@elrondnetwork/erdjs';
import {
  gasLimit as defaultGasLimit,
  gasPrice,
  version as defaultVersion
} from 'constants/index';
import { RawTransactionType } from 'types/transactions';
import { isStringBase64 } from 'utils/decoders/base64Utils';

export function newTransaction(rawTransaction: RawTransactionType) {
  const { data } = rawTransaction;
  const dataPayload = isStringBase64(data ?? '')
    ? TransactionPayload.fromEncoded(data)
    : new TransactionPayload(data);

  const transaction = new Transaction({
    value: rawTransaction.value.valueOf(),
    data: dataPayload,
    nonce: rawTransaction.nonce.valueOf(),
    receiver: new Address(rawTransaction.receiver),
    sender: new Address(rawTransaction.sender),
    gasLimit: rawTransaction.gasLimit.valueOf() ?? defaultGasLimit,
    gasPrice: rawTransaction.gasPrice.valueOf() ?? gasPrice,
    chainID: rawTransaction.chainID.valueOf(),
    version: new TransactionVersion(rawTransaction.version ?? defaultVersion),
    ...(rawTransaction.options
      ? { options: new TransactionOptions(rawTransaction.options) }
      : {})
  });

  transaction.applySignature(
    {
      hex: () => rawTransaction.signature || ''
    },
    new Address(rawTransaction.sender)
  );

  return transaction;
}
export default newTransaction;
