import { networkStore } from 'lib/sdkDappCore';

export function getNetworkConfig() {
  return networkStore.getState();
}
