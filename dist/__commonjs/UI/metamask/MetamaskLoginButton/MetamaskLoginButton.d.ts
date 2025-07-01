import { ReactNode } from 'react';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
export interface MetamaskLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    children?: ReactNode;
    buttonClassName?: string;
    loginButtonText?: string;
    disabled?: boolean;
}
export declare const MetamaskLoginButton: (props: MetamaskLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=MetamaskLoginButton.d.ts.map