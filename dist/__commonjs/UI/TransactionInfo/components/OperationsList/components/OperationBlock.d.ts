/// <reference types="react" />
import { WithTransactionType } from '../../../../../UI/types';
export interface OperationBlockPropsType extends WithTransactionType {
    address: string;
    action?: string;
    isFullSize?: boolean;
    direction?: string;
}
export declare const OperationBlock: (props: OperationBlockPropsType) => JSX.Element;
//# sourceMappingURL=OperationBlock.d.ts.map