import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { InnerLedgerComponentsClassesType } from '../LedgerLoginContainer/types';
export interface LedgerLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    buttonClassName?: string;
    children?: ReactNode;
    customSpinnerComponent?: ReactNode;
    disabled?: boolean;
    hideButtonWhenModalOpens?: boolean;
    innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
    loginButtonText?: string;
    modalClassName?: string;
    onContentHide?: (props?: any) => void;
    onContentShow?: (props?: any) => void;
    onModalCloses?: (props?: any) => void;
    onModalOpens?: (props?: any) => void;
    showProgressBar?: boolean;
    showScamPhishingAlert?: boolean;
    wrapContentInsideModal?: boolean;
}
export declare const LedgerLoginButton: (props: LedgerLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=LedgerLoginButton.d.ts.map