import { ReactNode } from 'react';
import { SignedTransactionType } from 'types/index';
export interface TransactionDetailsType {
    title?: ReactNode;
    isTimedOut?: boolean;
    transactions?: SignedTransactionType[];
    className?: string;
}
export declare const TransactionDetails: (props: TransactionDetailsType) => JSX.Element;
//# sourceMappingURL=TransactionDetails.d.ts.map