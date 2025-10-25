import { SignedTransactionType } from 'types/transactions.types';

export type ToastsSliceType = {
  customToasts: CustomToastType[];
  transactionToasts: ITransactionToast[];
};

interface ISharedCustomToast {
  toastId: string;
  /**
   * Duration in milliseconds
   */
  duration?: number;
  hasCloseButton?: boolean;
  onClose?: () => void;
}

export interface ISimpleToast extends ISharedCustomToast {
  icon?: string;
  iconClassName?: string;
  title?: string;
  message: string;
  /**
   * Use `subtitle` to display a row of information between `title` and `message`
   */
  subtitle?: string;
  instantiateToastElement?: never;
}

export interface IComponentToast extends ISharedCustomToast {
  /**
   * A function that creates a custom toast component.
   *
   * Use `instantiateToastElement` to display a custom agnostic component.
   *
   * @returns {HTMLElement | null} The custom toast component to be displayed, or `null` if no component is created.
   *
   * **⚠️ Warning**: Toasts with components will not be persisted on page reload because agnostic components are not serializable.
   */
  instantiateToastElement: (() => HTMLElement) | null;
  icon?: never;
  iconClassName?: never;
  title?: never;
  message?: never;
  subtitle?: never;
}

export type CustomToastType = ISimpleToast | IComponentToast;

export interface ITransactionToast {
  startTime: number;
  endTime: number;
  toastId: string;
  transaction?: SignedTransactionType;
}
