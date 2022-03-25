import { fallbackNetworkConfigurations } from 'constants/network';
import { EnvironmentsEnum } from 'types';
import { getServerConfiguration } from './getServerConfiguration';

export async function getServerConfigurationForEnvironment(
  environment: EnvironmentsEnum
) {
  const { apiAddress } = fallbackNetworkConfigurations[environment];
  return await getServerConfiguration(apiAddress);
}
