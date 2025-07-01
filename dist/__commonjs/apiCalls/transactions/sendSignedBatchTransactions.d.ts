import { BatchTransactionsResponseType, CustomTransactionInformation, SignedTransactionType } from 'types';
export interface SendBatchTransactionsPropsType {
    transactions: SignedTransactionType[][];
    sessionId: string;
    customTransactionInformationOverrides?: Partial<CustomTransactionInformation>;
}
export declare type SendSignedBatchTransactionsReturnType = {
    error?: string | null;
    batchId?: string | null;
    data?: BatchTransactionsResponseType;
};
export declare function sendSignedBatchTransactions({ transactions, sessionId }: SendBatchTransactionsPropsType): Promise<{
    batchId: string;
    data: BatchTransactionsResponseType;
    error?: undefined;
} | {
    error: any;
    batchId: null;
    data?: undefined;
}>;
//# sourceMappingURL=sendSignedBatchTransactions.d.ts.map