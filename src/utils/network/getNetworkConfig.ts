import { networkSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getNetworkConfig() {
  return networkSelector(getStore().getState());
}
