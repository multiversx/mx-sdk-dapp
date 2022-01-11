import { networkSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getNetworkConfig() {
  return networkSelector(store.getState());
}
