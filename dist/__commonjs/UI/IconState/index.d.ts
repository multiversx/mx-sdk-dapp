/// <reference types="react" />
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { WithClassnameType } from '../types';
export interface IconStateProps extends WithClassnameType {
    icon: IconProp;
    iconSize?: '2x' | '3x' | '5x';
}
export declare const IconState: (props: IconStateProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map