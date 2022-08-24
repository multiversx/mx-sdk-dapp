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

export interface TokenLoginType {
  loginToken: string;
  signature?: string;
}

export * from './transactions.types';
export * from './server-transactions';
export * from './enums.types';
export * from './account.types';
export * from './network.types';
export * from './dapp-provider.types';
export * from './login.types';
