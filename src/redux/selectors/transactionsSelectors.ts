import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const transactionsSelectors = (state: RootState) => state.transactions;

export const signStatusSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.signStatus
);

export const transactionsToSignSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.transactionsToSign
);
