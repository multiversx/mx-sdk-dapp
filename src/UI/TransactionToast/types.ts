import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';

export interface TransactionToastPropsType {
    title?: string;
    toastId: string;
    className?: string;
    errorMessage?: string;
    withTxNonce?: boolean;
    successMessage?: string;
    endTimeProgress?: number;
    processingMessage?: string;
    startTimeProgress?: number;
    shouldRenderDefaultCss?: boolean;
    transactions: SignedTransactionType[];
    status: TransactionBatchStatusesEnum;
    lifetimeAfterSuccess?: number;
    onClose?: (toastId: string) => void;
}
