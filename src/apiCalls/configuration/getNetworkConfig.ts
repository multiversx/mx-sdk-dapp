import axios from 'axios';
import { BlockchainNetworkConfigType } from 'types';
import { networkConfigEndpoint } from 'apiCalls/endpoints';
import { apiAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export async function getNetworkConfigFromApi() {
  const apiAddress = apiAddressSelector(store.getState());
  const cleanApiAddress = apiAddress.endsWith('/')
    ? apiAddress.slice(0, -1)
    : apiAddress;

  const configUrl = `${cleanApiAddress}/${networkConfigEndpoint}`;

  try {
    const { data } = await axios.get<{
      data: { config: BlockchainNetworkConfigType };
    }>(configUrl);
    if (data != null) {
      return data?.data?.config;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
