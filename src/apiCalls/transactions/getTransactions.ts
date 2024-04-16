import axios from 'axios';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { ServerTransactionType } from 'types';
import { GetTransactionsType } from './getTransactions.types';
import { getTimeout, getTransactionsParams } from './helpers';

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
