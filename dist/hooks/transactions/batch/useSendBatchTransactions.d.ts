import { SendBatchTransactionsPropsType } from 'apiCalls/transactions/sendSignedBatchTransactions';
export declare const useSendBatchTransactions: () => {
    send: (params: SendBatchTransactionsPropsType) => Promise<{
        batchId: string;
        data: import("types/serverTransactions.types").BatchTransactionsResponseType;
        error?: undefined;
    } | {
        error: any;
        batchId: null;
        data?: undefined;
    }>;
    batchId: string | undefined;
};
//# sourceMappingURL=useSendBatchTransactions.d.ts.map