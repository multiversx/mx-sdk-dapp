import axios from 'axios';
import { addressEndpoint } from 'apiCalls/endpoints';
import { AccountType } from 'types';
import { getCleanApiAddress } from 'apiCalls/utils';

export async function getAccountFromApi(address?: string) {
  if (!address) {
    return null;
  }
  const apiAddress = getCleanApiAddress();
  const configUrl = `${apiAddress}/${addressEndpoint}/${address}`;

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
