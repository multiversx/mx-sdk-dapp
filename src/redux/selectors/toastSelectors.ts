import { TransactionToastType } from 'types/toasts';
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

export const transactionToastSelector = createDeepEqualSelector(
  transactionToastsSelector,
  (_: RootState, transactionSessionId: string | null) => transactionSessionId,
  (
    transactionToasts: TransactionToastType[],
    transactionSessionId: string | null
  ) =>
    transactionSessionId != null
      ? transactionToasts?.find(
          (item) => item.toastSignSession === transactionSessionId
        ) || {}
      : {}
);

export const toastsProgressSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.toastProgress
);
