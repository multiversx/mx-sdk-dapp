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
