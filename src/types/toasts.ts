import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export enum CustomToastDisplayType {
  TransactionToast
}
export interface PlainTransactionStatus {
  isPending: boolean;
  isSuccessful: boolean;
  isFailed: boolean;
  isInvalid: boolean;
  isExecuted: boolean;
}

export interface ToastType {
  id: string;
  title?: React.ReactNode | string;
  iconClassName: string;
  expires: number | boolean;
  timestamp?: number;
  isUpdate?: boolean;
  hasCloseButton?: boolean;
  description?: React.ReactNode | string;
  descriptionProps?: CustomToastType;
  onClick?: () => void | null;
  icon?: typeof faInfoCircle;
  progress?: {
    startTime: number;
    endTime: number;
  };
}

export interface TransactionToastType {
  toastSignSession: string;
  transactions: {
    [hash: string]: PlainTransactionStatus;
  };
  processingMessage?: string;
  errorMessage?: string;
  successMessage?: string;
  submittedMessage?: string;
  submittedMessageShown?: boolean;
  pendingFarmAddress?: string;
  pendingPoolAddress?: string;
  pendingNftTransactions?: string;
  startTime: number;
  endTime: number;
}

export interface TransactionToastDescriptionProps {
  pending: boolean;
  transactions: TransactionToastTransactionsType[];
  toastSignSession: string;
}
export interface TransactionToastDescriptionType {
  type: CustomToastDisplayType.TransactionToast;
  props: TransactionToastDescriptionProps;
}

export interface TransactionToastTransactionsType {
  hash: string;
  status: PlainTransactionStatus;
}

export type CustomToastType = TransactionToastDescriptionType;
