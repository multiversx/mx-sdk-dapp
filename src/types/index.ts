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

export * from './transactions';
export * from './enums';
export * from './account';
export * from './network';
export * from './dapp-provider';
export * from './UI';
export * from './login';
