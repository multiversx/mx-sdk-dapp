export interface LoginHookGenericStateType {
  error: string;
  isFailed: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export type LoginHookTriggerType = () => void;

export type LoginHookReturnType = [
  LoginHookReturnType,
  LoginHookGenericStateType
];
