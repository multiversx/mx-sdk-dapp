import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface CustomToastType {
  toastId: string;
  message: string;
  /**
   * Duration in miliseconds
   */
  duration?: number;
  type?: string;
  /**
   * Use `iconToastData` to switch from an inline toast to a icon toast
   */
  iconToastData?: {
    title: string;
    /**
     * Use `status` to display a row of information between `title` and `message`
     */
    status?: string;
    icon: IconDefinition;
    iconClassName?: string;
  };
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
