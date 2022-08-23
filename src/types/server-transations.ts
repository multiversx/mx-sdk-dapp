import { AssetType, ScamInfoType } from './account';
import { NftEnumType } from './tokens';

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

export enum TxActionsEnum {
  // esdtNft category
  transfer = 'transfer',
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
  ping = 'ping'
}

export enum TxActionCategoryEnum {
  esdtNft = 'esdtNft',
  mex = 'mex',
  stake = 'stake',
  scCall = 'scCall'
}

export interface TokenArgumentType {
  type: NftEnumType | 'FungibleESDT';
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
}

export interface TxActionType {
  category: string;
  name: TxActionsEnum;
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

export enum TransactionOperationActionType {
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
  action: TransactionOperationActionType;
  type: VisibleTransactionOperationType | HiddenTransactionOperationType;
  esdtType: NftEnumType | 'FungibleESDT';
  collection?: string;
  name: string;
  identifier: string;
  sender: string;
  receiver: string;
  value: string;
  decimals: number;
  data?: string;
  message?: string;
  svgUrl?: string;
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
}

export interface ReceiptType {
  value: string;
  sender: string;
  data: string;
}

export interface TransactionType {
  fee?: string;
  blockHash: string;
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
  status: string;
  timestamp: number;
  value: string;
  price: number;
  results?: ResultType[];
  operations?: OperationType[];
  action?: TxActionType;
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
}

export enum TransferTypeEnum {
  Transaction = 'Transaction',
  SmartContractResult = 'SmartContractResult'
}
export interface TransferType extends TransactionType {
  type?: TransferTypeEnum;
  originalTxHash?: string;
}
