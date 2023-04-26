import axios from 'axios';
import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';
import { AccountType } from 'types';

export async function getAccountFromApi(address?: string) {
  if (!address) {
    return null;
  }
  const apiAddress = getCleanApiAddress();
  const configUrl = `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}?withGuardianInfo=true`;

  try {
    const { data } = await axios.get<AccountType>(configUrl);
    return data;
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
