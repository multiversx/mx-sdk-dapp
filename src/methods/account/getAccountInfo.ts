import { accountInfoSelector } from 'store/selectors/accountSelectors';
import { getState } from 'store/store';

export function getAccountInfo(state = getState()) {
  return accountInfoSelector(state);
}
