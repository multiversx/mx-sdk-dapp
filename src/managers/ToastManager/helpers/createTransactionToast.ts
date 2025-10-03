import { ITransactionListItem } from 'lib/sdkDappUi';
import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { TransactionsDisplayInfoType } from 'types/transactions.types';
import { getToastDataStateByStatus } from './getToastDataStateByStatus';
import { getToastTransactionsStatus } from './getToastTransactionsStatus';
import { ITransactionToast } from '../types/toast.types';
interface CreateTransactionToastParamsType {
  toastId: string;
  address: string;
  status: ServerTransactionType['status'];
  transactions: ITransactionListItem[];
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  startTime: number;
  endTime: number;
}

export const createTransactionToast = ({
  toastId,
  address,
  status,
  transactions,
  transactionsDisplayInfo,
  startTime,
  endTime
}: CreateTransactionToastParamsType): ITransactionToast => {
  const hasPendingTransaction = transactions.some((tx) =>
    getIsTransactionPending(
      tx.status as TransactionServerStatusesEnum | TransactionBatchStatusesEnum
    )
  );
  // Extracts action name from the first transaction
  const txActionName = transactions[0]?.action?.name;

  const toastDataState = getToastDataStateByStatus({
    address,
    sender: transactions[0]?.interactor ?? '',
    toastId,
    status,
    transactionsDisplayInfo,
    txActionName
  });

  const processedTransactionsStatus = getToastTransactionsStatus(transactions);

  const transactionProgressState = hasPendingTransaction
    ? {
        endTime,
        startTime
      }
    : null;

  return {
    toastDataState,
    processedTransactionsStatus,
    transactionProgressState,
    toastId,
    transactions
  };
};
