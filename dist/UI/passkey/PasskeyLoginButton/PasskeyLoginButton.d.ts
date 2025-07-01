import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
export interface PasskeyLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    children?: ReactNode;
    buttonClassName?: string;
    loginButtonText?: string;
    disabled?: boolean;
}
export declare const PasskeyLoginButton: (props: PasskeyLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=PasskeyLoginButton.d.ts.map