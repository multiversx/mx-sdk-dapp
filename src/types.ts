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

export interface TransactionParameter {
  sender: Address;
  receiver: Address;
  functionName: string;
  inputParameters: string[];
  outputParameters: string[];
}

export interface RawTransactionType {
  signature: string;
  value: string;
  receiver: string;
  gasPrice: number;
  gasLimit: number;
  data: string;
  sender: string;
  nonce: number;
  chainID: string;
  version: number;
  options: number;
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

export interface ApiTransactionType {
  txHash: string;
  nonce: number;
  receiver: string;
  sender: string;
  status: string;
  value: string;
  fee: string;
  timestamp: number;
  data: string;
  results?: ScResultType[];
}
