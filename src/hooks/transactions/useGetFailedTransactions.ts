import { useSelector } from 'reduxStore/DappProviderContext';
import { failedTransactionsSelector } from 'reduxStore/selectors';
import { SignedTransactionsType, SignedTransactionsBodyType } from 'types';

export interface useGetFailedTransactionsReturnType {
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
