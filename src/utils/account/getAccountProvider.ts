import { providerSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getAccountProvider() {
  return providerSelector(store.getState());
}
