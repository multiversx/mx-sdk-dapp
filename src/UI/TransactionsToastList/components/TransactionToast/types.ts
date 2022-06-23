import {
  SignedTransactionType,
  SignedTransactionsType,
  TransactionBatchStatusesEnum
} from 'types';

export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  endTimeProgress?: number;
  processingMessage?: string;
  containerClassName?: string;
  startTimeProgress?: number;
  shouldRenderDefaultCss?: boolean;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  signedTransactionsToRender: SignedTransactionsType;
  lifetimeAfterSuccess?: number;
}
