import { accountProviderSelector } from 'reduxStore/selectors/providersSelectors';
import { store } from 'reduxStore/store';

export function getAccountProvider() {
  return accountProviderSelector(store.getState());
}
