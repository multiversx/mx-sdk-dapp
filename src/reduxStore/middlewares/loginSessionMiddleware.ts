import { PayloadAction } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import { getNewLoginExpiresTimestamp, setLoginExpiresAt } from 'storage/local';
import storage from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';
import { logoutActionName } from 'constants/index';
import { invalidateLoginSession } from 'reduxStore/slices';

const whitelistedActions = [logoutActionName];

const throttledSetNewExpires = throttle(() => {
  setLoginExpiresAt(getNewLoginExpiresTimestamp());
}, 5000);

export const loginSessionMiddleware: any = (store: any) => (
  next: (action: PayloadAction) => void
) => (action: PayloadAction) => {
  if (whitelistedActions.includes(action.type)) {
    return next(action);
  }
  const appState = store.getState();
  const loginTimestamp = storage.local.getItem(localStorageKeys.loginExpiresAt);
  const isLoggedIn = appState?.loginInfo?.isLoggedIn;
  if (!isLoggedIn) {
    return next(action);
  }
  if (loginTimestamp == null) {
    return setLoginExpiresAt(getNewLoginExpiresTimestamp());
  }
  const now = Date.now();
  const isExpired = loginTimestamp - now < 0;
  if (isExpired) {
    return setTimeout(async () => {
      console.log('session expired');
      try {
        store.dispatch(invalidateLoginSession(true));
      } catch (err) {
        console.error('error logging out', err);
      }
    }, 1000);
  } else {
    throttledSetNewExpires();
  }
  return next(action);
};

export default loginSessionMiddleware;
