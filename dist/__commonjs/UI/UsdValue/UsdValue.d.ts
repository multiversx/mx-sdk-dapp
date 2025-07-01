/// <reference types="react" />
import { WithClassnameType } from '../types';
export interface UsdValueType extends WithClassnameType {
    amount: string;
    usd: number;
    decimals?: number;
    addEqualSign?: boolean;
    'data-testid'?: string;
}
export declare const UsdValue: (props: UsdValueType) => JSX.Element;
//# sourceMappingURL=UsdValue.d.ts.map