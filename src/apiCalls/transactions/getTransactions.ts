import axios from 'axios';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { ServerTransactionType } from 'types';
import {
  getTimeout,
  getTransactionsParams,
  GetTransactionsType
} from './helpers';

export const getTransactions = (props: GetTransactionsType) => {
  const params = getTransactionsParams(props);
  return axios.get<ServerTransactionType[]>(
    `${props.apiAddress}/${TRANSACTIONS_ENDPOINT}`,
    {
      params,
      ...getTimeout(props.apiTimeout)
    }
  );
};
