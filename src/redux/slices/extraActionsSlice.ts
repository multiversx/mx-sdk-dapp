import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraActionsType } from 'types';

type ExtraActionsSliceState = ExtraActionsType;

const initialState: ExtraActionsSliceState = {
  extraSignTransactions: () => null,
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
