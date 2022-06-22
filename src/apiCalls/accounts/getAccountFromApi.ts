import axios from 'axios';
import { apiAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { addressEndpoint } from 'apiCalls/endpoints';
import { AccountType } from 'types';

export async function getAccountFromApi(address?: string) {
  if (!address) {
    return null;
  }
  const apiAddress = apiAddressSelector(store.getState());
  const cleanApiAddress = apiAddress.endsWith('/')
    ? apiAddress.slice(0, -1)
    : apiAddress;

  const configUrl = `${cleanApiAddress}/${addressEndpoint}/${address}`;

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
