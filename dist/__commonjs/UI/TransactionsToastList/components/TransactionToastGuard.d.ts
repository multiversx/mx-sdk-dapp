/// <reference types="react" />
import { SignedTransactionsType } from 'types';
export interface TransactionToastGuardPropsType {
    signedTransactionsToRender: SignedTransactionsType;
    toastId: string;
    type: string;
    startTimestamp: number;
    successfulToastLifetime: number | undefined;
    handleDeleteTransactionToast: (toastId: string) => void;
    className?: string;
}
export declare const TransactionToastGuard: ({ className, signedTransactionsToRender, successfulToastLifetime, handleDeleteTransactionToast, startTimestamp, toastId }: TransactionToastGuardPropsType) => JSX.Element | null;
//# sourceMappingURL=TransactionToastGuard.d.ts.map