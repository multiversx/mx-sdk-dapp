import axios from 'axios';
import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';

export const accountFetcher = (address: string | null) => {
  const apiAddress = getCleanApiAddress();
  const url = `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`;
  return axios.get(url);
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
