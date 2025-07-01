import { SignedTransactionType } from 'types';
export interface PendingTransactionType {
    hash: string;
    previousStatus: string;
}
export declare function getPendingTransactions(transactions: SignedTransactionType[], timedOutHashes: string[]): PendingTransactionType[];
//# sourceMappingURL=getPendingTransactions.d.ts.map