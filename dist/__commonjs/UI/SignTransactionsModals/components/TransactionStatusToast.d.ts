import { WithClassnameType } from '../../types';
export interface TransactionStatusToastType extends WithClassnameType {
    signError: string | null;
    canceledTransactionsMessage: string | null;
    onDelete?: () => void;
}
export declare const TransactionStatusToast: ({ signError, canceledTransactionsMessage, onDelete }: TransactionStatusToastType) => null;
//# sourceMappingURL=TransactionStatusToast.d.ts.map