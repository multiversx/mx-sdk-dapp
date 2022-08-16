import { chainIDSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export function getChainID() {
  return chainIDSelector(store.getState());
}
