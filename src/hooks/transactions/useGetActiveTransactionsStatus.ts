import { useSelector } from 'reduxStore/DappProviderContext';
import {
  failedTransactionsSelector,
  pendingSignedTransactionsSelector,
  successfulTransactionsSelector,
  timedOutTransactionsSelector
} from 'reduxStore/selectors';

interface UseGetActiveTransactionsStatusReturnType {
  timedOut: boolean;
  fail: boolean;
  success: boolean;
  pending: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetActiveTransactionsStatus(): UseGetActiveTransactionsStatusReturnType {
  const timedOutTransactions = useSelector(timedOutTransactionsSelector);
  const failedTransactions = useSelector(failedTransactionsSelector);
  const successfulTransactions = useSelector(successfulTransactionsSelector);
  const pendingTransactions = useSelector(pendingSignedTransactionsSelector);

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
