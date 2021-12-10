export interface LoginHookGenericInfoType {
  error: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export type LoginHookTriggerType = () => void;

export type LoginHookReturnType = [
  LoginHookReturnType,
  LoginHookGenericInfoType
];
