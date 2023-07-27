import axios from 'axios';
import useSwr from 'swr';

import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import { apiAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export interface UseGetAccountFromApiOptionsType {
  shouldSkipFetching?: boolean;
}

export const useGetAccountFromApi = (
  address: string,
  options: UseGetAccountFromApiOptionsType
) => {
  const apiAddress = apiAddressSelector(store.getState());
  const accountEndpoint = options.shouldSkipFetching
    ? null
    : `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}`;

  const { data, error, isLoading, isValidating } = useSwr(
    accountEndpoint,
    (url) => axios.get(url).then((response) => response.data)
  );

  const dataLoadingFromLibrary = isLoading || isValidating;
  const isUsernameLoading = dataLoadingFromLibrary || (!error && !data);

  return {
    loading: isUsernameLoading && !options.shouldSkipFetching,
    error,
    account: data
  };
};
