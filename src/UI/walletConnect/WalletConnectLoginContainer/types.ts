export interface LoginModalPropsType {
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText: string;
  wrapContentInsideModal?: boolean;
  shouldRenderDefaultCss?: boolean;
  token?: string;
  onClose?: () => void;
}
