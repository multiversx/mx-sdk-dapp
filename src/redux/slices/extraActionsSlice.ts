import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ExtraActionsType } from 'types';

type ExtraActionsSliceState = any;

const initialState: ExtraActionsSliceState = {
  extraSignTransactions: () => null,
  init: () => null
};

export const extraActionsSlice = createSlice({
  name: 'extraActionsSlice',
  initialState,
  reducers: {
    initializeExtraActions: (state: any, action: PayloadAction<any>) => {
      const { extraSignTransactions } = action.payload;
      state.extraSignTransactions = extraSignTransactions;
      // state.init = init;
    }
  }
});

export const { initializeExtraActions } = extraActionsSlice.actions;

export default extraActionsSlice.reducer;
