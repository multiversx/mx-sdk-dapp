import { getCleanApiAddress } from 'apiCalls/configuration/getCleanApiAddress';
import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getAccountSchema } from 'apiCalls/utils/apiResponseSchemas';
import { axiosInstance } from 'apiCalls/utils/axiosInstance';
import { validateApiResponse } from 'apiCalls/utils/validateApiResponse';
import { TIMEOUT } from 'constants/network.constants';
import { AccountType } from 'types/account.types';

export const accountFetcher = ({
  address,
  baseURL
}: {
  address: string | null;
  baseURL: string;
}) => {
  const apiAddress = getCleanApiAddress(baseURL);
  const url = `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`;
  // we need to get it with an axios instance because of cross-window user interaction issues
  return axiosInstance.get(url, {
    baseURL: apiAddress,
    timeout: TIMEOUT
  });
};

export const getAccountFromApi = async ({
  address,
  baseURL
}: {
  address?: string;
  baseURL: string;
}) => {
  if (!address) {
    return null;
  }

  try {
    const { data } = await accountFetcher({ address, baseURL });

    validateApiResponse({
      data,
      schema: getAccountSchema(address),
      source: ACCOUNTS_ENDPOINT
    });

    return data as AccountType;
  } catch (_err) {
    console.error('error fetching configuration for ', address);
  }

  return null;
};
