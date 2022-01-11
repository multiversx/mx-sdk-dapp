import { apiProviderSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getApiProvider() {
  return apiProviderSelector(store.getState());
}
