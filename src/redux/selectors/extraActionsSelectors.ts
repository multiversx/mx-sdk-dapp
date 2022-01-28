import { createSelector } from 'reselect';
import { RootState } from '../store';

export const extraActionsSelector = (state: RootState) => state.extraActions;

export const extraSignTransactionsSelector = createSelector(
  extraActionsSelector,
  (state) => state.extraSignTransactions
);

export const extraActionsInit = createSelector(
  extraActionsSelector,
  (state) => state.init
);
