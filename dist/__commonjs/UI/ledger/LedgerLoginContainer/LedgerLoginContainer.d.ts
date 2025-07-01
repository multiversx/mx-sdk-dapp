import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { InnerLedgerComponentsClassesType } from './types';
export interface LedgerLoginContainerPropsType extends OnProviderLoginType, WithClassnameType {
    closeOnEscape?: boolean;
    onClose?: () => void;
    customSpinnerComponent?: ReactNode;
    customContentComponent?: ReactNode;
    innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
    showLoginContent?: boolean;
    showLoginModal?: boolean;
    showProgressBar?: boolean;
    showScamPhishingAlert?: boolean;
    wrapContentInsideModal?: boolean;
}
export declare const LedgerLoginContainer: (props: LedgerLoginContainerPropsType) => JSX.Element;
//# sourceMappingURL=LedgerLoginContainer.d.ts.map