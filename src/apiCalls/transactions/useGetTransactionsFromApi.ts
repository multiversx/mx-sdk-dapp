import { useApiFetch } from '../utils';
import { TRANSACTIONS_ENDPOINT } from '../endpoints';

export const useGetTransactionsFromApi = (hash: string) =>
  useApiFetch({
    apiEndpoint: hash
      ? `${TRANSACTIONS_ENDPOINT}/${hash}`
      : TRANSACTIONS_ENDPOINT
  });
