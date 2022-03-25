import { fallbackNetworkConfigurations } from 'constants/network';
import { EnvironmentsEnum } from 'types';
import { getServerConfiguration } from './getServerConfiguration';

export async function getServerConfigurationForEnvironment(
  environment: EnvironmentsEnum
) {
  const fallbackConfig = fallbackNetworkConfigurations[environment];
  const config = await getServerConfiguration(fallbackConfig.apiAddress);

  return config !== null ? config : fallbackConfig;
}
