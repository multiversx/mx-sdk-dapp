export interface Props {
  title?: string;
  className?: string;
  loginRoute: string;
  LedgerLoginButtonText?: string;
  shouldRenderDefaultCss?: boolean;
  ExtensionLoginButtonText?: string;
  WebWalletLoginButtonText?: string;
  WalletConnectLoginButtonText?: string;
  WalletConnectV2LoginButtonText?: string;
  description?: string | React.ReactNode;
}
