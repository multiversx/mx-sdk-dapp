import { chainIDSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getChainID() {
  return chainIDSelector(store.getState());
}
