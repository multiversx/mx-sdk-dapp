import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const providersSliceSelector = (state: RootState) => state.providers;

export const accountProviderSelector = createDeepEqualSelector(
  providersSliceSelector,
  (state) => state.accountProvider
);
