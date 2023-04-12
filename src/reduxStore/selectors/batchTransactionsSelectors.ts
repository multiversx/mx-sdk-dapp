import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const batchTransactionsSelectors = (state: RootState) =>
  state.batchTransactions;

export const batchesSelector = createDeepEqualSelector(
  batchTransactionsSelectors,
  (state) => state
);
