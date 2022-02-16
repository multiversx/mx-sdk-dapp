import { useSelector } from 'redux/DappProviderContext';
import { successTransactionsSelector } from 'redux/selectors';
import {
  SignedTransactionsType,
  SignedTransactionsBodyType
} from 'types/transactions';

interface useGetSuccessfulTransactionsReturnType {
  successTransactions: SignedTransactionsType;
  successTransactionsArray: [string, SignedTransactionsBodyType][];
  hasSuccessfulTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetSuccessfulTransactions(): useGetSuccessfulTransactionsReturnType {
  const successTransactions = useSelector(successTransactionsSelector);
  const successTransactionsArray: [string, SignedTransactionsBodyType][] =
    Object.entries(successTransactions);
  const hasSuccessfulTransactions = successTransactionsArray?.length > 0;
  return {
    successTransactions,
    successTransactionsArray,
    hasSuccessfulTransactions
  };
}
