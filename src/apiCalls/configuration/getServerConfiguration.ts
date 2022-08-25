import axios from 'axios';
import { CONFIG_ENDPOINT } from 'apiCalls/endpoints';
import { NetworkType } from 'types';

export async function getServerConfiguration(apiAddress: string) {
  const configUrl = `${apiAddress}/${CONFIG_ENDPOINT}`;

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
