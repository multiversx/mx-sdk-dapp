import axios from 'axios';
import { configEndpoint } from 'constants/network';

export async function getServerConfiguration(environment: string) {
  try {
    const { data } = await axios.get(`${configEndpoint}?env=${environment}`);
    if (data != null) {
      return data;
    }
  } catch (err) {
    console.error('error fetching configuration for ', environment);
    return null;
  }
}
