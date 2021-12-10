export interface LoginHookGenericStateType {
  error: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export type LoginHookTriggerType = () => void;

export type LoginHookReturnType = [
  LoginHookReturnType,
  LoginHookGenericStateType
];
