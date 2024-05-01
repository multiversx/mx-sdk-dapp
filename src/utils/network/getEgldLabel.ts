import { networkStore } from 'lib/sdkDappCore';

export function getEgldLabel() {
  return networkStore.getState().network.egldLabel;
}
