import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutAction } from '../commonActions';

export interface TransactionInfoSlice {
  processingMessage: string;
  errorMessage: string;
  successMessage: string;
  submittedMessage: string;
  submittedMessageShown: string;
  grouping: number[];
}

export interface StateType {
  info: TransactionInfoSlice | null;
}

const initialState: StateType = {
  info: null
};

export const signTransactionsSlice = createSlice({
  name: 'transactionsInfo',
  initialState,
  reducers: {
    setTransactionInfo(
      state: StateType,
      action: PayloadAction<TransactionInfoSlice>
    ) {
      state.info = action.payload;
    },
    clearTransactionsInfo: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { clearTransactionsInfo, setTransactionInfo } =
  signTransactionsSlice.actions;

export default signTransactionsSlice.reducer;
