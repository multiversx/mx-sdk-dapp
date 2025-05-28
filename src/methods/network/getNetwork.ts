import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

export function getNetwork(state = getState()) {
  return networkSelector(state);
}
