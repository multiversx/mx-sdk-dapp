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
  startTimeProgress?: number;
  shouldRenderDefaultCss?: boolean;
  transactions: SignedTransactionType[] | undefined;
  status: TransactionBatchStatusesEnum | undefined;
  signedTransactionsToRender: SignedTransactionsType;
  lifetimeAfterSuccess?: number;
}
