import { LoginMethodsEnum } from 'types/enums';
import { addressSelector } from './accountInfoSelectors';
import { createDeepEqualSelector } from './helpers';

export const loginInfoSelector = (state: any) => state.loginInfo;

export const loginMethodSelector = createDeepEqualSelector(
  loginInfoSelector,
  (state) => state.loginMethod
);

export const isLoggedInSelector = createDeepEqualSelector(
  loginInfoSelector,
  addressSelector,
  (state, address) =>
    state.loginMethod != LoginMethodsEnum.none && Boolean(address)
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
