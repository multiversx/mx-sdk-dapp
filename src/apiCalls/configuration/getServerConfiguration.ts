import axios from 'axios';
import { NetworkType } from 'types';
import { apiAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { configEndpoint } from 'apiCalls/endpoints';

export async function getServerConfiguration(address?: string) {
  const apiAddress = address ?? apiAddressSelector(store.getState());
  const cleanApiAddress = apiAddress.endsWith('/')
    ? apiAddress.slice(0, -1)
    : apiAddress;

  const configUrl = `${cleanApiAddress}/${configEndpoint}`;

  try {
    const { data } = await axios.get<NetworkType>(configUrl);
    if (data != null) {
      return data;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
