import { useSelector } from 'redux/DappProviderContext';
import { failedTransactionsSelector } from 'redux/selectors';
import {
  SignedTransactionsType,
  SignedTransactionsBodyType
} from 'types/transactions';

interface useGetFailedTransactionsReturnType {
  failedTransactions: SignedTransactionsType;
  failedTransactionsArray: [string, SignedTransactionsBodyType][];
  hasFailedTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetFailedTransactions(): useGetFailedTransactionsReturnType {
  const failedTransactions = useSelector(failedTransactionsSelector);
  const failedTransactionsArray: [string, SignedTransactionsBodyType][] =
    Object.entries(failedTransactions);
  const hasFailedTransactions = failedTransactionsArray?.length > 0;
  return {
    failedTransactions,
    failedTransactionsArray,
    hasFailedTransactions
  };
}
