import { IPlainTransactionObject, Transaction } from 'lib/sdkCore';
import { ITransactionListItem } from 'lib/sdkDappUi';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum,
  TransactionTypesEnum
} from 'types/enums.types';
import { ResultType } from './serverTransactions.types';

export interface SignedTransactionType extends IPlainTransactionObject {
  hash: string;
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum;
  inTransit?: boolean;
}

export interface MultiSignTransactionType {
  multiTxData?: string;
  transactionIndex: number;
  transaction: Transaction;
  needsSigning: boolean;
}

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

export type MultiEsdtTransactionType = MultiEsdtType | MultiEsdtScCallType;

export interface TransactionDataTokenType {
  tokenId: string;
  amount: string;
  receiver: string;
  type?: MultiEsdtTransactionType['type'] | '';
  nonce?: string;
  multiTxData?: string;
}

export type TransactionsDataTokensType =
  | Record<string, TransactionDataTokenType>
  | undefined;

export type TrackedTransactionResultType = SignedTransactionType & {
  invalidTransaction: boolean;
  results: ResultType[];
  previousStatus: string;
  hasStatusChanged: boolean;
};

export enum TransactionDirectionEnum {
  SELF = 'Self',
  INTERNAL = 'Internal',
  IN = 'In',
  OUT = 'Out'
}

/**
 * Allows editing the title toast information
 */
export interface TransactionsDisplayInfoType {
  /**
   * Optional error message to be displayed in notification title in notification title if the transaction fails.
   */
  errorMessage?: string;

  /**
   * Optional success message to be displayed in notification title if the transaction succeeds.
   */
  successMessage?: string;

  /**
   * Optional message to be displayed in notification title while the transaction is processing.
   */
  processingMessage?: string;

  /**
   * Optional message to be displayed in notification title when the transaction is submitted.
   */
  submittedMessage?: string;

  /**
   * Optional duration of the transaction in milliseconds.
   */
  transactionDuration?: number;

  /**
   * Optional message to be displayed in notification title if the transaction times out.
   */
  timedOutMessage?: string;

  /**
   * Optional message to be displayed in notification title if the transaction is invalid.
   */
  invalidMessage?: string;

  /**
   * Optional message to be displayed in notification title when the transaction is received.
   */
  receivedMessage?: string;
}

export type SessionTransactionType = {
  transactions: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
  errorMessage?: string;
  /**
   * Optional custom information to be displayed in the toast notification.
   */
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  interpretedTransactions?: Record<string, ITransactionListItem>;
};
