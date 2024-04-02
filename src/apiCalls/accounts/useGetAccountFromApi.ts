import { useApiFetch } from '../utils';
import { ACCOUNTS_ENDPOINT } from '../endpoints';

export const useGetAccountFromApi = (address: string | null) =>
  useApiFetch({
    apiEndpoint: `${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`
  });
