import { ReactNode } from 'react';
import { WithClassnameType } from '../../types';
export interface SimplePropsType extends WithClassnameType {
    children: ReactNode;
}
export interface CombinedPropsType extends WithClassnameType {
    small: boolean | undefined;
    children: ReactNode;
}
export declare const Simple: (props: SimplePropsType) => JSX.Element;
export declare const Combined: (props: CombinedPropsType) => JSX.Element;
//# sourceMappingURL=index.d.ts.map