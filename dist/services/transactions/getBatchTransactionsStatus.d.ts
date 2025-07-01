import { BatchTransactionsResponseType } from 'types';
export interface SendBatchTransactionsPropsType {
    batchId: string;
    address: string;
}
export declare function getBatchTransactionsStatus({ batchId, address }: SendBatchTransactionsPropsType): Promise<BatchTransactionsResponseType>;
//# sourceMappingURL=getBatchTransactionsStatus.d.ts.map