import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import { TransactionStatusesEnum } from 'types/enums';
import {
  SignedTransactionsType,
  SignedTransactionType,
  TransactionsToSignType
} from 'types/transactions';
import { logoutAction } from '../commonActions';

export interface UpdateSignedTransactionStatusPayloadType {
  sessionId: string;
  status: TransactionStatusesEnum;
  errorMessage?: string;
  transactions?: SignedTransactionType[];
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
      const { sessionId, status, errorMessage, transactions } = action.payload;
      const transaction = state.signedTransactions[sessionId];
      if (transaction != null) {
        state.signedTransactions[sessionId].status = status;
        if (errorMessage != null) {
          state.signedTransactions[sessionId].errorMessage = errorMessage;
        }
        if (transactions != null) {
          state.signedTransactions[sessionId].transactions = transactions;
        }
      }
    },
    setTransactionsToSign: (
      state: SignTransactionsStateType,
      action: PayloadAction<TransactionsToSignType>
    ) => {
      state.transactionsToSign = action.payload;
    },
    clearSignTransactions: (state) => {
      state.transactionsToSign = initialState.transactionsToSign;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(REHYDRATE, (state, action: any) => {
      if (!action.payload?.transactions) {
        return;
      }

      const { signedTransactions } = action.payload;
      if (signedTransactions != null) {
        state.signedTransactions = signedTransactions;
      }
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
