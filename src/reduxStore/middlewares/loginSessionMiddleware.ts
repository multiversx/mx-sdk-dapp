import { PayloadAction } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import { LOGOUT_ACTION_NAME } from 'constants/index';
import { deriveIsLoggedIn } from 'reduxStore/selectors/helpers';
import { invalidateLoginSession } from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';
import { getIsTokenExpired } from 'services/nativeAuth/methods';
import { getNewLoginExpiresTimestamp, setLoginExpiresAt } from 'storage/local';
import { storage } from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';

const whitelistedActions = [LOGOUT_ACTION_NAME];

const throttledSetNewExpires = throttle(() => {
  setLoginExpiresAt(getNewLoginExpiresTimestamp());
}, 5000);

export const loginSessionMiddleware: any = (store: any) => (
  next: (action: PayloadAction) => void
) => (action: PayloadAction) => {
  if (whitelistedActions.includes(action.type)) {
    return next(action);
  }
  const appState: RootState = store.getState();
  const loginTimestamp = storage.local.getItem(localStorageKeys.loginExpiresAt);
  const isLoggedIn = deriveIsLoggedIn(
    appState?.loginInfo?.loginMethod,
    appState?.account.address
  );
  if (!isLoggedIn) {
    return next(action);
  }
  if (loginTimestamp == null) {
    return setLoginExpiresAt(getNewLoginExpiresTimestamp());
  }

  const nativeAuthToken = appState.loginInfo.tokenLogin?.nativeAuthToken;
  const isNativeAuthTokenExpired = getIsTokenExpired(nativeAuthToken);

  if (isNativeAuthTokenExpired) {
    return setLoginExpiresAt(getNewLoginExpiresTimestamp());
  }

  const now = Date.now();
  const isExpired = loginTimestamp - now < 0;
  if (isExpired) {
    return setTimeout(async () => {
      console.log('session expired');
      try {
        store.dispatch(invalidateLoginSession());
      } catch (err) {
        console.error('error logging out', err);
      }
    }, 1000);
  } else {
    throttledSetNewExpires();
  }
  return next(action);
};

// import { PayloadAction } from '@reduxjs/toolkit';
// import throttle from 'lodash.throttle';
// import { LOGOUT_ACTION_NAME } from 'constants/index';
// import { isLoggedInSelector } from 'reduxStore/selectors';
// // import { isLoggedInSelector, tokenLoginSelector } from 'reduxStore/selectors';
// import { invalidateLoginSession } from 'reduxStore/slices';
// import { RootState } from 'reduxStore/store';
// import { getNewLoginExpiresTimestamp, setLoginExpiresAt } from 'storage/local';
// import { storage } from 'utils/storage';
// import { localStorageKeys } from 'utils/storage/local';

// const whitelistedActions = [LOGOUT_ACTION_NAME];

// const throttledSetNewExpires = throttle(() => {
//   setLoginExpiresAt(getNewLoginExpiresTimestamp());
// }, 5000);

// export const loginSessionMiddleware: any = (store: any) => (
//   next: (action: PayloadAction) => void
// ) => (action: PayloadAction) => {
//   if (whitelistedActions.includes(action.type)) {
//     return next(action);
//   }
//   const appState: RootState = store.getState();
//   const loginTimestamp = storage.local.getItem(localStorageKeys.loginExpiresAt);
//   const isLoggedIn = isLoggedInSelector(appState);
//   // const nativeAuthToken = tokenLoginSelector(appState)?.nativeAuthToken;

//   if (!isLoggedIn) {
//     return next(action);
//   }
//   if (loginTimestamp == null) {
//     return setLoginExpiresAt(getNewLoginExpiresTimestamp());
//   }
//   const now = Date.now();
//   const isExpired = loginTimestamp - now < 0;

//   if (isExpired) {
//     return setTimeout(async () => {
//       console.log('session expired');
//       try {
//         store.dispatch(invalidateLoginSession());
//       } catch (err) {
//         console.error('error logging out', err);
//       }
//     }, 1000);
//   } else {
//     throttledSetNewExpires();
//   }

//   return next(action);
// };
