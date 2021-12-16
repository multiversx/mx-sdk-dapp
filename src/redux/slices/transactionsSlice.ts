import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RawTransactionType } from 'types';
import { logoutAction } from '../commonActions';

export interface TransactionsToSignType {
  transactions: RawTransactionType[];
  callbackRoute: string;
  sessionId: string;
}

export interface SignStatusType {
  [sessionId: string]: {
    transactions?: RawTransactionType[];
    status?: 'signed' | 'failed' | 'cancelled' | 'pending';
  };
}

export interface SignTransactionsStateType {
  signStatus: SignStatusType;
  transactionsToSign: TransactionsToSignType | null;
}

const initialState: SignTransactionsStateType = {
  signStatus: {},
  transactionsToSign: null
};

export const transactionsSlice = createSlice({
  name: 'signTransactions',
  initialState,
  reducers: {
    updateSignStatus: (
      state: SignTransactionsStateType,
      action: PayloadAction<SignStatusType>
    ) => {
      state.signStatus = { ...state.signStatus, ...action.payload };
    },

    setTransactionsToSign: (
      state: SignTransactionsStateType,
      action: PayloadAction<TransactionsToSignType>
    ) => {
      state.transactionsToSign = action.payload;
    },
    clearSignTransactions: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  updateSignStatus,
  setTransactionsToSign,
  clearSignTransactions
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
