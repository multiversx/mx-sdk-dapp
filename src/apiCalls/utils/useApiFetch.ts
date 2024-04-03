import useSWR from 'swr';
import { axiosFetcher } from './axiosFetcher';
import { getCleanApiAddress } from './getCleanApiAddress';

export const useApiFetch = ({ apiEndpoint }: { apiEndpoint: string }) => {
  const apiAddress = getCleanApiAddress();
  const url = `${apiAddress}/${apiEndpoint}`;

  return useSWR(url, axiosFetcher);
};
