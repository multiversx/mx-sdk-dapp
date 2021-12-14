import { createSelector } from 'reselect';
import { loginMethodsEnum } from '../../types/enums';
import { RootState } from '../store';

export const loginInfoSelector = (state: RootState) => state.loginInfo;

export const loginMethodSelector = createSelector(
  loginInfoSelector,
  (state) => state.loginMethod
);

export const isLoggedInSelector = createSelector(
  loginInfoSelector,
  (state) => state.loginMethod != loginMethodsEnum.none
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

export const extensionLoginSelector = createSelector(
  loginInfoSelector,
  (state) => state.extensionLogin
);
