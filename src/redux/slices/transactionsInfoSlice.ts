import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TransactionsDisplayInfoType } from 'types/transactions';
import { logoutAction } from '../commonActions';

export interface StateType {
  [sessionId: string]: TransactionsDisplayInfoType;
}

export interface SetTransactionsInfoPayloadType {
  sessionId: string;
  transactionsDisplayInfo: TransactionsDisplayInfoType;
}

export const defaultTransactionErrorMessage = 'Transaction failed';
export const defaultTransactionSuccessMessage = 'Transaction successful';
export const defaultTransactionProcessingMessage = 'Processing transaction';
export const defaultTransactionSubmittedMessage = 'Transaction submitted';

const initialState: StateType = {};

export const signTransactionsSlice = createSlice({
  name: 'transactionsInfo',
  initialState,
  reducers: {
    setTransactionsDisplayInfo(
      state: StateType,
      action: PayloadAction<SetTransactionsInfoPayloadType>
    ) {
      const { sessionId, transactionsDisplayInfo } = action.payload;
      if (sessionId != null) {
        state[sessionId] = {
          errorMessage:
            transactionsDisplayInfo?.errorMessage ||
            defaultTransactionErrorMessage,
          successMessage:
            transactionsDisplayInfo?.successMessage ||
            defaultTransactionSuccessMessage,
          processingMessage:
            transactionsDisplayInfo?.processingMessage ||
            defaultTransactionProcessingMessage,
          submittedMessage:
            transactionsDisplayInfo?.submittedMessage ||
            defaultTransactionSubmittedMessage,
          transactionDuration: transactionsDisplayInfo?.transactionDuration
        };
      }
    },
    clearTransactionsInfoForSessionId(
      state: StateType,
      action: PayloadAction<string | undefined>
    ) {
      if (action.payload != null) {
        delete state[action.payload];
      }
    },
    clearTransactionsInfo: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  clearTransactionsInfo,
  setTransactionsDisplayInfo,
  clearTransactionsInfoForSessionId
} = signTransactionsSlice.actions;

export default signTransactionsSlice.reducer;
