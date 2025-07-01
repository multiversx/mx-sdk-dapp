import { NativeAuthConfigType } from './login.types';
export * from './signedMessage.types';
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
    nativeAuthToken?: string;
    /**
     * config to be restored when web wallet provider returns url signature
     */
    nativeAuthConfig?: NativeAuthConfigType;
}
export * from './account.types';
export * from './dappProvider.types';
export * from './enums.types';
export * from './login.types';
export * from './network.types';
export * from './serverTransactions.types';
export * from './suspiciousLink';
export * from './transactions.types';
export * from './dappConfig.types';
//# sourceMappingURL=index.d.ts.map