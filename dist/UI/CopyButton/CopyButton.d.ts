/// <reference types="react" />
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { WithClassnameType } from '../types';
export interface CopyButtonPropsType extends WithClassnameType {
    text: string;
    copyIcon?: IconProp;
    successIcon?: IconProp;
}
export declare const CopyButton: (props: CopyButtonPropsType) => JSX.Element;
//# sourceMappingURL=CopyButton.d.ts.map