import {
  failedTransactionsSelector,
  pendingTransactionsSelector,
  successfulTransactionsSelector,
  timedOutTransactionsSelector
} from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';

export interface GetActiveTransactionsStatusReturnType {
  timedOut: boolean;
  fail: boolean;
  success: boolean;
  pending: boolean;
}

export function getActiveTransactionsStatus(): GetActiveTransactionsStatusReturnType {
  const state = getState();
  const timedOutTransactions = timedOutTransactionsSelector(state);
  const failedTransactions = failedTransactionsSelector(state);
  const successfulTransactions = successfulTransactionsSelector(state);
  const pendingTransactions = pendingTransactionsSelector(state);
  const pending = Object.keys(pendingTransactions)?.length > 0;
  const timedOut = !pending && Object.keys(timedOutTransactions)?.length > 0;

  const fail =
    !pending && !timedOut && Object.keys(failedTransactions)?.length > 0;

  const success =
    !pending &&
    !timedOut &&
    !fail &&
    Object.keys(successfulTransactions).length > 0;

  return {
    pending,
    timedOut,
    fail,
    success
  };
}
