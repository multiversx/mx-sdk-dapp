import { ScamInfoType } from './account.types';

export interface TokenRolesType {
  address: string;
  roles: string[];
}

export interface TokenLockedAccountType {
  address: string;
  name: string;
  balance: string;
}
export interface TokenSupplyType {
  supply: number;
  circulatingSupply: number;
  minted: number;
  burnt: number;
  initialMinted: number;
  lockedAccounts?: TokenLockedAccountType[];
}

export interface TokenType {
  identifier: string;
  ticker?: string;
  name: string;
  balance?: string;
  decimals?: number;
  owner: string;
  minted: string;
  burnt: string;
  supply: string | number;
  circulatingSupply: string | number;
  canBurn: boolean;
  canChangeOwner: boolean;
  canFreeze: boolean;
  canMint: boolean;
  canPause: boolean;
  canUpgrade: boolean;
  canWipe: boolean;
  isPaused: boolean;
  transactions: number;
  accounts: number;
  price?: number;
  marketCap?: number;
  valueUsd?: number;
  assets?: {
    website?: string;
    description?: string;
    status?: string;
    pngUrl?: string;
    svgUrl?: string;
    social?: any;
    extraTokens?: string[];
    lockedAccounts?: { [key: string]: string };
    ledgerSignature?: string;
  };
}

export interface CollectionType {
  collection: string;
  type: NftEnumType;
  name: string;
  ticker: string;
  timestamp: number;
  canFreeze: boolean;
  canWipe: boolean;
  canPause: boolean;
  canTransferRole: boolean;
  owner: string;
  decimals?: number;
  assets?: {
    website?: string;
    description?: string;
    status?: string;
    pngUrl?: string;
    svgUrl?: string;
  };
  scamInfo?: ScamInfoType;
}

export enum EsdtEnumType {
  FungibleESDT = 'FungibleESDT'
}

export enum NftEnumType {
  NonFungibleESDT = 'NonFungibleESDT',
  SemiFungibleESDT = 'SemiFungibleESDT',
  MetaESDT = 'MetaESDT'
}

export interface NftType {
  identifier: string;
  collection: string;
  ticker?: string;
  timestamp: number;
  attributes: string;
  nonce: number;
  type: NftEnumType;
  name: string;
  creator: string;
  royalties: number;
  balance: string;
  uris?: string[];
  url?: string;
  thumbnailUrl?: string;
  tags?: string[];
  decimals?: number;
  owner?: string;
  supply?: string;
  isWhitelistedStorage?: boolean;
  owners?: {
    address: string;
    balance: string;
  }[];
  assets?: {
    website?: string;
    description?: string;
    status?: string;
    pngUrl?: string;
    svgUrl?: string;
  };
  metadata?: {
    description?: string;
    fileType?: string;
    fileUri?: string;
    fileName?: string;
  };
  media?: {
    url: string;
    originalUrl: string;
    thumbnailUrl: string;
    fileType: string;
    fileSize: number;
  }[];
  scamInfo?: ScamInfoType;
}

export interface TokenAssets {
  description: string;
  status: string;
  svgUrl: string;
  website?: string;
  pngUrl?: string;
  social?: any;
  extraTokens?: string[];
  lockedAccounts?: { [key: string]: string };
}

export interface TokenMediaType {
  url?: string;
  originalUrl?: string;
  thumbnailUrl?: string;
  fileType?: string;
  fileSize?: number;
}

export interface TokenOptionType {
  tokenLabel: string;
  tokenDecimals: number;
  tokenAvatar: string;
  assets?: TokenAssets;
  type?: NftEnumType;
  error?: string;
  esdtPrice?: number;
  ticker?: string;
  identifier?: string;
  name?: string;
  isLoading?: boolean;
}

export interface TokenInfoResponse {
  identifier: string;
  name: string;
  ticker: string;
  decimals: number;
  type?: NftEnumType;
  assets: TokenAssets;
  media?: TokenMediaType[];
  price: number;
}
