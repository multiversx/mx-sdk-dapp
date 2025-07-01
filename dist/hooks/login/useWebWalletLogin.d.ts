import { AccountInfoSliceNetworkType, InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from '../../types';
export interface UseWebWalletLoginPropsType extends Omit<OnProviderLoginType, 'onLoginRedirect'> {
    redirectDelayMilliseconds?: number;
    /**
     * @param {string} customWalletAddress if set, will be used as main `walletAddress`
     * @description
     * The `customWalletAddress` property is used to override the default `walletAddress`.
     * This is useful when you want to use a custom wallet provider.
     * It overrides the network's wallet address, including the wallet address from the custom network config specified in the `DappProvider`.
     * @example
     * <WebWalletLoginButton
        {...otherLoginProps}
        customWalletAddress="https://custom-web-wallet.com"
       >
     */
    customWalletAddress?: AccountInfoSliceNetworkType['customWalletAddress'];
}
export declare type UseWebWalletLoginReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType
];
export declare const useWebWalletLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, redirectDelayMilliseconds, customWalletAddress }: UseWebWalletLoginPropsType) => UseWebWalletLoginReturnType;
//# sourceMappingURL=useWebWalletLogin.d.ts.map