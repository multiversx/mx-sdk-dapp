import { fallbackNetworkConfigurations } from 'constants/network';
import { EnvironmentsEnum, NetworkType } from 'types';
import { getServerConfiguration } from './getServerConfiguration';

export async function getServerConfigurationForEnvironment(
  environment: EnvironmentsEnum
): Promise<NetworkType> {
  const fallbackConfig = fallbackNetworkConfigurations[environment];
  const config = await getServerConfiguration(fallbackConfig.apiAddress);

  return config !== null ? config : fallbackConfig;
}
