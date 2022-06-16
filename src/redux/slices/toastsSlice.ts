import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutAction } from '../commonActions';

export interface CustomToastType {
  toastId: string;
  message: string;
  duration?: number;
}

export interface ToastsSliceState {
  customToasts?: CustomToastType[] | undefined;
}

const initialState: ToastsSliceState = {};

export const toastsSlice = createSlice({
  name: 'toastsSlice',
  initialState,
  reducers: {
    setCustomToasts: (
      state: ToastsSliceState,
      action: PayloadAction<CustomToastType>
    ) => {
      state.customToasts = [...(state.customToasts || []), action.payload].map(
        (toast, index) => ({
          ...toast,
          type: 'custom',
          toastId: toast.toastId || `custom-toast-${index}`
        })
      );
    },
    removeCustomToasts: (
      state: ToastsSliceState,
      action: PayloadAction<string>
    ) => {
      state.customToasts = (state.customToasts || []).filter(
        (toast) => toast.toastId !== action.payload
      );
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { setCustomToasts, removeCustomToasts } = toastsSlice.actions;

export default toastsSlice.reducer;
