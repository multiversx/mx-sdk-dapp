import { TRANSACTIONS_COUNT_ENDPOINT } from 'apiCalls/endpoints';
import { GetTransactionsType } from './getTransactions.types';
import { getTimeout, getTransactionsParams } from './helpers';
import { axiosInstance } from '../utils';

export const getTransactionsCount = (props: GetTransactionsType) => {
  const params = getTransactionsParams(props);
  return axiosInstance.get<number>(
    `${props.apiAddress}/${TRANSACTIONS_COUNT_ENDPOINT}`,
    {
      params,
      ...getTimeout(props.apiTimeout)
    }
  );
};
