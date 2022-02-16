import { useSelector } from 'redux/DappProviderContext';
import {
  completedTransactionsSelector,
  failTransactionsSelector,
  pendingSignedTransactionsSelector,
  signedTransactionsSelector,
  successTransactionsSelector,
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
  const failTransactions = useSelector(failTransactionsSelector);
  const successTransactions = useSelector(successTransactionsSelector);
  const pendingTransactions = useSelector(pendingSignedTransactionsSelector);
  const completedTransactions = useSelector(completedTransactionsSelector);

  const pending = Object.keys(pendingTransactions)?.length > 0;

  const timedOut = !pending && Object.keys(timedOutTransactions)?.length > 0;

  const fail =
    !pending && !timedOut && Object.keys(failTransactions)?.length > 0;

  const success =
    !pending &&
    !timedOut &&
    !fail &&
    Object.keys(successTransactions).length > 0;

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
