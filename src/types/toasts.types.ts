import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface CustomToastType {
  toastId: string;
  message: string;
  duration?: number;
  type?: string;
}

export interface IconToastType {
  toastId: string;
  title?: string;
  message: string;
  /**
   * Information showing up above main message
   */
  status?: string;
  /**
   * Duration in miliseconds
   */
  duration?: number;
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
