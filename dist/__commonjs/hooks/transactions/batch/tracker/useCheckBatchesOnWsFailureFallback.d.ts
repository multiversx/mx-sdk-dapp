/**
 * Fallback mechanism to check batches in case of ws connection failure
 * Resolves the toast by checking the status of each transaction in batch after a certain time (90seconds)
 * */
export declare const useCheckBatchesOnWsFailureFallback: (props?: {
    onSuccess?: ((sessionId: string | null) => void) | undefined;
    onFail?: ((sessionId: string | null, errorMessage?: string) => void) | undefined;
} | undefined) => void;
//# sourceMappingURL=useCheckBatchesOnWsFailureFallback.d.ts.map