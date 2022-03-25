import axios from 'axios';
import { configEndpoint } from 'constants/network';
import { NetworkType } from 'types';

export async function getServerConfiguration(apiAddress: string) {
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
