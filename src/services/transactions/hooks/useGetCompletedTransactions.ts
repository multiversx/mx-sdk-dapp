import { useSelector } from 'redux/DappProviderContext';
import { completedTransactionsSelector } from 'redux/selectors';
import {
  SignedTransactionsType,
  SignedTransactionsBodyType
} from 'types/transactions';

interface useGetCompletedTransactionsReturnType {
  completedTransactions: SignedTransactionsType;
  completedTransactionsArray: [string, SignedTransactionsBodyType][];
  hasCompletedTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetCompletedTransactions(): useGetCompletedTransactionsReturnType {
  const completedTransactions = useSelector(completedTransactionsSelector);
  const completedTransactionsArray: [string, SignedTransactionsBodyType][] =
    Object.entries(completedTransactions);
  const hasCompletedTransactions = completedTransactionsArray?.length > 0;
  return {
    completedTransactions,
    completedTransactionsArray,
    hasCompletedTransactions
  };
}
