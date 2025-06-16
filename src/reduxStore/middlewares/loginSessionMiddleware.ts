import { PayloadAction } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import { LOGOUT_ACTION_NAME } from 'constants/index';
import { invalidateLoginSession } from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';
import { getNewLoginExpiresTimestamp, setLoginExpiresAt } from 'storage/local';
import { storage } from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';

const whitelistedActions = [LOGOUT_ACTION_NAME];
let invalidatedSession = false;

const throttledSetNewExpires = throttle(() => {
  setLoginExpiresAt(getNewLoginExpiresTimestamp());
}, 5000);

export const loginSessionMiddleware =
  (store: any) =>
  (next: (action: PayloadAction) => void) =>
  (action: PayloadAction) => {
    if (whitelistedActions.includes(action.type)) {
      return next(action);
    }

    const appState: RootState = store.getState();
    const loginTimestamp = storage.local.getItem(
      localStorageKeys.loginExpiresAt
    );

    const isLoggedIn = Boolean(appState?.account.address);

    if (!isLoggedIn) {
      return next(action);
    }

    if (loginTimestamp == null) {
      setLoginExpiresAt(getNewLoginExpiresTimestamp());
      return next(action);
    }

    // create a unique key for this account and it's allowed session
    const now = Date.now();
    const isExpired = loginTimestamp - now < 0;

    if (isExpired && !invalidatedSession) {
      setTimeout(() => {
        invalidatedSession = true;
        store.dispatch(invalidateLoginSession());
      }, 1000);
    } else {
      if (invalidatedSession) {
        invalidatedSession = false;
      }

      throttledSetNewExpires();
    }

    return next(action);
  };
