import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const toastsSliceSelector = (state: RootState) => state.toasts;

export const customToastsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.customToasts
);

export const iconToastsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.iconToasts
);

export const transactionToastsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.transactionToasts
);

export const failTransactionToastSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.failTransactionToast
);
