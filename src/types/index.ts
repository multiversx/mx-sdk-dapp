import { IDappProvider } from '@elrondnetwork/erdjs';
import { LoginMethodsEnum } from './enums';

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

export interface ScResultType {
  callType: string;
  gasLimit: number;
  gasPrice: number;
  nonce: number;
  prevTxHash: string;
  receiver?: string;
  sender: string;
  value: string;
  data?: string;
  returnMessage?: string;
}

export interface ExtraActionsInitType {
  onLogin: (address: string, loginMethod: LoginMethodsEnum) => void;
  log?: (word: string) => void;
}

export interface ExtraActionsType {
  log?: (word: string) => void;
  getProvider: () => IDappProvider;
  init: (props: ExtraActionsInitType) => void;
}

export * from './transactions';
export * from './enums';
