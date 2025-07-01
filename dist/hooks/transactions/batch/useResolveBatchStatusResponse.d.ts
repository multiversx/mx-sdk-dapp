export declare const useResolveBatchStatusResponse: () => ({ batchId }: {
    batchId: string;
}) => Promise<{
    statusResponse: null;
    isBatchSuccessful: boolean;
    isBatchFailed: boolean;
    isBatchNotFound: boolean;
} | {
    statusResponse: import("types").BatchTransactionsResponseType;
    isBatchSuccessful: boolean;
    isBatchFailed: boolean;
    isBatchNotFound: boolean;
}>;
//# sourceMappingURL=useResolveBatchStatusResponse.d.ts.map