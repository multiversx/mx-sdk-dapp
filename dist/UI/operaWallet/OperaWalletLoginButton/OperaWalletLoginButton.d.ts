import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
export interface OperaWalletLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    children?: ReactNode;
    buttonClassName?: string;
    loginButtonText?: string;
    disabled?: boolean;
}
export declare const OperaWalletLoginButton: (props: OperaWalletLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=OperaWalletLoginButton.d.ts.map