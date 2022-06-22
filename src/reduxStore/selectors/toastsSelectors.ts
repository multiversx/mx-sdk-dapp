import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const toastsSliceSelector = (state: RootState) => state.toasts;

export const customToastsSelector = createDeepEqualSelector(
  toastsSliceSelector,
  (state) => state.customToasts
);
