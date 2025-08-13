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
let invalidationTimer: NodeJS.Timeout | null = null;

const throttledSetNewExpires = throttle(() => {
  setLoginExpiresAt(getNewLoginExpiresTimestamp());
}, 5000);

const clearInvalidationTimer = () => {
  if (invalidationTimer) {
    clearTimeout(invalidationTimer);
    invalidationTimer = null;
  }
};

const scheduleInvalidation = (store: any) => {
  // Clear any existing timer to prevent multiple dispatches
  clearInvalidationTimer();

  // Set atomic state immediately to prevent race conditions
  invalidatedSession = true;

  // Schedule the dispatch with debounce
  invalidationTimer = setTimeout(() => {
    store.dispatch(invalidateLoginSession());
    invalidationTimer = null;
  }, 1000);
};

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
      scheduleInvalidation(store);
    } else {
      if (invalidatedSession) {
        // Clear the timer and reset state when session is valid
        clearInvalidationTimer();
        invalidatedSession = false;
      }

      throttledSetNewExpires();
    }

    return next(action);
  };
