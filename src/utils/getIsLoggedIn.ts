import { store } from 'redux/store';
import { isLoggedInSelector } from '../redux/selectors';

export function getIsLoggedIn() {
  return isLoggedInSelector(store.getState());
}
