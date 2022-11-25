import { NativeAuthType } from '../services/nativeAuth';

export interface LoginHookGenericStateType {
  error: string;
  loginFailed: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export type InitiateLoginFunctionType = () => void;

export type LoginHookReturnType = [
  LoginHookReturnType,
  LoginHookGenericStateType
];

export interface OnLoginRedirectOptionsType {
  signature?: string;
  address: string;
}

export type OnLoginRedirectType = (
  callbackRoute: string,
  options?: OnLoginRedirectOptionsType
) => void;

interface SharedProviderLoginType {
  callbackRoute?: string;
  onLoginRedirect?: OnLoginRedirectType;
}

interface ProviderTokenLoginType extends SharedProviderLoginType {
  token?: string;
  nativeAuthConfig?: never;
}

interface ProviderNativeAuthLoginType extends SharedProviderLoginType {
  token?: never;
  nativeAuthConfig: NativeAuthType;
}

export type OnProviderLoginType =
  | ProviderTokenLoginType
  | ProviderNativeAuthLoginType;
