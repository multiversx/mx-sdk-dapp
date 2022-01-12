import { proxySelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getNetworkProxy() {
  return proxySelector(store.getState());
}
