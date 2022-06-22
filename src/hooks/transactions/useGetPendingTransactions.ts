import { useSelector } from 'reduxStore/DappProviderContext';
import { pendingSignedTransactionsSelector } from 'reduxStore/selectors';
import { SignedTransactionsType, SignedTransactionsBodyType } from 'types';

interface UseGetPendingTransactionsReturnType {
  pendingTransactions: SignedTransactionsType;
  pendingTransactionsArray: [string, SignedTransactionsBodyType][];
  hasPendingTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetPendingTransactions(): UseGetPendingTransactionsReturnType {
  const pendingTransactions = useSelector(pendingSignedTransactionsSelector);
  const pendingTransactionsArray: [
    string,
    SignedTransactionsBodyType
  ][] = Object.entries(pendingTransactions);
  const hasPendingTransactions = pendingTransactionsArray?.length > 0;
  return {
    pendingTransactions,
    pendingTransactionsArray,
    hasPendingTransactions
  };
}
