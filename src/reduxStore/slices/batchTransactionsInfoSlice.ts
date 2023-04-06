import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TransactionsDisplayInfoType } from 'types';
import { logoutAction } from '../commonActions';

export interface BatchStateType {
  [batchId: string]: TransactionsDisplayInfoType;
}

export interface SetBatchTransactionsInfoPayloadType {
  batchId: string;
  batchTransactionsDisplayInfo: TransactionsDisplayInfoType;
}

export const defaultBatchTransactionErrorMessage = 'Batch transactions failed';
export const defaultBatchTransactionSuccessMessage =
  'Batch transactions successful';
export const defaultBatchTransactionProcessingMessage =
  'Processing batch transactions';
export const defaultBatchTransactionSubmittedMessage =
  'Batch transactions submitted';

const initialState: BatchStateType = {};

export const signBatchTransactionsSlice = createSlice({
  name: 'batchTransactionsInfo',
  initialState,
  reducers: {
    setBatchTransactionsDisplayInfo(
      state: BatchStateType,
      action: PayloadAction<SetBatchTransactionsInfoPayloadType>
    ) {
      const { batchId, batchTransactionsDisplayInfo } = action.payload;
      if (batchId != null) {
        state[batchId] = {
          errorMessage:
            batchTransactionsDisplayInfo?.errorMessage ||
            defaultBatchTransactionErrorMessage,
          successMessage:
            batchTransactionsDisplayInfo?.successMessage ||
            defaultBatchTransactionSuccessMessage,
          processingMessage:
            batchTransactionsDisplayInfo?.processingMessage ||
            defaultBatchTransactionProcessingMessage,
          submittedMessage:
            batchTransactionsDisplayInfo?.submittedMessage ||
            defaultBatchTransactionSubmittedMessage,
          transactionDuration: batchTransactionsDisplayInfo?.transactionDuration
        };
      }
    },
    clearBatchTransactionsInfoForBatchId(
      state: BatchStateType,
      action: PayloadAction<string | undefined>
    ) {
      if (action.payload != null) {
        delete state[action.payload];
      }
    },
    clearBatchTransactionsInfo: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  clearBatchTransactionsInfo,
  setBatchTransactionsDisplayInfo,
  clearBatchTransactionsInfoForBatchId
} = signBatchTransactionsSlice.actions;

export default signBatchTransactionsSlice.reducer;
