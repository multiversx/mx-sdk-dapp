import { ITransactionListItem } from 'lib/sdkDappCoreUi';
import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { TransactionsDisplayInfoType } from 'types/transactions.types';
import { getToastDataStateByStatus } from './getToastDataStateByStatus';
import { getToastTransactionsStatus } from './getToastTransactionsStatus';
import { ITransactionToast } from '../types/toast.types';
interface CreateTransactionToastParamsType {
  toastId: string;
  address: string;
  status: TransactionServerStatusesEnum;
  transactions: ITransactionListItem[];
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  explorerAddress: string;
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
  const isPending = getIsTransactionPending(status);

  const toastDataState = getToastDataStateByStatus({
    address,
    sender: transactions[0]?.interactor ?? '',
    toastId,
    status,
    transactionsDisplayInfo
  });

  const processedTransactionsStatus = getToastTransactionsStatus(transactions);

  const transactionProgressState = isPending
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
