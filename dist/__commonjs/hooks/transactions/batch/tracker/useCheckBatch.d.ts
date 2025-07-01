export declare function useCheckBatch(): ({ batchId }: {
    batchId: string;
}) => Promise<{
    statusResponse: null;
    isBatchSuccessful: boolean;
    isBatchFailed: boolean;
    isBatchNotFound: boolean;
} | {
    statusResponse: import("../../../../types").BatchTransactionsResponseType;
    isBatchSuccessful: boolean;
    isBatchFailed: boolean;
    isBatchNotFound: boolean;
}>;
//# sourceMappingURL=useCheckBatch.d.ts.map