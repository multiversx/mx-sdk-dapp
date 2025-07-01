export declare type BatchTransactionsTrackerProps = {
    onSuccess?: (sessionId: string | null) => void;
    onFail?: (sessionId: string | null, errorMessage?: string) => void;
};
export declare const useBatchTransactionsTracker: ({ onSuccess, onFail }: BatchTransactionsTrackerProps) => void;
//# sourceMappingURL=useBatchTransactionsTracker.d.ts.map