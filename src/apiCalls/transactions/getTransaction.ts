import axios from 'axios';
import { networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { ServerTransactionType } from 'types/serverTransactions';
import { TRANSACTIONS_ENDPOINT } from '../endpoints';

export const getTransactionsBuilder = (hash: string) => {
  const storeState = store.getState();
  const { apiAddress, apiTimeout } = networkSelector(storeState);

  return axios.get<ServerTransactionType[]>(
    `${apiAddress}/${TRANSACTIONS_ENDPOINT}/${hash}`,
    {
      timeout: parseInt(apiTimeout)
    }
  );
};
