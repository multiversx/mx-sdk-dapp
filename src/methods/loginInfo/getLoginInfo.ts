import { getState } from 'store/store';
import { isLoggedInSelector } from '../../store/selectors/accountSelectors';
import { loginInfoSelector } from '../../store/selectors/loginInfoSelectors';

export const getLoginInfo = (state = getState()) => {
  return {
    ...loginInfoSelector(state),
    isLoggedIn: isLoggedInSelector(state)
  };
};
