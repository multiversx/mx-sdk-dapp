import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DappConfigType } from 'types';
import { logoutAction } from '../commonActions';

export type DappConfigSliceStateType = DappConfigType | undefined;

const initialState: DappConfigSliceStateType = {};

export const dappConfigSlice = createSlice({
  name: 'dappConfigSlice',
  initialState,
  reducers: {
    setDappConfig: (
      state: DappConfigSliceStateType,
      action: PayloadAction<DappConfigSliceStateType>
    ) => {
      if (state && action.payload) {
        const {
          logoutRoute,
          shouldUseWebViewProvider,
          cancelTransactionToastDuration
        } = action.payload;
        state.logoutRoute = logoutRoute;
        state.shouldUseWebViewProvider = shouldUseWebViewProvider;
        state.cancelTransactionToastDuration = cancelTransactionToastDuration;
      } else {
        state = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { setDappConfig } = dappConfigSlice.actions;

export default dappConfigSlice.reducer;
