export interface Props {
  title?: string;
  className?: string;
  loginRoute: string;
  LedgerLoginButtonText?: string;
  shouldRenderDefaultCss?: boolean;
  ExtensionloginButtonText?: string;
  WebWalletLoginButtonText?: string;
  WalletConnectLoginButtonText?: string;
  description?: string | React.ReactNode;
}
