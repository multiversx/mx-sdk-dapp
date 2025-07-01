/**
 * Fallback mechanism to check hanging batches
 * Resolves the toast and set the status to failed for each transaction after a certain time (10minutes)
 * */
export declare const useCheckHangingBatchesFallback: (props?: {
    onSuccess?: ((sessionId: string | null) => void) | undefined;
    onFail?: ((sessionId: string | null, errorMessage?: string) => void) | undefined;
} | undefined) => void;
//# sourceMappingURL=useCheckHangingBatchesFallback.d.ts.map