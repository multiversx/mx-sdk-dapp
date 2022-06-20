export interface LoginModalPropsType {
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  shouldRenderDefaultCss?: boolean;
  redirectAfterLogin?: boolean;
  isWalletConnectV2?: boolean;
  token?: string;
  onClose?: () => void;
}
