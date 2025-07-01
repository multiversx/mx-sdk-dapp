import { Transaction } from '@multiversx/sdk-core';
export declare const useSignTransactions: () => {
    error: string | null;
    canceledTransactionsMessage: string | null;
    onAbort: (sessionId?: string | undefined) => void;
    hasTransactions: boolean | undefined;
    callbackRoute: string;
    sessionId: string | undefined;
    transactions: Transaction[] | undefined;
};
//# sourceMappingURL=useSignTransactions.d.ts.map