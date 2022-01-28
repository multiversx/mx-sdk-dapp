import { PayloadAction } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import { isLoggedInSelector, loginExpiresAtSelector } from 'redux/selectors';
import { setLoginExpiresAt } from 'redux/slices';
import { StoreType } from 'redux/store';
import { getNewLoginExpiresTimestamp } from 'utils/internal';
import { logout } from 'utils/logout';

const whitelistedActions = ['loginInfoSlice/setLoginExpiresAt', 'logout'];

const throttledSetNewToken = throttle((store: StoreType) => {
  store.dispatch(setLoginExpiresAt(getNewLoginExpiresTimestamp()));
}, 5000);

export const loginSessionMiddleware: any =
  (store: StoreType) =>
  (next: (action: PayloadAction) => void) =>
  (action: PayloadAction) => {
    if (whitelistedActions.includes(action.type)) {
      return next(action);
    }
    const appState = store.getState();
    const loginTimestamp = loginExpiresAtSelector(appState);
    const isLoggedIn = isLoggedInSelector(appState);
    if (!isLoggedIn) {
      return next(action);
    }
    if (loginTimestamp == null) {
      return store.dispatch(setLoginExpiresAt(getNewLoginExpiresTimestamp()));
    }
    const now = Date.now();
    const isExpired = loginTimestamp - now < 0;
    if (isExpired) {
      return setTimeout(logout, 1000);
    } else {
      throttledSetNewToken(store);
    }
    return next(action);
  };

export default loginSessionMiddleware;
