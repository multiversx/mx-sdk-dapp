import { fallbackNetworkConfigurations } from 'constants/network';
import { EnvironmentsEnum, NetworkType } from 'types';
import { getServerConfiguration } from './getServerConfiguration';

export async function getServerConfigurationForEnvironment(
  environment: EnvironmentsEnum,
  apiAddress?: string
): Promise<NetworkType> {
  const fallbackConfig = fallbackNetworkConfigurations[environment];
  const serverApiAddress = apiAddress ?? fallbackConfig.apiAddress;
  const config = await getServerConfiguration(serverApiAddress);

  return config !== null ? config : fallbackConfig;
}
