import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraActionsType } from 'types';
import { emptyProvider } from 'utils/provider';

type ExtraActionsSliceState = ExtraActionsType;

const initialState: ExtraActionsSliceState = {
  log: () => null,
  getProvider: () => emptyProvider,
  init: () => null
};

export const extraActionsSlice = createSlice({
  name: 'extraActionsSlice',
  initialState,
  reducers: {
    initializeExtraActions: (
      state: ExtraActionsSliceState,
      action: PayloadAction<ExtraActionsSliceState>
    ) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { initializeExtraActions } = extraActionsSlice.actions;

export default extraActionsSlice.reducer;
