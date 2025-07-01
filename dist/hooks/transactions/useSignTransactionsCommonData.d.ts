/// <reference types="react" />
import { Transaction } from '@multiversx/sdk-core/out';
export declare const useSignTransactionsCommonData: () => {
    error: string | null;
    canceledTransactionsMessage: string | null;
    clearTransactionStatusMessage: () => void;
    onAbort: (sessionId?: string) => void;
    setError: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    hasTransactions: boolean | undefined;
    transactionsToSign: {
        transactions: Transaction[];
        callbackRoute?: string | undefined;
        sessionId: string;
        customTransactionInformation: import("../../types").CustomTransactionInformation;
    } | null;
};
//# sourceMappingURL=useSignTransactionsCommonData.d.ts.map