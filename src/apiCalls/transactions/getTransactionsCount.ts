import axios from 'axios';
import { TRANSACTIONS_COUNT_ENDPOINT } from 'apiCalls/endpoints';
import {
  getTimeout,
  getTransactionsParams,
  GetTransactionsType
} from './helpers';

export const getTransactionsCount = (props: GetTransactionsType) => {
  const params = getTransactionsParams(props);
  return axios.get<number>(
    `${props.apiAddress}/${TRANSACTIONS_COUNT_ENDPOINT}`,
    {
      params,
      ...getTimeout(props.apiTimeout)
    }
  );
};
