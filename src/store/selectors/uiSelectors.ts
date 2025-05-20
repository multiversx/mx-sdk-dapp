import { StoreType } from 'store/store.types';

export const uiSelector = ({ ui }: StoreType) => ui;

export const isSidePanelOpenSelector = ({ ui }: StoreType) =>
  ui.isSidePanelOpen;
