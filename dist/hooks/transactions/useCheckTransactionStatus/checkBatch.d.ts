import { SignedTransactionsBodyType } from 'types';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
export interface TransactionStatusTrackerPropsType extends TransactionsTrackerType {
    sessionId: string;
    transactionBatch: SignedTransactionsBodyType;
    shouldRefreshBalance?: boolean;
    isSequential?: boolean;
}
export declare function checkBatch({ sessionId, transactionBatch: { transactions, customTransactionInformation }, getTransactionsByHash, shouldRefreshBalance, isSequential, onSuccess, onFail }: TransactionStatusTrackerPropsType): Promise<void>;
//# sourceMappingURL=checkBatch.d.ts.map