import axios from 'axios';
import { NetworkType } from 'types';
import { configEndpoint } from 'apiCalls/endpoints';

export async function getServerConfiguration(apiAddress: string) {
  const configUrl = `${apiAddress}/${configEndpoint}`;

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
