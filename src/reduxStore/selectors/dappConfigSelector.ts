import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const dappConfigSelector = (state: RootState) => state.dappConfig;

export const shouldUseWebViewProviderSelector = createDeepEqualSelector(
  dappConfigSelector,
  (state) => state.shouldUseWebViewProvider
);
