import { ServerTransactionType } from 'types/serverTransactions.types';
import { TRANSACTIONS_ENDPOINT } from '../endpoints';
import { getTimeout } from './helpers';
import { axiosInstance } from '../utils';

export interface GetTransactionType {
  apiAddress: string;
  apiTimeout?: string | number;
  hash: string;
}

export const getTransaction = ({
  hash,
  apiAddress,
  apiTimeout
}: GetTransactionType) => {
  return axiosInstance.get<ServerTransactionType[]>(
    `${apiAddress}/${TRANSACTIONS_ENDPOINT}/${hash}`,
    {
      ...getTimeout(apiTimeout)
    }
  );
};
