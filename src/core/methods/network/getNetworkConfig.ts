import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';

export function getNetworkConfig(state = getState()) {
  return networkSelector(state);
}
