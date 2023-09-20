import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import { ToastsEnum } from 'types';
import { CustomToastType, TransactionToastType } from 'types/toasts.types';
import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { logoutAction } from '../commonActions';

export interface ToastsSliceState {
  customToasts: Record<string, CustomToastType>;
  transactionToasts: TransactionToastType[];
}

const initialState: ToastsSliceState = {
  customToasts: {},
  transactionToasts: []
};

export const toastsSlice = createSlice({
  name: 'toastsSlice',
  initialState,
  reducers: {
    addCustomToast: (
      state: ToastsSliceState,
      action: PayloadAction<CustomToastType>
    ) => {
      const toastId = action.payload.toastId || `custom-toast-${Date.now()}`;

      state.customToasts[toastId] = {
        ...action.payload,
        type: ToastsEnum.custom,
        toastId
      };
    },

    removeCustomToast: (
      state: ToastsSliceState,
      action: PayloadAction<string>
    ) => {
      delete state.customToasts[action.payload];
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
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(REHYDRATE, (state, action: any) => {
      const excludeComponentToasts =
        action.customToasts?.filter(
          (toast: CustomToastType) => !('component' in toast)
        ) ?? [];
      state.customToasts = excludeComponentToasts;
    });
  }
});

export const {
  addCustomToast,
  removeCustomToast,
  addTransactionToast,
  removeTransactionToast
} = toastsSlice.actions;

export default toastsSlice.reducer;
