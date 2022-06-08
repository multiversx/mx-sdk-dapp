import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const modalsSliceSelector = (state: RootState) => state.awesomeModals;

export const awesomeModalVisibilitySelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.visible
);
