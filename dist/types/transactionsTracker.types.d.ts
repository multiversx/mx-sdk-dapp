import { GetTransactionsByHashesType } from 'types/index';
export interface TransactionsTrackerType {
    getTransactionsByHash?: GetTransactionsByHashesType;
    onSuccess?: (sessionId: string | null) => void;
    onFail?: (sessionId: string | null, errorMessage?: string) => void;
}
//# sourceMappingURL=transactionsTracker.types.d.ts.map