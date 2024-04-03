import { Transaction } from '@multiversx/sdk-core';
import { useGetAccountFromApi } from 'apiCalls/accounts/useGetAccountFromApi';
import { useSelector } from 'reduxStore/DappProviderContext';
import { addressSelector } from 'reduxStore/selectors';
import { getLatestNonce } from 'utils/account/getLatestNonce';
import { computeTransactionsNonce } from './computeTransactionsNonce';

export const useSetTransactionNonces = () => {
  const address = useSelector(addressSelector);
  const { data: account } = useGetAccountFromApi(address);

  return (transactions: Transaction[]) => {
    const latestNonce = getLatestNonce(account);
    const transactionsWithIncrementalNonces = computeTransactionsNonce({
      latestNonce,
      transactions
    });

    return transactionsWithIncrementalNonces;
  };
};
