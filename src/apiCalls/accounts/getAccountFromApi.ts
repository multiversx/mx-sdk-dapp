import { axiosInstance } from 'apiCalls/axiosInstance';
import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';
import { AccountType } from 'types';

export const accountFetcher = (address: string | null) => {
  const apiAddress = getCleanApiAddress();
  const url = `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`;
  return axiosInstance.get<AccountType>(url);
};

export async function getAccountFromApi(address?: string) {
  if (!address) {
    return null;
  }

  try {
    const { data } = await accountFetcher(address);
    return data;
  } catch (err) {
    console.error('error fetching configuration for ', address);
  }
  return null;
}
