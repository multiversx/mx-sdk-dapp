import { getEgldLabel } from 'core/methods/network/getEgldLabel';
import { getExplorerAddress } from 'core/methods/network/getExplorerAddress';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'store/actions/transactions/transactionStateByStatus';
import { AccountSliceType } from 'store/slices/account/account.types';
import { ToastsSliceType } from 'store/slices/toast/toastSlice.types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { SessionTransactionType } from 'types/transactions.types';
import { mapServerTransactionsToListItems } from 'utils/transactions/getTransactionsHistory/helpers';
import { createTransactionToast } from './createTransactionToast';
import { ITransactionToast } from '../types/toast.types';
interface CreateToastsFromTransactionsReturnType {
  pendingTransactionToasts: ITransactionToast[];
  completedTransactionToasts: ITransactionToast[];
}

interface CreateToastsFromTransactionsParamsType {
  toastList: ToastsSliceType;
  transactionsSessions: Record<string, SessionTransactionType>;
  account: AccountSliceType;
  existingCompletedTransactions?: ITransactionToast[];
}

export const createToastsFromTransactions = async ({
  toastList,
  transactionsSessions,
  account,
  existingCompletedTransactions = []
}: CreateToastsFromTransactionsParamsType): Promise<CreateToastsFromTransactionsReturnType> => {
  const pendingTransactionToasts: ITransactionToast[] = [];
  const completedTransactionToasts: ITransactionToast[] = [
    ...existingCompletedTransactions
  ];
  const explorerAddress = getExplorerAddress();
  const egldLabel = getEgldLabel();

  for (const toast of toastList.transactionToasts) {
    const transactionSession = transactionsSessions[toast.toastId];
    if (!transactionSession?.status) {
      continue;
    }

    const { status, transactions, transactionsDisplayInfo } =
      transactionSession;

    const interprettedTransactions = await mapServerTransactionsToListItems({
      transactions,
      address: account.address,
      explorerAddress,
      egldLabel
    });

    const isTimedOut = getIsTransactionTimedOut(status);
    const isFailed = getIsTransactionFailed(status);
    const isSuccessful = getIsTransactionSuccessful(status);
    const isCompleted = isTimedOut || isFailed || isSuccessful;
    const isPending = getIsTransactionPending(status);
    const { startTime, endTime } = toast;

    if (
      isCompleted &&
      completedTransactionToasts.some((t) => t.toastId === toast.toastId)
    ) {
      continue;
    }

    const transactionToast = createTransactionToast({
      toastId: toast.toastId,
      address: account.address,
      status: status as TransactionServerStatusesEnum,
      transactions: interprettedTransactions,
      transactionsDisplayInfo,
      explorerAddress,
      startTime,
      endTime
    });

    if (isCompleted) {
      completedTransactionToasts.push(transactionToast);
    }

    if (isPending) {
      pendingTransactionToasts.push(transactionToast);
    }
  }

  return {
    pendingTransactionToasts,
    completedTransactionToasts
  };
};
