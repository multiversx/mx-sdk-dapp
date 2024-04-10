import { TRANSACTIONS_ENDPOINT } from '../endpoints';
import { useApiFetch } from '../utils';

export const useGetTransactionsFromApi = (hash: string) =>
  useApiFetch({
    apiEndpoint: hash
      ? `${TRANSACTIONS_ENDPOINT}/${hash}`
      : TRANSACTIONS_ENDPOINT
  });
