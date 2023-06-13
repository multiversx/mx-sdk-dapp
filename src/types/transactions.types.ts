import type { ReactNode, Dispatch, SetStateAction } from 'react';
import type { Address, Transaction } from '@multiversx/sdk-core';
import type { IPlainTransactionObject } from '@multiversx/sdk-core/out/interface';

import type { SignStepInnerClassesType } from 'UI/SignTransactionsModals/SignWithDeviceModal/SignStep';
import type { WithClassnameType } from '../UI/types';
import type {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum,
  TransactionTypesEnum
} from './enums.types';
import { BatchTransactionsResponseType, ServerTransactionType } from './serverTransactions.types';

export interface TransactionsToSignType {
  transactions: IPlainTransactionObject[];
  callbackRoute?: string;
  sessionId: string;
  customTransactionInformation: CustomTransactionInformation;
}

export interface SignedTransactionsBodyType {
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  errorMessage?: string;
  redirectRoute?: string;
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

export type RawTransactionType = IPlainTransactionObject;

export interface SignedTransactionType extends RawTransactionType {
  hash: string;
  status: TransactionServerStatusesEnum;
  inTransit?: boolean;
  errorMessage?: string;
  customTransactionInformation?: CustomTransactionInformation;
}

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

export interface MultiSignTransactionType {
  multiTxData?: string;
  transactionIndex: number;
  transaction: Transaction;
}

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
  guardian?: string;
  guardianSignature?: string;
  nonce?: number;
}

export interface TransactionsDisplayInfoType {
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  submittedMessage?: string;
  transactionDuration?: number;
  timedOutMessage?: string;
  invalidMessage?: string;
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
  skipGuardian?: boolean;
  completedTransactionsDelay?: number;
  callbackRoute?: string;
  transactionsDisplayInfo: TransactionsDisplayInfoType;
  minGasLimit?: number;
  sessionInformation?: any;
}

export interface SignTransactionsPropsType {
  transactions: Transaction[] | Transaction;
  minGasLimit?: number;
  callbackRoute?: string;
  transactionsDisplayInfo: TransactionsDisplayInfoType;
  customTransactionInformation: CustomTransactionInformation;
}

export interface TrackTransactionsPropsType {
  transactions: ServerTransactionType | ServerTransactionType[];
  redirectAfterSign?: boolean;
  completedTransactionsDelay?: number;
  callbackRoute?: string;
  transactionsDisplayInfo: TransactionsDisplayInfoType;
  sessionInformation?: any;
}

export interface ActiveLedgerTransactionType {
  transaction: Transaction;
  transactionTokenInfo: TransactionDataTokenType;
  isTokenTransaction: boolean;
  dataField: string;
  receiverScamInfo: string | null;
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

export type DeviceSignedTransactions = Record<number, Transaction>;

export interface GuardianScreenType extends WithClassnameType {
  address: string;
  onSignTransaction: () => void;
  onPrev: () => void;
  title?: ReactNode;
  signStepInnerClasses?: SignStepInnerClassesType;
  signedTransactions?: DeviceSignedTransactions;
  guardianFormDescription?: ReactNode;
  setSignedTransactions?: Dispatch<
    SetStateAction<DeviceSignedTransactions | undefined>
  >;
}

export interface SignModalPropsType extends WithClassnameType {
  handleClose: () => void;
  error: string | null;
  callbackRoute?: string;
  sessionId?: string;
  transactions: Transaction[];
  modalContentClassName?: string;
  verifyReceiverScam?: boolean;
  title?: ReactNode;
  GuardianScreen?: (signProps: GuardianScreenType) => JSX.Element;
  signStepInnerClasses?: SignStepInnerClassesType;
}

export interface CustomTransactionInformation {
  redirectAfterSign: boolean;
  sessionInformation: any;
  completedTransactionsDelay?: number;
  signWithoutSending: boolean;
  /**
   * If true, the change guardian action will not trigger transaction version update
   */
  skipGuardian?: boolean;
}

export interface SendTransactionReturnType {
  error?: string;
  sessionId: string | null;
}

export interface SendBatchTransactionReturnType {
  error?: string;
  batchId: string | null;
  data?: BatchTransactionsResponseType | null;
}

export type GetTransactionsByHashesType = (
  pendingTransactions: PendingTransactionsType
) => Promise<GetTransactionsByHashesReturnType>;

export type GetTransactionsByHashesReturnType = {
  hash: string;
  invalidTransaction: boolean;
  status: TransactionServerStatusesEnum;
  inTransit?: boolean;
  results: SmartContractResult[];
  sender: string;
  receiver: string;
  data: string;
  previousStatus: string;
  hasStatusChanged: boolean;
}[];

export type PendingTransactionsType = {
  hash: string;
  previousStatus: string;
}[];

export interface TransactionLinkType {
  link: string;
  label: string;
  address: string;
}
