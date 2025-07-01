import { InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from 'types';
export declare type UseMetamaskLoginReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType
];
export declare const useMetamaskLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, onLoginRedirect }: OnProviderLoginType) => UseMetamaskLoginReturnType;
//# sourceMappingURL=useMetamaskLogin.d.ts.map