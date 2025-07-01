export interface LoginHookGenericStateType {
    error: string;
    loginFailed: boolean;
    isLoading: boolean;
    isLoggedIn: boolean;
}
export declare type InitiateLoginFunctionType = () => void;
export declare type LoginHookReturnType = [
    LoginHookReturnType,
    LoginHookGenericStateType
];
export interface OnLoginRedirectOptionsType {
    signature?: string;
    address: string;
}
export declare type OnLoginRedirectType = (callbackRoute: string, options?: OnLoginRedirectOptionsType) => void;
export interface NativeAuthConfigType {
    origin?: string;
    apiAddress?: string;
    expirySeconds?: number;
    blockHashShard?: number;
    gatewayUrl?: string;
    extraRequestHeaders?: {
        [key: string]: string;
    };
    extraInfo?: {
        [key: string]: string;
    };
    /**
     * Displays a logout toast warning before token expiration. Defaults to 5 minutes.
     *
     * If set to `null`, will not trigger any warning.
     */
    tokenExpirationToastWarningSeconds?: number | null;
}
export interface OnProviderLoginType {
    callbackRoute?: string;
    token?: string;
    /**
     * If specified, `onLoginRedirect` will overwrite callbackRoute default navigation
     */
    onLoginRedirect?: OnLoginRedirectType;
    /**
     * If set to `true`, will fallback on default configuration
     */
    nativeAuth?: NativeAuthConfigType | boolean;
}
//# sourceMappingURL=login.types.d.ts.map