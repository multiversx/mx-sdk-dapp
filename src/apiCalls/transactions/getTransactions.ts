import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { GetTransactionsType } from './getTransactions.types';
import { getTimeout, getTransactionsParams } from './helpers';
import { axiosInstance } from '../utils';

export const getTransactions = (props: GetTransactionsType) => {
  const params = getTransactionsParams(props);
  return axiosInstance.get(`${props.apiAddress}/${TRANSACTIONS_ENDPOINT}`, {
    params,
    ...getTimeout(props.apiTimeout)
  });
};
