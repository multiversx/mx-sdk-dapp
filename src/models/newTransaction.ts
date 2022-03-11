import {
  Transaction,
  GasLimit,
  GasPrice,
  Address,
  TransactionPayload,
  Balance,
  ChainID,
  TransactionVersion
} from '@elrondnetwork/erdjs';
import { Nonce, TransactionOptions } from '@elrondnetwork/erdjs/out';
import { RawTransactionType } from 'types/transactions';
import { isStringBase64 } from 'utils';

export default function newTransaction(rawTransaction: RawTransactionType) {
  const { data } = rawTransaction;
  const dataPayload = isStringBase64(data)
    ? TransactionPayload.fromEncoded(data)
    : new TransactionPayload(data);
  return new Transaction({
    value: Balance.fromString(rawTransaction.value),
    data: dataPayload,
    nonce: new Nonce(rawTransaction.nonce),
    receiver: new Address(rawTransaction.receiver),
    gasLimit: new GasLimit(rawTransaction.gasLimit),
    gasPrice: new GasPrice(rawTransaction.gasPrice),
    chainID: new ChainID(rawTransaction.chainID),
    ...(rawTransaction.version
      ? { version: new TransactionVersion(rawTransaction.version) }
      : {}),
    ...(rawTransaction.options
      ? { options: new TransactionOptions(rawTransaction.options) }
      : {})
  });
}
