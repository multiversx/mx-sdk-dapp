import { addressSelector } from 'store/selectors';
import { getState } from 'store/store';

export function getAddress(state = getState()) {
  return addressSelector(state);
}
