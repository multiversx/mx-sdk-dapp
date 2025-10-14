import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'store/actions/transactions/transactionStateByStatus';
import { addressSelector } from 'store/selectors/accountSelectors';
import { toastsSliceSelector } from 'store/selectors/toastsSelectors';
import { transactionsSliceSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { StoreType } from 'store/store.types';
import { mapServerTransactionsToListItems } from 'utils/transactions/getTransactionsHistory/helpers';
import { createTransactionToast } from './createTransactionToast';
import { ITransactionToast } from '../types/toast.types';
interface CreateToastsFromTransactionsReturnType {
  pendingTransactionToasts: ITransactionToast[];
  completedTransactionToasts: ITransactionToast[];
}

interface CreateToastsFromTransactionsParamsType {
  existingCompletedTransactions?: ITransactionToast[];
  skipFetchingTransactions?: boolean;
  store?: StoreType;
}

export async function createToastsFromTransactions({
  existingCompletedTransactions = [],
  skipFetchingTransactions = false,
  ...props
}: CreateToastsFromTransactionsParamsType): Promise<CreateToastsFromTransactionsReturnType> {
  const store = props.store ?? getState();
  const pendingTransactionToasts: ITransactionToast[] = [];
  const completedTransactionToasts: ITransactionToast[] = [
    ...existingCompletedTransactions
  ];
  const toastList = toastsSliceSelector(store);
  const transactionsSessions = transactionsSliceSelector(store);
  const address = addressSelector(store);

  for (const toast of toastList.transactionToasts) {
    const transactionSession = transactionsSessions[toast.toastId];
    if (!transactionSession?.status) {
      continue;
    }

    const { status, transactions, transactionsDisplayInfo } =
      transactionSession;

    const interprettedTransactions = await mapServerTransactionsToListItems({
      transactions,
      skipFetchingTransactions,
      store
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
      address,
      status,
      transactions: interprettedTransactions,
      transactionsDisplayInfo,
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
}
