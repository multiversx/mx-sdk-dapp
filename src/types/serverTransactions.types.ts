import { AssetType, ScamInfoType } from './account.types';
import {
  IconNamesEnum,
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from './enums.types';
import { EsdtEnumType, NftEnumType } from './tokens.types';
import { SignedTransactionType } from './transactions.types';

export interface ScResultType {
  callType: string;
  gasLimit: number;
  gasPrice: number;
  nonce: number;
  prevTxHash: string;
  hash: string;
  originalTxHash: string;
  receiver: string;
  sender: string;
  timestamp: number;
  value: string;
  data?: string;
  returnMessage?: string;
}

export interface TransactionTokensType {
  esdts: string[];
  nfts: string[];
}

export enum TransactionActionsEnum {
  // esdtNft category
  transfer = 'transfer',
  // legacy delegation
  unBond = 'unBond',
  unStake = 'unStake',
  // stake category
  delegate = 'delegate',
  stake = 'stake',
  unDelegate = 'unDelegate',
  stakeClaimRewards = 'claimRewards',
  reDelegateRewards = 'reDelegateRewards',
  withdraw = 'withdraw',
  // mex category
  claimLockedAssets = 'claimLockedAssets',
  swapTokensFixedInput = 'swapTokensFixedInput',
  swapTokensFixedOutput = 'swapTokensFixedOutput',
  swap = 'swap',
  addLiquidity = 'addLiquidity',
  addLiquidityProxy = 'addLiquidityProxy',
  removeLiquidity = 'removeLiquidity',
  removeLiquidityProxy = 'removeLiquidityProxy',
  enterFarm = 'enterFarm',
  enterFarmProxy = 'enterFarmProxy',
  enterFarmAndLockRewards = 'enterFarmAndLockRewards',
  enterFarmAndLockRewardsProxy = 'enterFarmAndLockRewardsProxy',
  exitFarm = 'exitFarm',
  exitFarmProxy = 'exitFarmProxy',
  claimRewards = 'claimRewards',
  claimRewardsProxy = 'claimRewardsProxy',
  compoundRewards = 'compoundRewards',
  compoundRewardsProxy = 'compoundRewardsProxy',
  wrapEgld = 'wrapEgld',
  unwrapEgld = 'unwrapEgld',
  unlockAssets = 'unlockAssets',
  mergeLockedAssetTokens = 'mergeLockedAssetTokens',
  stakeFarm = 'stakeFarm',
  stakeFarmProxy = 'stakeFarmProxy',
  stakeFarmTokens = 'stakeFarmTokens',
  stakeFarmTokensProxy = 'stakeFarmTokensProxy',
  unstakeFarm = 'unstakeFarm',
  unstakeFarmProxy = 'unstakeFarmProxy',
  unstakeFarmTokens = 'unstakeFarmTokens',
  unstakeFarmTokensProxy = 'unstakeFarmTokensProxy',
  claimDualYield = 'claimDualYield',
  claimDualYieldProxy = 'claimDualYieldProxy',
  unbondFarm = 'unbondFarm',
  ping = 'ping',
  lockTokens = 'lockTokens',
  migrateOldTokens = 'migrateOldTokens'
}

export enum TransactionActionCategoryEnum {
  esdtNft = 'esdtNft',
  mex = 'mex',
  stake = 'stake',
  scCall = 'scCall'
}

export interface TokenArgumentType {
  type: NftEnumType | EsdtEnumType;
  name: string;
  ticker: string;
  collection?: string;
  identifier?: string;
  token?: string;
  decimals: number;
  value: string;
  providerName?: string;
  providerAvatar?: string;
  svgUrl?: string;
  valueUSD?: string;
}

export interface TransactionActionType {
  category: string;
  name: TransactionActionsEnum;
  description?: string;
  arguments?: { [key: string]: any };
}

export interface UnwrapperType {
  token?: TokenArgumentType[];
  tokenNoValue?: TokenArgumentType[];
  tokenNoLink?: TokenArgumentType[];
  address?: string;
  egldValue?: string;
  value?: string;
  providerName?: string;
  providerAvatar?: string;
}

export enum TransactionOperationActionTypeEnum {
  none = 'none',
  transfer = 'transfer',
  burn = 'burn',
  addQuantity = 'addQuantity',
  create = 'create',
  multiTransfer = 'multiTransfer',
  localMint = 'localMint',
  localBurn = 'localBurn',
  wipe = 'wipe',
  freeze = 'freeze',
  writeLog = 'writeLog',
  signalError = 'signalError',

  // to be deprecated ?
  ESDTLocalMint = 'ESDTLocalMint',
  ESDTLocalBurn = 'ESDTLocalBurn'
}

export enum VisibleTransactionOperationType {
  nft = 'nft',
  esdt = 'esdt',
  egld = 'egld'
}
export enum HiddenTransactionOperationType {
  none = 'none',
  error = 'error',
  log = 'log'
}

export interface OperationType {
  id?: string;
  action: TransactionOperationActionTypeEnum;
  type: VisibleTransactionOperationType | HiddenTransactionOperationType;
  esdtType?: NftEnumType | EsdtEnumType;
  collection?: string;
  name?: string;
  identifier?: string;
  sender: string;
  ticker?: string;
  receiver: string;
  value: string;
  decimals?: number;
  data?: string;
  message?: string;
  svgUrl?: string;
  senderAssets?: AssetType;
  receiverAssets?: AssetType;
  valueUSD?: string;
}

export interface LogType {
  hash: string;
  callType: string;
  gasLimit: number;
  gasPrice: number;
  nonce: number;
  prevTxHash: string;
  receiver?: string;
  sender: string;
  value: string;
  data?: string;
  originalTxHash: string;
  returnMessage?: string;
  logs?: any;
}

export interface EventType {
  address: string;
  identifier: string;
  topics: string[];
  order: number;
  data?: string;
  additionalData?: string[];
}

export interface ResultLogType {
  id: string;
  address: string;
  events: EventType[];
}

export interface ResultType {
  hash: string;
  callType: string;
  gasLimit: number;
  gasPrice: number;
  nonce: number;
  prevTxHash: string;
  receiver?: string;
  sender: string;
  value: string;
  data?: string;
  originalTxHash: string;
  returnMessage?: string;
  logs?: ResultLogType;
  senderAssets?: AssetType;
  receiverAssets?: AssetType;
  miniBlockHash?: string;
  function?: string;
  timestamp?: number;
}

export interface ReceiptType {
  value: string;
  sender: string;
  data: string;
}

export interface ServerTransactionType {
  fee?: string;
  data: string;
  gasLimit: number;
  gasPrice: number;
  gasUsed: number;
  txHash: string;
  miniBlockHash: string;
  nonce: number;
  receiver: string;
  receiverShard: number;
  round: number;
  sender: string;
  senderShard: number;
  signature: string;
  status:
  | `${TransactionServerStatusesEnum}`
  | `${TransactionBatchStatusesEnum}`;
  inTransit?: boolean;
  timestamp: number;
  value: string;
  price: number;
  results?: ResultType[];
  operations?: OperationType[];
  action?: TransactionActionType;
  logs?: {
    id: string;
    address: string;
    events: EventType[];
  };
  scamInfo?: ScamInfoType;
  pendingResults?: boolean;
  receipt?: ReceiptType;
  senderAssets?: AssetType;
  receiverAssets?: AssetType;
  type?: TransferTypeEnum;
  originalTxHash?: string;
  isNew?: boolean; // UI flag
  tokenValue?: string;
  tokenIdentifier?: string;
  function?: string;
}

export enum TransferTypeEnum {
  Transaction = 'Transaction',
  SmartContractResult = 'SmartContractResult'
}

//#endregion

//#region interpreted transactions

export enum TransactionDirectionEnum {
  SELF = 'Self',
  INTERNAL = 'Internal',
  IN = 'In',
  OUT = 'Out'
}

export type TransactionAgeType = {
  timeAgo: string;
  tooltip: string;
};

export type TransactionMethodType = {
  name: string;
  actionDescription?: string;
};

export type TransactionIconInfoType = {
  icon?: `${IconNamesEnum}`;
  tooltip: string;
};

export interface InterpretedTransactionType extends ServerTransactionType {
  transactionDetails: {
    age: TransactionAgeType;
    direction?: TransactionDirectionEnum;
    iconInfo: TransactionIconInfoType;
    method: TransactionMethodType;
    transactionTokens: TokenArgumentType[];
    isContract?: boolean;
  };
  links: {
    senderLink?: string;
    receiverLink?: string;
    senderShardLink?: string;
    receiverShardLink?: string;
    transactionLink?: string;
  };
}

export interface DecodeForDisplayPropsType {
  input: string;
  decodeMethod: DecodeMethodEnum;
  identifier?: string;
}

export type DecodedDisplayType = {
  displayValue: string;
  validationWarnings: string[];
  highlight: string | null;
};

export enum DecodeMethodEnum {
  raw = 'raw',
  text = 'text',
  decimal = 'decimal',
  smart = 'smart'
}

//#endregion

export enum BatchTransactionStatus {
  pending = 'pending',
  success = 'success',
  invalid = 'invalid',
  dropped = 'dropped',
  fail = 'fail'
}

export interface BatchTransactionsRequestType {
  id: string;
  transactions: SignedTransactionType[][];
}

export interface BatchTransactionsResponseType {
  id: string;
  status: BatchTransactionStatus;
  transactions: SignedTransactionType[][];
  error?: string;
  message?: string;
  statusCode?: string;
}
