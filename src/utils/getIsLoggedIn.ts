import { store } from 'redux/store';
import { isLoggedInSelector } from '../redux/selectors';

export function getIsLoggedIn() {
  console.log(isLoggedInSelector(store.getState()), 'inside the selector');
  return isLoggedInSelector(store.getState());
}
