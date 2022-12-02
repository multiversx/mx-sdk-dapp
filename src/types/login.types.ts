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

export interface NativeAuthConfigType {
  hostname?: string;
  apiAddress?: string;
  expirySeconds?: number;
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
   * If token is specified, nativeAuth will skip fetching token
   */
  nativeAuth?: NativeAuthConfigType | boolean;
}
