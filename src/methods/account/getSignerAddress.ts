import { signerAddressSelector } from 'store/selectors/accountSelectors';
import { getState } from 'store/store';

export function getSignerAddress(state = getState()) {
  return signerAddressSelector(state);
}
