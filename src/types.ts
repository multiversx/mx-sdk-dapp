import { Nonce, Address } from '@elrondnetwork/erdjs';

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
  walletConnectBridge: string;
  walletConnectDeepLink: string;
  network: NetworkType;
}

export interface AccountType {
  address: string;
  balance: string;
  nonce: Nonce;
  code?: string;
}

export enum LoginMethodsEnum {
  ledger = 'ledger',
  walletconnect = 'walletconnect',
  wallet = 'wallet',
  extension = 'extension',
  none = ''
}

export interface TransactionParameter {
  sender: Address;
  receiver: Address;
  functionName: string;
  inputParameters: string[];
  outputParameters: string[];
}
