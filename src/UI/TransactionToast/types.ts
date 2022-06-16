import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';

export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  endTimeProgress?: number;
  processingMessage?: string;
  startTimeProgress?: number;
  shouldRenderDefaultCss?: boolean;
  transactions: SignedTransactionType[] | undefined;
  status: TransactionBatchStatusesEnum | undefined;
  lifetimeAfterSuccess?: number;
  onClose?: (toastId: string) => void;
}
