import { isLoggedInSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export function getIsLoggedIn() {
  return isLoggedInSelector(store.getState());
}
