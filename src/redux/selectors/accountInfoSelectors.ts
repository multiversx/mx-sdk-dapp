import { RootState } from '../store';
import { createSelector } from 'reselect';

export const accountInfoSelector = (state: RootState) => state.account;

export const addressSelector = createSelector(
  accountInfoSelector,
  (state) => state.address
);

export const accountSelector = createSelector(
  accountInfoSelector,
  (state) => state.account
);

export const shardSelector = createSelector(
  accountInfoSelector,
  (state) => state.shard
);
