import { SignedTransactionType } from 'types';
export declare function useUpdateBatch(): (props?: {
    sessionId: string;
    isBatchFailed?: boolean;
    dropUnprocessedTransactions?: boolean;
    shouldRefreshBalance?: boolean;
    transactions?: SignedTransactionType[];
}) => Promise<void>;
//# sourceMappingURL=useUpdateBatch.d.ts.map