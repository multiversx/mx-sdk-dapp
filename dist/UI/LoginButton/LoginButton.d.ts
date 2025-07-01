import { ReactNode } from 'react';
import { WithClassnameType } from '../types';
export interface LoginButtonPropsType extends WithClassnameType {
    onLogin: () => void;
    text?: string;
    btnClassName?: string;
    children?: ReactNode;
    disabled?: boolean;
}
export declare const LoginButton: (props: LoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=LoginButton.d.ts.map