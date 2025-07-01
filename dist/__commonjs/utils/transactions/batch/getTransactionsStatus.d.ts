import { SignedTransactionType } from 'types';
export declare const getTransactionsStatus: ({ transactions, hasUnrelatedTransactions }: {
    transactions: SignedTransactionType[];
    hasUnrelatedTransactions?: boolean | undefined;
}) => {
    isPending: boolean;
    isSuccessful: boolean;
    isFailed: boolean;
    isIncompleteFailed: boolean | undefined;
};
//# sourceMappingURL=getTransactionsStatus.d.ts.map