import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

export function getEgldLabel(state = getState()) {
  return networkSelector(state).egldLabel;
}
