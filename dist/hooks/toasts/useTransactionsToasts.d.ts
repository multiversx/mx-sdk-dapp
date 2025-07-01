import { TransactionBatchStatusesEnum } from 'types';
export declare const useTransactionsToasts: () => {
    transactionsToastsInfo: {
        sessionId: string;
        baseTransactionsInfo: import("types").TransactionsDisplayInfoType;
        customTransactionsInfo: any;
        status: TransactionBatchStatusesEnum | undefined;
        isPending: boolean;
    }[];
    pendingTransactionsToastsInfo: {
        sessionId: string;
        baseTransactionsInfo: import("types").TransactionsDisplayInfoType;
        customTransactionsInfo: any;
        status: TransactionBatchStatusesEnum | undefined;
        isPending: boolean;
    }[];
};
//# sourceMappingURL=useTransactionsToasts.d.ts.map