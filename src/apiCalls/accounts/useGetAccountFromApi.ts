import { ACCOUNTS_ENDPOINT } from '../endpoints';
import { useApiFetch } from '../utils';

export const useGetAccountFromApi = (address: string | null) =>
  useApiFetch({
    apiEndpoint: address
      ? `${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`
      : null
  });
