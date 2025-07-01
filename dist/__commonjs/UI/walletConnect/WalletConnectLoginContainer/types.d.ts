import { ReactNode, MutableRefObject } from 'react';
import { OnProviderLoginType } from '../../../types/login.types';
import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';
export interface WalletConnectLoginModalPropsType extends OnProviderLoginType, WithClassnameType {
    loginButtonText: ReactNode;
    customSpinnerComponent?: ReactNode;
    innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
    lead?: string;
    legacyMessage?: string;
    logoutRoute?: string;
    onClose?: () => void;
    showLoginContent?: boolean;
    showLoginModal?: boolean;
    showScamPhishingAlert?: boolean;
    title?: string;
    wrapContentInsideModal?: boolean;
    customRequestMethods?: Array<string>;
    isWalletConnectV2?: boolean;
    canLoginRef?: MutableRefObject<boolean>;
}
//# sourceMappingURL=types.d.ts.map