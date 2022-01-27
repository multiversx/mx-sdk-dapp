import { createSelector } from 'reselect';
import { RootState } from '../store';

export const extraActionsSelector = (state: RootState) => state.extraActions;

export const extraSignTransactionsSelector = createSelector(
  extraActionsSelector,
  (state) => state.extraSignTransactions
);

export const extraLogSelector = createSelector(
  extraActionsSelector,
  (state) => state.extraLog
);
