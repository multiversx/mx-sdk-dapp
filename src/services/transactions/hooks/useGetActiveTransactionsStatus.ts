import { useSelector } from 'redux/DappProviderContext';
import {
  completedTransactionsSelector,
  failedTransactionsSelector,
  pendingSignedTransactionsSelector,
  signedTransactionsSelector,
  successfulTransactionsSelector,
  timedOutTransactionsSelector
} from 'redux/selectors';

interface useGetActiveTransactionsStatusReturnType {
  pending: boolean;
  timedOut: boolean;
  fail: boolean;
  success: boolean;
  completed: boolean;
  hasActiveTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetActiveTransactionsStatus(): useGetActiveTransactionsStatusReturnType {
  const signedTransactions = useSelector(signedTransactionsSelector);
  const timedOutTransactions = useSelector(timedOutTransactionsSelector);
  const failedTransactions = useSelector(failedTransactionsSelector);
  const successfulTransactions = useSelector(successfulTransactionsSelector);
  const pendingTransactions = useSelector(pendingSignedTransactionsSelector);
  const completedTransactions = useSelector(completedTransactionsSelector);

  const pending = Object.keys(pendingTransactions)?.length > 0;

  const timedOut = !pending && Object.keys(timedOutTransactions)?.length > 0;

  const fail =
    !pending && !timedOut && Object.keys(failedTransactions)?.length > 0;

  const success =
    !pending &&
    !timedOut &&
    !fail &&
    Object.keys(successfulTransactions).length > 0;

  const completed =
    !pending &&
    !timedOut &&
    !fail &&
    Object.keys(completedTransactions).length > 0;
  const hasActiveTransactions = Object.keys(signedTransactions).length > 0;
  return {
    pending,
    timedOut,
    fail,
    success,
    completed,
    hasActiveTransactions
  };
}
