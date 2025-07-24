import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';
import { axiosInstance } from 'apiCalls/utils/axiosInstance';

export const accountFetcher = (
  address: string | null,
  options?: { apiAddress?: string; headers?: Record<string, string> }
) => {
  const apiUrl = options?.apiAddress ?? getCleanApiAddress();
  const config = options?.headers ? { headers: options?.headers } : undefined;
  const url = `${apiUrl}/${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`;
  return axiosInstance.get(url, config);
};

export const getAccountFromApi = async (
  address?: string,
  options?: { apiAddress?: string; headers?: Record<string, string> }
) => {
  if (!address) {
    return null;
  }

  try {
    const { data } = await accountFetcher(address, options);
    return data;
  } catch (err) {
    console.error('error fetching configuration for ', address, err);
  }

  return null;
};
