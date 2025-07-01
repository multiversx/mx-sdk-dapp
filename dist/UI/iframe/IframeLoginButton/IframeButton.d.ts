import { ReactNode } from 'react';
import { IframeLoginTypes } from 'lib/sdkWebWalletIframeProvider';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
export interface IframeLoginButtonPropsType extends WithClassnameType, OnProviderLoginType {
    children?: ReactNode;
    buttonClassName?: string;
    loginButtonText?: string;
    disabled?: boolean;
    loginType?: IframeLoginTypes;
}
export declare const IframeButton: (props: IframeLoginButtonPropsType) => JSX.Element;
//# sourceMappingURL=IframeButton.d.ts.map