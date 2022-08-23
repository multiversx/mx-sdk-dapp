import axios from 'axios';
import { TransactionType } from 'components/TransactionsInterpreter/helpers/types';
import { addressSelector, networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import {
  TRANSACTIONS_ENDPOINT,
  TRANSACTIONS_COUNT_ENDPOINT
} from '../endpoints';

interface GetTransactionsType {
  sender?: string;
  receiver?: string;
  page?: number;
  transactionSize?: number;
  after?: number;
  condition?: 'should' | 'must';
  before?: number;
  withScResults?: boolean;
}

const getTxs = (
  route: typeof TRANSACTIONS_ENDPOINT | typeof TRANSACTIONS_COUNT_ENDPOINT
) => ({
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

  return axios.get<TransactionType[]>(`${apiAddress}/${route}`, {
    params,
    timeout: parseInt(apiTimeout)
  });
};

export const getTransactions = getTxs(TRANSACTIONS_ENDPOINT);
export const getTransactionsCount = getTxs(TRANSACTIONS_COUNT_ENDPOINT);
