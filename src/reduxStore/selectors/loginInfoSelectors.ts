import { RootState } from 'reduxStore/store';
import { addressSelector } from './accountInfoSelectors';
import { createDeepEqualSelector, deriveIsLoggedIn } from './helpers';

export const loginInfoSelector = (state: RootState) => state.loginInfo;

export const loginMethodSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.loginMethod
);

export const isLoggedInSelector = createDeepEqualSelector(
  loginInfoSelector,
  addressSelector,
  (state, address) => deriveIsLoggedIn(state.loginMethod, address)
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
