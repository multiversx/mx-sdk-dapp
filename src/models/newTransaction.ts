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
import { TransactionOptions } from '@elrondnetwork/erdjs/out';
import { RawTransactionType } from '../types';

export default function newTransaction(rawTransaction: RawTransactionType) {
  return new Transaction({
    value: Balance.fromString(rawTransaction.value),
    data: new TransactionPayload(atob(rawTransaction.data)),
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
