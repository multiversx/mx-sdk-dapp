import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ServerTransactionType } from './serverTransactions.types';

interface SharedCustomToast {
  toastId: string;
  /**
   * Duration in miliseconds
   */
  duration?: number;
  type?: string;
}
export interface MessageCustomToastType extends SharedCustomToast {
  message: string;
  icon?: never;
  iconClassName?: never;
  title?: never;
  status?: never;
  transaction?: never;
}
interface SharedIconToastType extends SharedCustomToast {
  icon: IconDefinition;
  iconClassName?: string;
  title: string;
}
export interface MessageIconToastType extends SharedIconToastType {
  message: string;
  /**
   * Use `status` to display a row of information between `title` and `message`
   */
  status?: string;
  transaction?: never;
}

export interface TransactionIconToastType extends SharedIconToastType {
  transaction: ServerTransactionType;
  message?: never;
  status?: never;
}

export type CustomToastType =
  | MessageCustomToastType
  | MessageIconToastType
  | TransactionIconToastType;

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
