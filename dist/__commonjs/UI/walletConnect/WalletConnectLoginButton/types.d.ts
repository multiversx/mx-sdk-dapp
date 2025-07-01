import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';
export interface WalletConnectLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    buttonClassName?: string;
    children?: ReactNode;
    customSpinnerComponent?: ReactNode;
    disabled?: boolean;
    hideButtonWhenModalOpens?: boolean;
    innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
    isWalletConnectV2?: boolean;
    lead?: string;
    loginButtonText?: string;
    logoutRoute?: string;
    modalClassName?: string;
    onContentHide?: (props?: any) => void;
    onContentShow?: (props?: any) => void;
    onModalCloses?: (props?: any) => void;
    onModalOpens?: (props?: any) => void;
    showScamPhishingAlert?: boolean;
    title?: string;
    wrapContentInsideModal?: boolean;
    customRequestMethods?: Array<string>;
}
//# sourceMappingURL=types.d.ts.map