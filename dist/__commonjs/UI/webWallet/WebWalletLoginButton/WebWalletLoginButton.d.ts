import { ReactNode } from 'react';
import { UseWebWalletLoginPropsType } from '../../../hooks/login/useWebWalletLogin';
import { WithClassnameType } from '../../types';
export interface WebWalletLoginButtonPropsType extends UseWebWalletLoginPropsType, WithClassnameType {
    buttonClassName?: string;
    children?: ReactNode;
    loginButtonText?: string;
    disabled?: boolean;
}
export declare const WebWalletLoginButton: (props: WebWalletLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=WebWalletLoginButton.d.ts.map