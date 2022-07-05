import { ReactNode } from 'react';

export interface DenominateType {
  value: string;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
  decimals?: number;
  denomination?: number;
  egldLabel?: string;
  'data-testid'?: string;
}

export interface ExtensionLoginButtonPropsType {
  token?: string;
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
  callbackRoute?: string;
  loginButtonText?: string;
  shouldRenderDefaultCss?: boolean;
  onLoginRedirect?: (callbackRoute: string) => void;
}
