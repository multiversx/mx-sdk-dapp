import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
export interface CrossWindowLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    children?: ReactNode;
    buttonClassName?: string;
    loginButtonText?: string;
    disabled?: boolean;
    hasConsentPopup?: boolean;
}
export declare const CrossWindowLoginButton: (props: CrossWindowLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=CrossWindowLoginButton.d.ts.map