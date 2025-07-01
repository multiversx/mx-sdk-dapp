import { PairingTypes } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { LoginHookGenericStateType, OnProviderLoginType } from '../../types/login.types';
export declare enum WalletConnectV2Error {
    invalidAddress = "Invalid address",
    invalidConfig = "Invalid WalletConnect setup",
    invalidTopic = "Expired connection",
    sessionExpired = "Unable to connect to existing session",
    connectError = "Unable to connect",
    userRejected = "User rejected connection proposal",
    userRejectedExisting = "User rejected existing connection proposal",
    errorLogout = "Unable to remove existing pairing",
    invalidChainID = "Invalid chainID"
}
export interface InitWalletConnectV2Type extends OnProviderLoginType {
    logoutRoute?: string;
    customRequestMethods?: Array<string>;
}
export interface WalletConnectV2LoginHookCustomStateType {
    uriDeepLink: string;
    cancelLogin: () => Promise<void>;
    connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
    removeExistingPairing: (topic: string) => Promise<void>;
    walletConnectUri?: string;
    wcPairings?: PairingTypes.Struct[];
}
export declare type WalletConnectV2LoginHookReturnType = [
    (loginProvider?: boolean) => Promise<void>,
    LoginHookGenericStateType,
    WalletConnectV2LoginHookCustomStateType
];
export declare const useWalletConnectV2Login: ({ callbackRoute, token: tokenToSign, nativeAuth, onLoginRedirect, logoutRoute: providerLogoutRoute, customRequestMethods }: InitWalletConnectV2Type) => WalletConnectV2LoginHookReturnType;
//# sourceMappingURL=useWalletConnectV2Login.d.ts.map