import { createSelector } from 'reselect';
import { RootState } from '../store';

export const accountInfoSelector = (state: RootState) => state.account;

export const addressSelector = createSelector(
  accountInfoSelector,
  (state) => state.address
);

export const accountSelector = createSelector(
  accountInfoSelector,
  (state) => state.account
);

export const accountNonceSelector = createSelector(accountSelector, (state) =>
  state.nonce.valueOf()
);

export const shardSelector = createSelector(
  accountInfoSelector,
  (state) => state.shard
);

export const ledgerAccountSelector = createSelector(
  accountInfoSelector,
  (state) => state.ledgerAccount
);

export const walletConnectAccountSelector = createSelector(
  accountInfoSelector,
  (state) => state.walletConnectAccount
);
