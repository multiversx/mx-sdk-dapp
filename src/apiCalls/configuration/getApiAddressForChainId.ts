import { fallbackNetworkConfigurations } from 'constants/network';
import { getEnvironmentForChainId } from './getEnvironmentForChainId';

export function getApiAddressForChainId(chainId: string) {
  const environment = getEnvironmentForChainId(chainId);
  const apiAddress = fallbackNetworkConfigurations[environment].apiAddress;
  if (!apiAddress) {
    throw 'Could not extract api address for environment, check if you have a valid chainID';
  }
  return apiAddress;
}
