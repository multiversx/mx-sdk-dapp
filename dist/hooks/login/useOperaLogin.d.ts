import { InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from 'types';
export declare type UseOperaLoginReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType
];
export declare const useOperaLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, onLoginRedirect }: OnProviderLoginType) => UseOperaLoginReturnType;
//# sourceMappingURL=useOperaLogin.d.ts.map