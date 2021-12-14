import { isLoggedInSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getIsLoggedIn() {
  return isLoggedInSelector(store.getState());
}
