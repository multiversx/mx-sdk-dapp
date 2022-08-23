import axios from 'axios';
import { ADDRESS_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';
import { AccountType } from 'types';

export async function getAccountFromApi(address?: string) {
  if (!address) {
    return null;
  }
  const apiAddress = getCleanApiAddress();
  const configUrl = `${apiAddress}/${ADDRESS_ENDPOINT}/${address}`;

  try {
    const { data } = await axios.get<{ data: { account: AccountType } }>(
      configUrl
    );
    if (data != null) {
      return data?.data?.account;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
