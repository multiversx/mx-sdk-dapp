import { networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export function getNetworkConfig() {
  return networkSelector(store.getState());
}
