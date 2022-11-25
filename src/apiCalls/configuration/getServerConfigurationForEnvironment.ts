import { fallbackNetworkConfigurations } from 'constants/network';
import { EnvironmentsEnum, NetworkType } from 'types';
import { getServerConfiguration } from './getServerConfiguration';

export interface GetServerConfigurationForEnvironmentOptionsType {
  apiAddress?: string;
}

export async function getServerConfigurationForEnvironment(
  environment: EnvironmentsEnum,
  options?: GetServerConfigurationForEnvironmentOptionsType
): Promise<NetworkType> {
  const fallbackConfig = fallbackNetworkConfigurations[environment];
  const serverApiAddress = options?.apiAddress ?? fallbackConfig.apiAddress;
  const config = await getServerConfiguration(serverApiAddress);

  return config !== null ? config : fallbackConfig;
}
