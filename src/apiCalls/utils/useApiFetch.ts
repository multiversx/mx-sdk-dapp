import { getCleanApiAddress } from './getCleanApiAddress';
import useSWR from 'swr';
import { axiosFetcher } from './axiosFetcher';

export const useApiFetch = ({ apiEndpoint }: { apiEndpoint: string }) => {
  const apiAddress = getCleanApiAddress();
  const url = `${apiAddress}/${apiEndpoint.replaceAll('/', '')}`;
  return useSWR(url, axiosFetcher);
};
