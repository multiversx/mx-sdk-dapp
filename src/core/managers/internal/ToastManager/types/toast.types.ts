import { ITransactionListItem } from 'lib/sdkDappCoreUi';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { TransactionsDisplayInfoType } from 'types/transactions.types';

export enum TransactionsDefaultTitles {
  success = 'Transaction successful',
  received = 'Transaction received',
  failed = 'Transaction failed',
  pending = 'Processing transaction',
  timedOut = 'Transaction timed out',
  invalid = 'Transaction invalid'
}

export interface GetToastsOptionsDataPropsType {
  address: string;
  sender: string;
  status?: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
  toastId: string;
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
}

export interface IToastDataState {
  id: string;
  icon: string;
  hasCloseButton: boolean;
  title: string;
  iconClassName: string;
}
export interface ITransactionProgressState {
  startTime: number;
  endTime: number;
}
export interface ITransaction {
  hash: string;
  status: string;
  link: string;
}
export interface ITransactionToast {
  toastId: string;
  processedTransactionsStatus: string;
  transactions: ITransactionListItem[];
  toastDataState: IToastDataState;
  transactionProgressState?: ITransactionProgressState | null;
}

export enum ToastEventsEnum {
  OPEN_NOTIFICATIONS_FEED = 'OPEN_NOTIFICATIONS_FEED',
  CLOSE_TOAST = 'CLOSE_TOAST',
  // Event to update the transaction toast data
  TRANSACTION_TOAST_DATA_UPDATE = 'TRANSACTION_TOAST_DATA_UPDATE',
  // Event to update the custom toast data
  CUSTOM_TOAST_DATA_UPDATE = 'CUSTOM_TOAST_DATA_UPDATE'
}
