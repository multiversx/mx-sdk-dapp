import { RootState } from 'reduxStore/store';
import { addressSelector } from './accountInfoSelectors';
import { createDeepEqualSelector } from './helpers';

export const loginInfoSelector = (state: RootState) => state.loginInfo;

export const loginMethodSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.loginMethod
);

export const isLoggedInSelector = createDeepEqualSelector(
  loginInfoSelector,
  addressSelector,
  (_, address) => Boolean(address)
);

export const walletConnectLoginSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.walletConnectLogin
);

export const ledgerLoginSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.ledgerLogin
);

export const walletLoginSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.walletLogin
);

export const isLoginSessionInvalidSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.isLoginSessionInvalid
);

export const tokenLoginSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.tokenLogin
);

export const logoutRouteSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.logoutRoute
);

export const isWalletConnectV2InitializedSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.isWalletConnectV2Initialized
);
