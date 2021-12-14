import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const toastsSliceSelector = (state: RootState) => state.toasts;

export const toastsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.toasts
);

export const toastSignSessionsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.toastSignSessions
);
export const transactionToastsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.transactionToasts
);
export const refetchSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.refetch
);
