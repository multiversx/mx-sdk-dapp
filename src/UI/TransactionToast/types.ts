import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';

export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  withTxNonce?: boolean;
  shouldRenderDefaultCss?: boolean;
  transactions: SignedTransactionType[];
  status: TransactionBatchStatusesEnum;
  onClose?: (toastId: string) => void;
}
