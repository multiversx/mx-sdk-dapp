import { ReactNode } from 'react';
import { SignedTransactionType } from 'types';
import { TransactionToastContentElementsProps } from '../transactionToast.type';
import { ToastDataState } from '../utils';
export interface TransactionToastContentProps {
    style: Record<string, string>;
    toastDataState: ToastDataState;
    transactions: SignedTransactionType[];
    showCloseButton?: boolean;
    onDeleteToast?: () => void;
    toastTitle?: string | ReactNode;
    isTimedOut?: boolean;
    customElements?: TransactionToastContentElementsProps;
}
export declare const TransactionToastContent: (props: TransactionToastContentProps) => JSX.Element;
//# sourceMappingURL=TransactionToastContent.d.ts.map