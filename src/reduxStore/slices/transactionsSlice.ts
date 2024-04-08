import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import {
  CustomTransactionInformation,
  ServerTransactionType,
  SignedTransactionsBodyType,
  SignedTransactionsType,
  SignedTransactionType,
  TransactionsToSignType
} from 'types';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  getIsTransactionFailed,
  getIsTransactionNotExecuted,
  getIsTransactionSuccessful
} from 'utils/transactions/transactionStateByStatus';
import { logoutAction } from '../commonActions';

export interface UpdateSignedTransactionsPayloadType {
  sessionId: string;
  status: TransactionBatchStatusesEnum;
  errorMessage?: string;
  transactions?: SignedTransactionType[];
  customTransactionInformationOverrides?: Partial<CustomTransactionInformation>;
}

export interface MoveTransactionsToSignedStatePayloadType
  extends SignedTransactionsBodyType {
  sessionId: string;
  customTransactionInformation?: CustomTransactionInformation;
}

export interface UpdateSignedTransactionStatusPayloadType {
  sessionId: string;
  transactionHash: string;
  status: TransactionServerStatusesEnum;
  serverTransaction?: ServerTransactionType;
  errorMessage?: string;
  inTransit?: boolean;
}

export interface TransactionsSliceStateType {
  signedTransactions: SignedTransactionsType;
  transactionsToSign: TransactionsToSignType | null;
  signTransactionsError: string | null;
  signTransactionsCancelMessage: string | null;
  customTransactionInformationForSessionId: {
    [sessionId: string]: CustomTransactionInformation;
  };
}

const initialState: TransactionsSliceStateType = {
  signedTransactions: {},
  transactionsToSign: null,
  signTransactionsError: null,
  signTransactionsCancelMessage: null,
  customTransactionInformationForSessionId: {}
};

const defaultCustomInformation: CustomTransactionInformation = {
  signWithoutSending: false,
  sessionInformation: null,
  redirectAfterSign: false
};

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    moveTransactionsToSignedState: (
      state: TransactionsSliceStateType,
      action: PayloadAction<MoveTransactionsToSignedStatePayloadType>
    ) => {
      const {
        sessionId,
        transactions,
        errorMessage,
        status,
        redirectRoute,
        customTransactionInformation: overrideCustomTransactionInformation
      } = action.payload;

      state.customTransactionInformationForSessionId[sessionId] = {
        ...defaultCustomInformation,
        ...(state.signedTransactions[sessionId]?.customTransactionInformation ||
          {}),
        ...(state.customTransactionInformationForSessionId[sessionId] || {})
      };

      state.signedTransactions[sessionId] = {
        transactions,
        status,
        errorMessage,
        redirectRoute,
        customTransactionInformation: {
          ...state.customTransactionInformationForSessionId[sessionId],
          ...(overrideCustomTransactionInformation ?? {})
        }
      };

      if (state?.transactionsToSign?.sessionId === sessionId) {
        state.transactionsToSign = initialState.transactionsToSign;
      }
    },

    clearSignedTransaction: (
      state: TransactionsSliceStateType,
      action: PayloadAction<string>
    ) => {
      if (state.signedTransactions[action.payload]) {
        delete state.signedTransactions[action.payload];
      }
    },
    clearTransactionToSign: (state: TransactionsSliceStateType) => {
      if (state?.transactionsToSign) {
        state.transactionsToSign = null;
      }
    },
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
      const session = state.signedTransactions[sessionId];
      if (session != null) {
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
      const {
        sessionId,
        status,
        errorMessage,
        transactionHash,
        serverTransaction,
        inTransit
      } = action.payload;
      const transactions = state.signedTransactions?.[sessionId]?.transactions;
      if (transactions != null) {
        state.signedTransactions[sessionId].transactions = transactions.map(
          (transaction) => {
            if (transaction.hash === transactionHash) {
              return {
                ...(serverTransaction ?? {}),
                ...transaction,
                status,
                errorMessage,
                inTransit
              };
            }
            return transaction;
          }
        );
        const areTransactionsSuccessful = state.signedTransactions[
          sessionId
        ]?.transactions?.every((transaction) => {
          return getIsTransactionSuccessful(transaction.status);
        });

        const areTransactionsFailed = state.signedTransactions[
          sessionId
        ]?.transactions?.some((transaction) =>
          getIsTransactionFailed(transaction.status)
        );

        const areTransactionsNotExecuted = state.signedTransactions[
          sessionId
        ]?.transactions?.every((transaction) =>
          getIsTransactionNotExecuted(transaction.status)
        );

        if (areTransactionsSuccessful) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.success;
        }
        if (areTransactionsFailed) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.fail;
        }
        if (areTransactionsNotExecuted) {
          state.signedTransactions[sessionId].status =
            TransactionBatchStatusesEnum.invalid;
        }
      }
    },
    setTransactionsToSign: (
      state: TransactionsSliceStateType,
      action: PayloadAction<TransactionsToSignType>
    ) => {
      state.transactionsToSign = action.payload;

      const { sessionId, customTransactionInformation } = action.payload;
      state.customTransactionInformationForSessionId[sessionId] =
        customTransactionInformation;

      state.signTransactionsError = null;
    },
    clearAllTransactionsToSign: (state: TransactionsSliceStateType) => {
      state.transactionsToSign = initialState.transactionsToSign;
      state.signTransactionsError = null;
    },
    clearAllSignedTransactions: (state: TransactionsSliceStateType) => {
      state.signedTransactions = initialState.signedTransactions;
    },
    setSignTransactionsError: (
      state: TransactionsSliceStateType,
      action: PayloadAction<string | null>
    ) => {
      state.signTransactionsError = action.payload;
    },
    setSignTransactionsCancelMessage: (
      state: TransactionsSliceStateType,
      action: PayloadAction<string | null>
    ) => {
      state.signTransactionsCancelMessage = action.payload;
    },
    updateSignedTransactionsCustomTransactionInformation: (
      state: TransactionsSliceStateType,
      action: PayloadAction<{
        sessionId: string;
        customTransactionInformationOverrides: Partial<CustomTransactionInformation>;
      }>
    ) => {
      const { sessionId, customTransactionInformationOverrides } =
        action.payload;
      const session = state.signedTransactions[sessionId];
      if (session != null) {
        state.signedTransactions[sessionId].customTransactionInformation = {
          ...(state.signedTransactions[sessionId]
            .customTransactionInformation as CustomTransactionInformation),
          ...customTransactionInformationOverrides
        };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(REHYDRATE, (state, action: any) => {
      // cancel message does not persist between page reloads
      state.signTransactionsCancelMessage = null;

      if (!action.payload?.transactions) {
        return;
      }

      const { signedTransactions, customTransactionInformationForSessionId } =
        action.payload.transactions;
      const parsedSignedTransactions = Object.entries(
        signedTransactions
      ).reduce((acc, [sessionId, transaction]) => {
        const txTimestamp: any = new Date(sessionId);
        const expiration: any = new Date();
        expiration.setHours(expiration.getHours() + 5);
        const isExpired = expiration - txTimestamp > 0;
        if (!isExpired) {
          acc[sessionId] = transaction;
        }
        return acc;
      }, {} as { [key: string]: any });
      if (customTransactionInformationForSessionId != null) {
        state.customTransactionInformationForSessionId =
          customTransactionInformationForSessionId;
      }
      if (signedTransactions != null) {
        state.signedTransactions = parsedSignedTransactions;
      }
    });
  }
});

export const {
  updateSignedTransactionStatus,
  updateSignedTransactions,
  setTransactionsToSign,
  clearAllTransactionsToSign,
  clearAllSignedTransactions,
  clearSignedTransaction,
  clearTransactionToSign,
  setSignTransactionsError,
  setSignTransactionsCancelMessage,
  moveTransactionsToSignedState,
  updateSignedTransactionsCustomTransactionInformation
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
