import { ReactNode } from 'react';
export interface Props {
    title?: string;
    className?: string;
    loginRoute: string;
    LedgerLoginButtonText?: string;
    ExtensionLoginButtonText?: string;
    PasskeyLoginButtonText?: string;
    OperaWalletLoginButtonText?: string;
    CrossWindowLoginButtonText?: string;
    IframeLoginButtonText?: string;
    WebWalletLoginButtonText?: string;
    WalletConnectLoginButtonText?: string;
    WalletConnectV2LoginButtonText?: string;
    description?: string | ReactNode;
}
export declare const UnlockPage: (props: Props) => JSX.Element;
//# sourceMappingURL=index.d.ts.map