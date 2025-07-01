import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
export interface ExtensionLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    children?: ReactNode;
    buttonClassName?: string;
    loginButtonText?: string;
    disabled?: boolean;
}
export declare const ExtensionLoginButton: (props: ExtensionLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=ExtensionLoginButton.d.ts.map