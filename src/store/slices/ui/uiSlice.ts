import { StateCreator } from 'zustand/vanilla';
import { StoreType, MutatorsIn } from 'store/store.types';
import { UiSliceType } from './ui.types';

const initialState: UiSliceType = {
  isSidePanelOpen: false
};

function getUiSlice(): StateCreator<StoreType, MutatorsIn, [], UiSliceType> {
  return () => initialState;
}

export const uiSlice = getUiSlice();
