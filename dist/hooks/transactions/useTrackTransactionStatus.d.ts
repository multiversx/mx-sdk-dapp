import { TransactionBatchStatusesEnum } from 'types/enums.types';
export interface UseTrackTransactionStatusArgsType {
    transactionId: string | null;
    onSuccess?: (transactionId: string | null) => void;
    onFail?: (transactionId: string | null, errorMessage?: string) => void;
    onTimedOut?: (transactionId: string | null) => void;
    onCancelled?: (transactionId: string | null) => void;
}
export declare function useTrackTransactionStatus({ transactionId: txId, onSuccess, onFail, onCancelled, onTimedOut }: UseTrackTransactionStatusArgsType): {
    errorMessage?: undefined;
    isPending?: undefined;
    isSuccessful?: undefined;
    isFailed?: undefined;
    isCancelled?: undefined;
    status?: undefined;
    transactions?: undefined;
} | {
    errorMessage: string;
    isPending?: undefined;
    isSuccessful?: undefined;
    isFailed?: undefined;
    isCancelled?: undefined;
    status?: undefined;
    transactions?: undefined;
} | {
    isPending: boolean;
    isSuccessful: boolean;
    isFailed: boolean;
    isCancelled: boolean;
    errorMessage: string | undefined;
    status: TransactionBatchStatusesEnum | undefined;
    transactions: import("../../types").SignedTransactionType[] | undefined;
};
//# sourceMappingURL=useTrackTransactionStatus.d.ts.map