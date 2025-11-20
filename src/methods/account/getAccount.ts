import { accountSelector } from 'store/selectors/accountSelectors';
import { getState } from 'store/store';

export function getAccount(state = getState()) {
  return accountSelector(state);
}
