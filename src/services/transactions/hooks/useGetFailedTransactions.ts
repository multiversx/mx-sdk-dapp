import { useSelector } from 'redux/DappProviderContext';
import { failTransactionsSelector } from 'redux/selectors';
import {
  SignedTransactionsType,
  SignedTransactionsBodyType
} from 'types/transactions';

interface useGetFailedTransactionsReturnType {
  failTransactions: SignedTransactionsType;
  failTransactionsArray: [string, SignedTransactionsBodyType][];
  hasFailedTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetFailedTransactions(): useGetFailedTransactionsReturnType {
  const failTransactions = useSelector(failTransactionsSelector);
  const failTransactionsArray: [string, SignedTransactionsBodyType][] =
    Object.entries(failTransactions);
  const hasFailedTransactions = failTransactionsArray?.length > 0;
  return {
    failTransactions,
    failTransactionsArray,
    hasFailedTransactions
  };
}
