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
import { RawTransactionType } from '../types';

export default function newTransaction(rawTransaction: RawTransactionType) {
  const { data } = rawTransaction;
  const parsedData = data ? atob(data) : '';
  return new Transaction({
    value: Balance.fromString(rawTransaction.value),
    data: new TransactionPayload(parsedData),
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
