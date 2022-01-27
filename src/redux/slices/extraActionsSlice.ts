import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraActionsType } from 'types';

type ExtraActionsSliceState = ExtraActionsType;

const initialState: ExtraActionsSliceState = {
  extraSignTransactions: () => null,
  extraLog: () => {
    console.log('Extra LOG undefined');
  }
};

export const extraActionsSlice = createSlice({
  name: 'modalsSlice',
  initialState,
  reducers: {
    initializeExtraActions: (
      state: ExtraActionsType,
      action: PayloadAction<ExtraActionsType>
    ) => {
      const { extraSignTransactions, extraLog } = action.payload;
      state.extraSignTransactions = extraSignTransactions;
      state.extraLog = extraLog;
    }
  }
});

export const { initializeExtraActions } = extraActionsSlice.actions;

export default extraActionsSlice.reducer;
