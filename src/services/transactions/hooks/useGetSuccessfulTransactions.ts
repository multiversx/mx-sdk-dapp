import { useSelector } from 'redux/DappProviderContext';
import { successfulTransactionsSelector } from 'redux/selectors';
import {
  SignedTransactionsType,
  SignedTransactionsBodyType
} from 'types/transactions';

interface useGetSuccessfulTransactionsReturnType {
  successfulTransactions: SignedTransactionsType;
  successfulTransactionsArray: [string, SignedTransactionsBodyType][];
  hasSuccessfulTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetSuccessfulTransactions(): useGetSuccessfulTransactionsReturnType {
  const successfulTransactions = useSelector(successfulTransactionsSelector);
  const successfulTransactionsArray: [string, SignedTransactionsBodyType][] =
    Object.entries(successfulTransactions);
  const hasSuccessfulTransactions = successfulTransactionsArray?.length > 0;
  return {
    successfulTransactions,
    successfulTransactionsArray,
    hasSuccessfulTransactions
  };
}
