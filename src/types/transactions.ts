import { Address } from '@elrondnetwork/erdjs';
import { TransactionStatusesEnum } from './enums';

export interface TransactionsToSignType {
  transactions: RawTransactionType[];
  callbackRoute: string;
  sessionId: string;
}

export interface SignedTransactionsBodyType {
  transactions?: SignedTransactionType[];
  status?: TransactionStatusesEnum;
  errorMessage?: string;
}

export interface SignedTransactionsType {
  [sessionId: string]: SignedTransactionsBodyType;
}

export interface TransactionParameter {
  sender: Address;
  receiver: Address;
  functionName: string;
  inputParameters: string[];
  outputParameters: string[];
}

export interface RawTransactionType {
  signature?: string;
  value: string;
  receiver: string;
  gasPrice: number;
  gasLimit: number;
  sender: string;
  nonce: number;
  data: string;
  chainID: string;
  version?: number;
  options?: number;
}

export interface SignedTransactionType extends RawTransactionType {
  hash: string;
  status: TransactionStatusesEnum;
}
