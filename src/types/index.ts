import { IDappProvider, Transaction } from '@elrondnetwork/erdjs';
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

export interface NetworkType {
  id: string;
  egldLabel: string;
  name: string;
  walletAddress: string;
  apiAddress: string;
  gatewayAddress: string;
  explorerAddress: string;
}

export interface NetworkConfigType {
  walletConnectBridge?: string;
  walletConnectDeepLink?: string;
  network: NetworkType;
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

export interface ExtraActionsType {
  extraSignTransactions: (transactions: Transaction | Transaction[]) => void;
  init: ({
    onLogin,
    setProvider,
    log
  }: {
    onLogin: (address: string, loginMethod: LoginMethodsEnum) => void;
    setProvider: (provider: IDappProvider) => void;
    log: (word: string) => void;
  }) => void;
}

export * from './transactions';
export * from './enums';
