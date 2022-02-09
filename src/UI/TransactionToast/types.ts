import { SignedTransactionsType, TransactionBatchStatusesEnum } from 'types';

export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  processingMessage?: string;
  isSameShard: boolean;
  withTxNonce?: boolean;
  shouldRenderDefaultCss?: boolean;
  transactions: SignedTransactionsType[];
  status: TransactionBatchStatusesEnum;
  onClose?: (toastId: string) => void;
}
