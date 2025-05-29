import { networkConfigSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

export function getNetworkConfig(state = getState()) {
  return networkConfigSelector(state);
}
