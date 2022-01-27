import { ReactNode } from 'react';

export interface ExtensionLoginButtonPropsType {
  token?: string;
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
  callbackRoute: string;
  loginButtonText?: string;
  redirectAfterLogin?: boolean;
  shouldRenderDefaultCss?: boolean;
}
