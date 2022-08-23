import axios from 'axios';
import { networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { TransactionType } from 'types/server-transations';
import { TRANSACTIONS_ENDPOINT } from '../endpoints';

export const getTransactionsBuilder = (hash: string) => {
  const storeState = store.getState();
  const { apiAddress, apiTimeout } = networkSelector(storeState);

  return axios.get<TransactionType[]>(
    `${apiAddress}/${TRANSACTIONS_ENDPOINT}/${hash}`,
    {
      timeout: parseInt(apiTimeout)
    }
  );
};
