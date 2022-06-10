import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const modalsSliceSelector = (state: RootState) => state.dappModal;

export const dappModalVisibilitySelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.visible
);

export const dappModalHeaderVisibilitySelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.modal.showHeader
);

export const dappModalFooterVisibilitySelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.modal.showFooter
);

export const dappModalHeaderTextSelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.modal.headerText
);

export const dappModalFooterTextSelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.modal.footerText
);

export const dappModalConfigSelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.modal
);
