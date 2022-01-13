import { ReactNode } from 'react';

export interface WebWalletLoginButtonPropsType {
  token?: string;
  className?: string;
  callbackRoute: string;
  buttonClassName?: string;
  children?: ReactNode;
  loginButtonText?: string;
  shouldRenderDefaultCss?: boolean;
}
