import { useSelector } from 'reduxStore/DappProviderContext';
import { signedTransactionsSelector } from 'reduxStore/selectors';

import {
  SignedTransactionsType,
  SignedTransactionsBodyType
} from '../../types';

export interface useGetSignedTransactionsReturnType {
  signedTransactions: SignedTransactionsType;
  signedTransactionsArray: [string, SignedTransactionsBodyType][];
  hasSignedTransactions: boolean;
}

export function useGetSignedTransactions(): useGetSignedTransactionsReturnType {
  const signedTransactions = useSelector(signedTransactionsSelector);
  const signedTransactionsArray: [string, SignedTransactionsBodyType][] =
    Object.entries(signedTransactions);
  const hasSignedTransactions = signedTransactionsArray?.length > 0;
  return {
    signedTransactions,
    signedTransactionsArray,
    hasSignedTransactions
  };
}
