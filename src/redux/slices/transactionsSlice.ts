import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import {
  TransactionBatchStatusesEnum,
  TransactionStatusesEnum
} from 'types/enums';
import {
  SignedTransactionsType,
  SignedTransactionType,
  TransactionsToSignType
} from 'types/transactions';
import { logoutAction } from '../commonActions';

export interface UpdateSignedTransactionsPayloadType {
  sessionId: string;
  status: TransactionBatchStatusesEnum;
  errorMessage?: string;
  transactions?: SignedTransactionType[];
}

export interface UpdateSignedTransactionStatusPayloadType {
  sessionId: string;
  transactionHash: string;
  status: TransactionStatusesEnum;
  errorMessage?: string;
}

export interface SignTransactionsStateType {
  signedTransactions: SignedTransactionsType;
  transactionsToSign: TransactionsToSignType | null;
}

const initialState: SignTransactionsStateType = {
  signedTransactions: {},
  transactionsToSign: null
};

const successStates = [
  TransactionStatusesEnum.successful,
  TransactionStatusesEnum.executed
];
const failureStates = [
  TransactionStatusesEnum.failed,
  TransactionStatusesEnum.invalid
];

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
    updateSignedTransactions: (
      state: SignTransactionsStateType,
      action: PayloadAction<UpdateSignedTransactionsPayloadType>
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
    updateSignedTransactionStatus: (
      state: SignTransactionsStateType,
      action: PayloadAction<UpdateSignedTransactionStatusPayloadType>
    ) => {
      const { sessionId, status, errorMessage, transactionHash } =
        action.payload;
      const transactions = state.signedTransactions?.[sessionId]?.transactions;
      if (transactions != null) {
        state.signedTransactions[sessionId].transactions = transactions.map(
          (transaction) => {
            if (transaction.hash === transactionHash) {
              return {
                ...transaction,
                status,
                errorMessage
              };
            }
            return transaction;
          }
        );
        const areTransactionsSuccessful = state.signedTransactions[
          sessionId
        ]?.transactions?.every((transaction) =>
          successStates.includes(transaction.status)
        );
        const areTransactionsFailed = state.signedTransactions[
          sessionId
        ]?.transactions?.every((transaction) =>
          failureStates.includes(transaction.status)
        );
        if (areTransactionsSuccessful) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.successful;
        }
        if (areTransactionsFailed) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.failed;
        }
        console.log(state, areTransactionsFailed, areTransactionsSuccessful);
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
  updateSignedTransactions,
  setTransactionsToSign,
  clearSignTransactions
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
