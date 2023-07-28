import { useEffect } from 'react';
import useSwr from 'swr';

import { accountFetcher } from 'apiCalls/accounts/getAccountFromApi';

export const useGetAccountFromApi = (address: string | null) => {
  const { data, error, isLoading, isValidating, mutate } = useSwr(
    address,
    (address) => accountFetcher(address).then((response) => response.data),
    { revalidateOnFocus: false, revalidateOnMount: false }
  );

  const startFetchOnMount = () => {
    if (!data) {
      mutate();
    }
  };

  useEffect(startFetchOnMount, [data, mutate]);

  return {
    loading: isLoading || isValidating,
    error,
    account: data
  };
};
