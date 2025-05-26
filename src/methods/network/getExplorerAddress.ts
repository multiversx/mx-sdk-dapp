import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';

export function getExplorerAddress(state = getState()) {
  return networkSelector(state).explorerAddress;
}
