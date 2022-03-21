import { PayloadAction } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import { getAccountProvider } from 'providers/accountProvider';
import { logoutAction } from 'redux/commonActions';
import {
  isLoggedInSelector,
  loginExpiresAtSelector
} from 'redux/selectors/loginInfoSelectors';
import { setLoginExpiresAt } from 'redux/slices/loginInfoSlice';
import { StoreType } from 'redux/store';
import { getNewLoginExpiresTimestamp } from 'utils/internal';

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
      return setTimeout(async () => {
        const provider = getAccountProvider();
        console.log('session expired');
        store.dispatch(logoutAction());
        try {
          await provider?.logout({ callbackUrl: '/' });
        } catch (err) {
          console.error('error logging out', err);
        }
      }, 1000);
    } else {
      throttledSetNewToken(store);
    }
    return next(action);
  };

export default loginSessionMiddleware;
