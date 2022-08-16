import { chainIDSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getChainID() {
  return chainIDSelector(getStore().getState());
}
