import { ACCOUNTS_ENDPOINT } from '../endpoints';
import { useApiFetch } from '../utils';

export const useGetAccountFromApi = (address: string | null) => {
  if (!address) {
    return {
      data: null,
      isLoading: false,
      error: false,
      isValidating: false
    };
  }

  return useApiFetch({
    apiEndpoint: `${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`
  });
};
