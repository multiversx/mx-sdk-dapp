import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType
} from '../../types';

/** @internal */
export type UseWebWalletLoginPropsType = {
  callbackRoute: string;
  token?: string;
};

/** @internal */
export type UseWebWalletLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];


export interface InitWalletConnectType {
  callbackRoute: string;
  logoutRoute: string;
  token?: string;
  shouldLoginUser?: boolean;
}

export interface WalletConnectLoginHookCustomStateType {
  uriDeepLink: string | null;
  qrCodeSvg: any;
}

export type WalletConnectLoginHookReturnType = [
  (loginProvider?: boolean) => void,
  LoginHookGenericStateType,
  WalletConnectLoginHookCustomStateType
];
