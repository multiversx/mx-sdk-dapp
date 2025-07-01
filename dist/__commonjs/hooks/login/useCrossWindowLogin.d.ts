import { InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from 'types';
export declare type UseCrossWindowLoginReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType
];
export declare const useCrossWindowLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, onLoginRedirect, hasConsentPopup, walletAddress }: OnProviderLoginType & {
    hasConsentPopup?: boolean | undefined;
    walletAddress?: string | undefined;
}) => UseCrossWindowLoginReturnType;
//# sourceMappingURL=useCrossWindowLogin.d.ts.map