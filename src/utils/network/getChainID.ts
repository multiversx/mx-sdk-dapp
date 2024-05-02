import { networkStore } from 'lib/sdkDappCore';

export function getChainID() {
  return networkStore.getState().network.chainId;
}
