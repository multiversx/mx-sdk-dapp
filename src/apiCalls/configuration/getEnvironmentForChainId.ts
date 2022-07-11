import { chainIdToEnvironment } from 'constants/network';

export function getEnvironmentForChainId(chainId: string) {
  return chainIdToEnvironment[chainId];
}
