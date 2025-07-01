import { ReactNode } from 'react';
import { WithClassnameType } from '../../../types';
import { TransactionToastCustomizationProps, TransactionToastDefaultProps } from './transactionToast.type';
export interface TransactionToastPropsType extends TransactionToastDefaultProps, WithClassnameType {
    title?: string | ReactNode;
    children?: ReactNode;
    customization?: TransactionToastCustomizationProps;
}
export declare const TransactionToast: (props: TransactionToastPropsType) => JSX.Element;
//# sourceMappingURL=TransactionToast.d.ts.map