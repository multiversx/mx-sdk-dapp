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
  token?: string;
  onClose?: () => void;
  onLoginRedirect?: (callbackRoute: string) => void;
}
