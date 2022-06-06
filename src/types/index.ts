export interface WalletConnectSignatureType {
  id?: number;
  jsonrpc?: string;
  signature: string;
}

export interface RouteType {
  path: string;
  component: any;
  authenticatedRoute?: boolean;
}

export interface BaseNetworkType {
  id: string;
  chainId: string;
  name: string;
  egldLabel: string;
  egldDenomination: string;
  decimals: string;
  gasPerDataByte: string;
  walletConnectDeepLink: string;
  walletAddress: string;
  apiAddress: string;
  explorerAddress: string;
  apiTimeout: string;
}

export interface AccountInfoSliceNetworkType extends BaseNetworkType {
  walletConnectBridgeAddress: string;
}

export interface NetworkType extends BaseNetworkType {
  walletConnectBridgeAddresses: string[];
}

export interface CustomNetworkType {
  id?: string;
  chainId?: string;
  name?: string;
  egldLabel?: string;
  egldDenomination?: string;
  decimals?: string;
  gasPerDataByte?: string;
  walletConnectDeepLink?: string;
  walletConnectBridgeAddresses?: string[];
  walletAddress?: string;
  apiAddress?: string;
  explorerAddress?: string;
  skipFetchFromServer?: boolean;
  apiTimeout?: string;
}

export interface TokenLoginType {
  loginToken: string;
  signature?: string;
}

export * from './transactions';
export * from './enums';
export * from './dapp-provider';
