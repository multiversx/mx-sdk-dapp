import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import {
  TransactionToastType,
  ToastType,
  PlainTransactionStatus
} from 'types/toasts';
import { logoutAction } from '../commonActions';

export type ExpiresType = number | false;
export interface ToastsState {
  toasts: ToastType[];
  toastSignSessions: string[];
  transactionToasts: TransactionToastType[];
  refetch: number;
  toastProgress: {
    [key: string]: ToastProgressType;
  };
}
export interface ToastProgressType {
  progress: number;
  data: any;
  expires: ExpiresType;
}

export interface UpdateTransactionToastStatusPayload {
  status: PlainTransactionStatus;
  transactionHash: string;
  toastSignSession: string;
}

export interface UpdateTransactionToastErrorPayload {
  errorMessage?: string;
  toastSignSession: string;
}

const initialState: ToastsState = {
  toasts: [],
  toastProgress: {},
  toastSignSessions: [],
  transactionToasts: [],
  refetch: Date.now()
};

export const toastsSlice = createSlice({
  name: 'toastsSlice',
  initialState,
  reducers: {
    addToast: (state: ToastsState, action: PayloadAction<ToastType>) => {
      const toast = action.payload;
      const timestamp = Date.now();
      const toastAlreadyExists = state.toasts.some((t) => t.id === toast.id);
      if (!toastAlreadyExists) {
        state.toasts.unshift({ ...toast, timestamp });
      } else {
        //if the toast already exists, update it
        state.toasts = state.toasts.map((existingToast) => {
          if (existingToast.id === toast.id) {
            return {
              ...existingToast,
              ...toast
            };
          }
          return existingToast;
        });
      }
    },
    updateToast: (
      state: ToastsState,
      action: PayloadAction<Partial<ToastType>>
    ) => {
      const toast = action.payload;
      state.toasts = state.toasts.map((existingToast) => {
        if (existingToast.id === toast.id) {
          return {
            ...existingToast,
            ...toast
          };
        }
        return existingToast;
      });
    },
    removeToast: (state: ToastsState, action: PayloadAction<string>) => {
      const removedToastId = action.payload;
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== removedToastId
      );
    },
    setTransactionToasts: (
      state: ToastsState,
      action: PayloadAction<TransactionToastType[]>
    ) => {
      state.transactionToasts = action.payload;
    },
    removeTransactionToast: (
      state: ToastsState,
      action: PayloadAction<string>
    ) => {
      state.transactionToasts = state.transactionToasts.filter(
        (tx) => tx.toastSignSession !== action.payload
      );
    },
    updateTransactionToastTransactionStatus: (
      state: ToastsState,
      action: PayloadAction<UpdateTransactionToastStatusPayload>
    ) => {
      const { toastSignSession, transactionHash, status } = action.payload;

      const transactionToast = state.transactionToasts.find(
        (txToast) => txToast.toastSignSession === toastSignSession
      );
      if (transactionToast?.transactions != null) {
        transactionToast.transactions[transactionHash] = status;
      }
    },
    updateTransactionToastErrorMessage: (
      state: ToastsState,
      action: PayloadAction<UpdateTransactionToastErrorPayload>
    ) => {
      const { toastSignSession, errorMessage } = action.payload;

      const transactionToast = state.transactionToasts.find(
        (txToast) => txToast.toastSignSession === toastSignSession
      );
      if (transactionToast != null) {
        transactionToast.errorMessage = errorMessage;
      }
    },
    addToastSignSession: (
      state: ToastsState,
      action: PayloadAction<string>
    ) => {
      const toastSignSession = action.payload;
      if (!state.toastSignSessions.includes(toastSignSession)) {
        state.toastSignSessions.unshift(toastSignSession);
      }
    },
    updateToastsRefetch: (state: ToastsState) => {
      state.refetch = Date.now();
    },
    saveToastProgress: (state: ToastsState, action: PayloadAction<any>) => {
      const { id, expires, data, progress } = action.payload;
      state.toastProgress[id] = {
        data,
        expires,
        progress,
      };
    },
    removeToastProgress: (
      state: ToastsState,
      action: PayloadAction<string>
    ) => {
      const id = action.payload;
      delete state.toastProgress[id];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(REHYDRATE, (state: ToastsState, action: any) => {
      const persistedState = action?.payload?.toasts;
      if (persistedState == null) {
        return state;
      }
      return {
        ...persistedState,
        toasts:
          persistedState?.toasts != null
            ? persistedState?.toasts?.filter((toast: ToastType) => {
                const isTransactionPending =
                  toast?.descriptionProps?.props?.pending;
                return isTransactionPending === null || isTransactionPending;
              })
            : []
      };
    });
  }
});

export const {
  addToast,
  updateToast,
  removeToast,
  saveToastProgress,
  removeToastProgress,
  addToastSignSession,
  updateToastsRefetch,
  setTransactionToasts,
  removeTransactionToast,
  updateTransactionToastTransactionStatus,
  updateTransactionToastErrorMessage
} = toastsSlice.actions;

export default toastsSlice.reducer;
