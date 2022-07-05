import { ReactNode } from 'react';

export interface WalletConnectLoginButtonPropsType {
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  onLoginRedirect?: (callbackRoute: string) => void;
  children?: ReactNode;
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText?: string;
  buttonClassName?: string;
  shouldRenderDefaultCss?: boolean;
  wrapContentInsideModal?: boolean;
  redirectAfterLogin?: boolean;
  hideButtonWhenModalOpens?: boolean;
  token?: string;
}
