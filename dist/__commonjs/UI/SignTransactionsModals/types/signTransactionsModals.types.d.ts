/// <reference types="react" />
import { Transaction } from '@multiversx/sdk-core';
import { LoginMethodsEnum, SignModalPropsType } from 'types';
export interface SignPropsType {
    handleClose: () => void;
    error: string | null;
    sessionId?: string;
    transactions: Transaction[];
    providerType: LoginMethodsEnum;
    callbackRoute: string;
    className?: string;
    verifyReceiverScam?: boolean;
    isGuarded?: boolean;
    GuardianScreen?: SignModalPropsType['GuardianScreen'];
}
export declare type ScreenType = (signProps: SignPropsType) => JSX.Element;
export interface CustomConfirmScreensType {
    Ledger?: ScreenType;
    Extension?: ScreenType;
    Passkey?: ScreenType;
    Metamask?: ScreenType;
    Opera?: ScreenType;
    CrossWindow?: ScreenType;
    WalletConnect?: ScreenType;
    Wallet?: ScreenType;
    Extra?: ScreenType;
    Iframe?: ScreenType;
}
//# sourceMappingURL=signTransactionsModals.types.d.ts.map