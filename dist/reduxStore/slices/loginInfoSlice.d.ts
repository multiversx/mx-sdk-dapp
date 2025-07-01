import { PayloadAction } from '@reduxjs/toolkit';
import { IframeLoginTypes } from 'lib/sdkWebWalletIframeProvider';
import { LoginMethodsEnum } from 'types/enums.types';
import { TokenLoginType } from '../../types';
export interface WalletConnectLoginType {
    loginType: string;
    callbackRoute: string;
    logoutRoute: string;
}
export interface LedgerLoginType {
    index: number;
    loginType: string;
}
export interface LoginInfoType {
    data: any;
    expires?: number;
}
export interface LoginInfoStateType {
    loginMethod: LoginMethodsEnum;
    iframeLoginType?: IframeLoginTypes;
    walletConnectLogin: WalletConnectLoginType | null;
    ledgerLogin: LedgerLoginType | null;
    tokenLogin: TokenLoginType | null;
    walletLogin: LoginInfoType | null;
    extensionLogin: LoginInfoType | null;
    passkeyLogin: LoginInfoType | null;
    operaLogin: LoginInfoType | null;
    crossWindowLogin: LoginInfoType | null;
    iframeWindowLogin: LoginInfoType | null;
    webviewLogin: LoginInfoType | null;
    isLoginSessionInvalid: boolean;
    logoutRoute?: string;
    isWalletConnectV2Initialized?: boolean;
}
export declare const loginInfoSlice: import("@reduxjs/toolkit").Slice<LoginInfoStateType, {
    setLoginMethod: (state: LoginInfoStateType, action: PayloadAction<LoginMethodsEnum>) => void;
    setTokenLogin: (state: LoginInfoStateType, action: PayloadAction<TokenLoginType | null>) => void;
    setTokenLoginSignature: (state: LoginInfoStateType, action: PayloadAction<string>) => void;
    setWalletLogin: (state: LoginInfoStateType, action: PayloadAction<LoginInfoType | null>) => void;
    setWalletConnectLogin: (state: LoginInfoStateType, action: PayloadAction<WalletConnectLoginType | null>) => void;
    setLedgerLogin: (state: LoginInfoStateType, action: PayloadAction<LedgerLoginType | null>) => void;
    setWebviewLogin: (state: LoginInfoStateType, action: PayloadAction<LoginInfoType | null>) => void;
    invalidateLoginSession: (state: LoginInfoStateType) => void;
    setLogoutRoute: (state: LoginInfoStateType, action: PayloadAction<string | undefined>) => void;
    setIsWalletConnectV2Initialized: (state: LoginInfoStateType, action: PayloadAction<boolean>) => void;
}, "loginInfoSlice">;
export declare const setLoginMethod: import("@reduxjs/toolkit").ActionCreatorWithPayload<LoginMethodsEnum, string>, setWalletConnectLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<WalletConnectLoginType | null, string>, setLedgerLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<LedgerLoginType | null, string>, setTokenLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<TokenLoginType | null, string>, setTokenLoginSignature: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setWalletLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<LoginInfoType | null, string>, invalidateLoginSession: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setLogoutRoute: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string | undefined, string>, setIsWalletConnectV2Initialized: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setWebviewLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<LoginInfoType | null, string>;
declare const _default: import("redux").Reducer<LoginInfoStateType, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=loginInfoSlice.d.ts.map