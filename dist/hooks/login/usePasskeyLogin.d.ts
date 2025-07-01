import { InitiateLoginFunctionType, LoginHookGenericStateType, OnProviderLoginType } from 'types';
declare type CreateAccountFunctionType = (walletName: string) => Promise<{
    address: string;
}>;
export declare type UsePasskeyLoginReturnType = [
    InitiateLoginFunctionType,
    CreateAccountFunctionType,
    LoginHookGenericStateType
];
export declare const usePasskeyLogin: ({ callbackRoute, token: tokenToSign, nativeAuth, onLoginRedirect }: OnProviderLoginType) => UsePasskeyLoginReturnType;
export {};
//# sourceMappingURL=usePasskeyLogin.d.ts.map