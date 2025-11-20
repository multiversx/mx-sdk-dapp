import { addressSelector } from 'store/selectors/accountSelectors';
import { getState } from 'store/store';

export function getAddress(state = getState()) {
  return addressSelector(state);
}
