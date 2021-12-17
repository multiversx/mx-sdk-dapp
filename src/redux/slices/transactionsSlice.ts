import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RawTransactionType } from 'types';
import { TransactionStatusesEnum } from '../../types/enums';
import { logoutAction } from '../commonActions';

export interface TransactionsToSignType {
  transactions: RawTransactionType[];
  callbackRoute: string;
  sessionId: string;
}

export interface SignedTransactionsType {
  [sessionId: string]: {
    transactions?: RawTransactionType[];
    status?: TransactionStatusesEnum;
  };
}

export interface UpdateSignedTransactionStatusPayloadType {
  sessionId: string;
  status: TransactionStatusesEnum;
}

export interface SignTransactionsStateType {
  signedTransactions: SignedTransactionsType;
  transactionsToSign: TransactionsToSignType | null;
}

const initialState: SignTransactionsStateType = {
  signedTransactions: {},
  transactionsToSign: null
};

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    updateSignedTransaction: (
      state: SignTransactionsStateType,
      action: PayloadAction<SignedTransactionsType>
    ) => {
      state.signedTransactions = {
        ...state.signedTransactions,
        ...action.payload
      };
    },
    updateSignedTransactionStatus: (
      state: SignTransactionsStateType,
      action: PayloadAction<UpdateSignedTransactionStatusPayloadType>
    ) => {
      const { sessionId, status } = action.payload;
      const transaction = state.signedTransactions[sessionId];
      if (transaction != null) {
        state.signedTransactions[sessionId].status = status;
      }
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
  updateSignedTransaction,
  updateSignedTransactionStatus,
  setTransactionsToSign,
  clearSignTransactions
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
