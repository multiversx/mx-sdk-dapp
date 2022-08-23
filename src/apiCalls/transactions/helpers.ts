import axios from 'axios';
import { addressSelector, networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { TransactionType } from 'types/server-transations';
import {
  TRANSACTIONS_ENDPOINT,
  TRANSACTIONS_COUNT_ENDPOINT
} from '../endpoints';

export interface GetTransactionsType {
  sender?: string;
  receiver?: string;
  page?: number;
  transactionSize?: number;
  after?: number;
  condition?: 'should' | 'must';
  before?: number;
  withScResults?: boolean;
}

export const getTransactionsBuilder = (isCount?: boolean) => ({
  sender,
  receiver,
  page = 1,
  transactionSize = 15,
  condition = 'should',
  withScResults = true,
  after,
  before
}: GetTransactionsType) => {
  const storeState = store.getState();
  const address = addressSelector(storeState);
  const { apiAddress, apiTimeout } = networkSelector(storeState);

  const params = {
    sender: sender ?? address,
    receiver: receiver ?? address,
    condition,
    after,
    before,
    from: (page - 1) * transactionSize,
    ...(transactionSize > 0 ? { size: transactionSize } : {}),
    withScResults
  };

  if (isCount) {
    return axios.get<number>(`${apiAddress}/${TRANSACTIONS_COUNT_ENDPOINT}`, {
      params,
      timeout: parseInt(apiTimeout)
    });
  }

  return axios.get<TransactionType[]>(
    `${apiAddress}/${TRANSACTIONS_ENDPOINT}`,
    {
      params,
      timeout: parseInt(apiTimeout)
    }
  );
};
