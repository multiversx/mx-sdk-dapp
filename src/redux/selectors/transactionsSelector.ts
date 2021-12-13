import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const transactionsSelector = (state: RootState) => state.transactions;

export const signStatusSelector = createDeepEqualSelector(
  transactionsSelector,
  (state) => state.signStatus
);

export const transactionsToSignSelector = createDeepEqualSelector(
  transactionsSelector,
  (state) => state.transactionsToSign
);
