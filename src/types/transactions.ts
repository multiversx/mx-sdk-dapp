import { Address, Transaction } from '@elrondnetwork/erdjs';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from './enums';

export interface TransactionsToSignType {
  transactions: RawTransactionType[];
  callbackRoute?: string;
  sessionId: string;
  customTransactionInformation: CustomTransactionInformation;
}

export interface SignedTransactionsBodyType {
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  errorMessage?: string;
  customTransactionInformation?: CustomTransactionInformation;
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
  type?: MultiEsdtTxType['type'] | '';
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

export interface TokenOptionType {
  name: string;
  identifier: string;
  balance: string;
  decimals: number;
  collection?: string;
  avatar?: string;
}

export interface SimpleTransactionType {
  value: string;
  receiver: string;
  data?: string;
  gasPrice?: number;
  gasLimit?: number;
  chainID?: string;
  version?: number;
  options?: number;
}

export interface TransactionsDisplayInfoType {
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  submittedMessage?: string;
  transactionDuration?: number;
}

export interface SendSimpleTransactionPropsType {
  transactions: SimpleTransactionType[];
  minGasLimit?: number;
}

export interface SendTransactionsPropsType {
  transactions:
    | Transaction
    | SimpleTransactionType
    | (Transaction | SimpleTransactionType)[];
  redirectAfterSign?: boolean;
  signWithoutSending: boolean;
  callbackRoute?: string;
  transactionsDisplayInfo: TransactionsDisplayInfoType;
  minGasLimit?: number;
  completedThreshold?: number;
  sessionInformation?: any;
}

export interface SignTransactionsPropsType {
  transactions: Transaction[] | Transaction;
  minGasLimit?: number;
  callbackRoute?: string;
  transactionsDisplayInfo: TransactionsDisplayInfoType;
  customTransactionInformation: CustomTransactionInformation;
}

export enum TransactionTypesEnum {
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTTransfer = 'ESDTTransfer',
  ESDTNFTTransfer = 'ESDTNFTTransfer',
  esdtTransaction = 'esdtTransaction',
  nftTransaction = 'nftTransaction',
  scCall = 'scCall'
}

export interface ActiveLedgerTransactionType {
  transaction: Transaction;
  transactionTokenInfo: TxDataTokenType;
  isTokenTransaction: boolean;
  dataField: string;
}

export interface SmartContractResult {
  hash: string;
  timestamp: number;
  nonce: number;
  gasLimit: number;
  gasPrice: number;
  value: string;
  sender: string;
  receiver: string;
  data: string;
  prevTxHash: string;
  originalTxHash: string;
  callType: string;
  miniBlockHash: string;
  returnMessage: string;
}

export interface SignModalPropsType {
  handleClose: () => void;
  error: string | null;
  callbackRoute?: string;
  transactions: Transaction[];
  className?: string;
}

export interface CustomTransactionInformation {
  redirectAfterSign: boolean;
  sessionInformation: any;
  signWithoutSending: boolean;
  completedThreshold: number;
}
