import { Address, Transaction } from '@elrondnetwork/erdjs';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from './enums';

export interface TransactionsToSignType {
  transactions: RawTransactionType[];
  callbackRoute: string;
  sessionId: string;
}

export interface SignedTransactionsBodyType {
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
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
  status: TransactionServerStatusesEnum;
  errorMessage?: string;
}

export interface TxDataTokenType {
  tokenId: string;
  amount: string;
  receiver: string;
  type?: MultiEsdtTxType['type'];
  nonce?: string;
  multiTxData?: string;
}

export type TxsDataTokensType = Record<string, TxDataTokenType> | undefined;

interface MultiEsdtType {
  type:
    | TransactionTypesEnum.esdtTransaction
    | TransactionTypesEnum.nftTransaction;
  receiver: string;
  token?: string;
  nonce?: string;
  amount?: string;
  data: string;
}

interface MultiEsdtScCallType {
  type: TransactionTypesEnum.scCall;
  receiver: string;
  token?: string;
  nonce?: string;
  amount?: string;
  data: string;
}

export type MultiEsdtTxType = MultiEsdtType | MultiEsdtScCallType;

export type MultiSignTxType = {
  multiTxData?: string;
  transactionIndex: number;
  transaction: Transaction;
};

export enum TransactionTypesEnum {
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTTransfer = 'ESDTTransfer',
  ESDTNFTTransfer = 'ESDTNFTTransfer',
  esdtTransaction = 'esdtTransaction',
  nftTransaction = 'nftTransaction',
  scCall = 'scCall'
}
