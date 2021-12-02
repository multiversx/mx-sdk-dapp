import { RootState } from '../store';
import { createSelector } from 'reselect';

export const loginInfoSelector = (state: RootState) => state.loginInfo;

export const loginMethodSelector = createSelector(
  loginInfoSelector,
  (state) => state.loginMethod
);

export const walletConnectLoginSelector = createSelector(
  loginInfoSelector,
  (state) => state.walletConnectLogin
);

export const ledgerLoginSelector = createSelector(
  loginInfoSelector,
  (state) => state.ledgerLogin
);
