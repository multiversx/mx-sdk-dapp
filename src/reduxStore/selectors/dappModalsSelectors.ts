import { RootState } from 'reduxStore/store';
import { createDeepEqualSelector } from './helpers';

export const modalsSliceSelector = (state: RootState) => state.dappModal;

export const dappModalVisibilitySelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.visible
);

export const dappModalConfigSelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.modal
);

export const dappModalHeaderVisibilitySelector = createDeepEqualSelector(
  dappModalConfigSelector,
  (state) => state.showHeader
);

export const dappModalFooterVisibilitySelector = createDeepEqualSelector(
  dappModalConfigSelector,
  (state) => state.showFooter
);

export const dappModalHeaderTextSelector = createDeepEqualSelector(
  dappModalConfigSelector,
  (state) => state.headerText
);

export const dappModalFooterTextSelector = createDeepEqualSelector(
  dappModalConfigSelector,
  (state) => state.footerText
);
