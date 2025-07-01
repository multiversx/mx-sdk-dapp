import { ReactNode } from 'react';
import { WithOperationType, WithTransactionType } from '../../../../../UI/types';
export interface DetailedItemPropsType extends WithTransactionType, WithOperationType {
    children?: ReactNode;
}
export declare const DetailedItem: (props: DetailedItemPropsType) => JSX.Element;
//# sourceMappingURL=DetailedItem.d.ts.map