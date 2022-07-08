import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastsEnum } from 'types';
import { logoutAction } from '../commonActions';
import {
  CustomToastType,
  FailTransactionToastType,
  TransactionToastType
} from 'types/toasts';
import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { TRANSACTION_STATUS_TOAST_ID } from 'constants/transaction-status';

export interface ToastsSliceState {
  customToasts: CustomToastType[];
  transactionToasts: TransactionToastType[];
  failTransactionToast: FailTransactionToastType | null;
}

const initialState: ToastsSliceState = {
  customToasts: [],
  transactionToasts: [],
  failTransactionToast: null
};

export const toastsSlice = createSlice({
  name: 'toastsSlice',
  initialState,
  reducers: {
    addCustomToast: (
      state: ToastsSliceState,
      action: PayloadAction<CustomToastType>
    ) => {
      state.customToasts.push({
        ...action.payload,
        type: ToastsEnum.custom,
        toastId:
          action.payload.toastId ||
          `custom-toast-${state.customToasts.length + 1}`
      });
    },
    removeCustomToast: (
      state: ToastsSliceState,
      action: PayloadAction<string>
    ) => {
      state.customToasts = state.customToasts.filter(
        (toast) => toast.toastId !== action.payload
      );
    },
    addTransactionToast: (
      state: ToastsSliceState,
      action: PayloadAction<string>
    ) => {
      state.transactionToasts.push({
        type: ToastsEnum.transaction,
        startTimestamp: getUnixTimestamp(),
        toastId:
          action.payload || `custom-toast-${state.transactionToasts.length + 1}`
      });
    },
    removeTransactionToast: (
      state: ToastsSliceState,
      action: PayloadAction<string>
    ) => {
      state.transactionToasts = state.transactionToasts.filter((toast) => {
        return toast.toastId !== action.payload;
      });
    },
    addFailTransactionToast: (
      state: ToastsSliceState,
      action: PayloadAction<FailTransactionToastType>
    ) => {
      state.failTransactionToast = {
        ...action.payload,
        toastId: TRANSACTION_STATUS_TOAST_ID
      };
    },
    removeFailTransactionToast: (state: ToastsSliceState) => {
      state.failTransactionToast = null;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  addCustomToast,
  removeCustomToast,
  addTransactionToast,
  removeTransactionToast,
  addFailTransactionToast,
  removeFailTransactionToast
} = toastsSlice.actions;

export default toastsSlice.reducer;
