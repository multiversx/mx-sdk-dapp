import { createSelector } from 'reselect';
import { LoginMethodsEnum } from 'types/enums';
import { RootState } from '../store';
import { addressSelector } from './accountInfoSelectors';

export const loginInfoSelector = (state: RootState) => state.loginInfo;

export const loginMethodSelector = createSelector(
  loginInfoSelector,
  (state) => state.loginMethod
);

export const isLoggedInSelector = createSelector(
  loginInfoSelector,
  addressSelector,
  (state, address) =>
    state.loginMethod != LoginMethodsEnum.none && Boolean(address)
);

export const walletConnectLoginSelector = createSelector(
  loginInfoSelector,
  (state) => state.walletConnectLogin
);

export const ledgerLoginSelector = createSelector(
  loginInfoSelector,
  (state) => state.ledgerLogin
);

export const walletLoginSelector = createSelector(
  loginInfoSelector,
  (state) => state.walletLogin
);
