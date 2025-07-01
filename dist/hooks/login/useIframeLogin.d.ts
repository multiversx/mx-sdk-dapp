import { IframeLoginTypes } from 'lib/sdkWebWalletIframeProvider';
import { LoginHookGenericStateType, OnProviderLoginType } from 'types';
export declare type UseIframeLoginReturnType = [
    (loginType: IframeLoginTypes) => void,
    LoginHookGenericStateType
];
export declare const useIframeLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, walletAddress }: OnProviderLoginType & {
    walletAddress?: string | undefined;
}) => UseIframeLoginReturnType;
//# sourceMappingURL=useIframeLogin.d.ts.map