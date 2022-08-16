import { isLoggedInSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getIsLoggedIn() {
  return isLoggedInSelector(getStore().getState());
}
