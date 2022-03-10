import { ReactNode } from 'react';

export interface LedgerLoginButtonPropsType {
  token?: string;
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
  callbackRoute: string;
  loginButtonText?: string;
  redirectAfterLogin?: boolean;
  wrapContentInsideModal?: boolean;
  shouldRenderDefaultCss?: boolean;
}
