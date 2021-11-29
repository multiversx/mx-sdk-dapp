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

export type NetworkType = {
  id: string;
  egldLabel: string;
  name: string;
  walletAddress?: string;
  apiAddress?: string;
  gatewayAddress?: string;
  explorerAddress?: string;
};
