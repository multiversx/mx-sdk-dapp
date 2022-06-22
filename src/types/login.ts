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
