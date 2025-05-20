import { isLoggedInSelector } from 'store/selectors/accountSelectors';
import { getState } from 'store/store';

export function getIsLoggedIn(state = getState()) {
  return isLoggedInSelector(state);
}
