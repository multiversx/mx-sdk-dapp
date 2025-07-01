export declare const useVerifyBatchStatus: (props?: {
    onSuccess?: ((sessionId: string | null) => void) | undefined;
    onFail?: ((sessionId: string | null, errorMessage?: string) => void) | undefined;
} | undefined) => {
    verifyBatchStatus: ({ batchId }: {
        batchId: string;
    }) => Promise<void>;
};
//# sourceMappingURL=useVerifyBatchStatus.d.ts.map