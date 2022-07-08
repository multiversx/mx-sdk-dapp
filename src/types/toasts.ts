export interface CustomToastType {
  toastId: string;
  message: string;
  duration?: number;
  type: string;
}

export interface TransactionToastType {
  toastId: string;
  startTimestamp: number;
  type: string;
}

export interface FailTransactionToastType {
  toastId?: string;
  message: string;
  duration?: number;
}
