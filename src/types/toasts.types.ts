import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface CustomToastType {
  toastId: string;
  title?: string;
  message: string;
  /**
   * Information showing up above main message
   */
  status?: string;
  duration?: number;
  type?: string;
  icon?: IconDefinition;
  iconClassName?: string;
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
