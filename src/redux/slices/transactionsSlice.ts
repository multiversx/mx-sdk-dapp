import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { REHYDRATE } from 'redux-persist';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import {
  SignedTransactionsType,
  SignedTransactionType,
  TokenOptionType,
  TransactionsToSignType
} from 'types/transactions';
import {
  getIsTransactionFailed,
  getIsTransactionSuccessful
} from 'utils/transactions';
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
  status: TransactionServerStatusesEnum;
  errorMessage?: string;
}

export interface TransactionsSliceStateType {
  signedTransactions: SignedTransactionsType;
  transactionsToSign: TransactionsToSignType | null;
  tokenOptions: TokenOptionType[];
}

const initialState: TransactionsSliceStateType = {
  signedTransactions: {},
  transactionsToSign: null,
  tokenOptions: []
};

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    updateSignedTransaction: (
      state: TransactionsSliceStateType,
      action: PayloadAction<SignedTransactionsType>
    ) => {
      state.signedTransactions = {
        ...state.signedTransactions,
        ...action.payload
      };
    },
    updateSignedTransactions: (
      state: TransactionsSliceStateType,
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
      state: TransactionsSliceStateType,
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
          getIsTransactionSuccessful(transaction.status)
        );
        const areTransactionsFailed = state.signedTransactions[
          sessionId
        ]?.transactions?.every((transaction) =>
          getIsTransactionFailed(transaction.status)
        );
        if (areTransactionsSuccessful) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.successful;
        }
        if (areTransactionsFailed) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.failed;
        }
      }
    },
    setTransactionsToSign: (
      state: TransactionsSliceStateType,
      action: PayloadAction<TransactionsToSignType>
    ) => {
      state.transactionsToSign = action.payload;
    },
    clearSignTransactions: (state) => {
      state.transactionsToSign = initialState.transactionsToSign;
    },
    setTokenOptions: (
      state: TransactionsSliceStateType,
      action: PayloadAction<TokenOptionType[]>
    ) => {
      if (Array.isArray(action.payload)) {
        state.tokenOptions = action.payload;
      }
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

      const { signedTransactions } = action.payload.transactions;
      const parsedSignedTransactions = Object.entries(
        signedTransactions
      ).reduce((acc, [sessionId, transaction]) => {
        const txTimestamp = moment(sessionId, 'unix');
        const isExpired = txTimestamp.add(5, 'hour').isBefore(moment());
        if (!isExpired) {
          acc[sessionId] = transaction;
        }
        return acc;
      }, {});
      if (signedTransactions != null) {
        state.signedTransactions = parsedSignedTransactions;
      }
    });
  }
});

export const {
  updateSignedTransaction,
  updateSignedTransactionStatus,
  updateSignedTransactions,
  setTransactionsToSign,
  clearSignTransactions,
  setTokenOptions
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
