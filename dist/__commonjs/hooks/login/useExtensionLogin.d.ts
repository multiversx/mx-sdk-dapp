import { InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from 'types';
export declare type UseExtensionLoginReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType
];
export declare const useExtensionLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, onLoginRedirect }: OnProviderLoginType) => UseExtensionLoginReturnType;
//# sourceMappingURL=useExtensionLogin.d.ts.map