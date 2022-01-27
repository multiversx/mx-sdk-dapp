import { ReactNode } from 'react';

export interface WalletConnectLoginButtonPropsType {
  children?: ReactNode;
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText?: string;
  buttonClassName?: string;
  shouldRenderDefaultCss?: boolean;
  renderContentInsideModal?: boolean;
  token?: string;
}
