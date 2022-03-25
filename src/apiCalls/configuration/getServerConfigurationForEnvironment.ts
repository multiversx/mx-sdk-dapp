import axios from 'axios';
import { configEndpoint } from 'constants/network';
import { EnvironmentsEnum, NetworkType } from 'types';

export async function getServerConfigurationForEnvironment(
  environment: EnvironmentsEnum
) {
  try {
    const { data } = await axios.get<NetworkType>(configEndpoint[environment]);
    if (data != null) {
      return data;
    }
  } catch (err) {
    console.error('error fetching configuration for ', environment);
  }
  return null;
}
