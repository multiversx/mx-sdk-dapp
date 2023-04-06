import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BatchTransactionsResponseType } from 'types';
import { logoutAction } from '../commonActions';

export interface BatchTransactionsSliceStateType {
  [batchId: string]: BatchTransactionsResponseType;
}

const initialState: BatchTransactionsSliceStateType = {};

export const batchTransactionsSlice = createSlice({
  name: 'batchTransactionsSlice',
  initialState,
  reducers: {
    setBatchTransactions: (
      state: BatchTransactionsSliceStateType,
      action: PayloadAction<BatchTransactionsResponseType>
    ) => {
      state[action.payload.id] = action.payload;
    },
    updateBatchTransactions: (
      state: BatchTransactionsSliceStateType,
      action: PayloadAction<BatchTransactionsResponseType>
    ) => {
      state[action.payload.id] = {
        ...action.payload
      };
    },
    clearBatchTransactions: (
      state: BatchTransactionsSliceStateType,
      action: PayloadAction<{ batchId: string }>
    ) => {
      delete state[action.payload.batchId];
    },
    clearAllBatchTransactions: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  setBatchTransactions,
  updateBatchTransactions,
  clearBatchTransactions,
  clearAllBatchTransactions
} = batchTransactionsSlice.actions;

export default batchTransactionsSlice.reducer;
