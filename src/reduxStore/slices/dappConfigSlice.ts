import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DappConfigType } from 'types';
import { logoutAction } from '../commonActions';

export type DappConfigSliceStateType = DappConfigType | undefined;

const initialState: DappConfigSliceStateType = undefined;

export const dappConfigSlice = createSlice({
  name: 'dappConfigSlice',
  initialState,
  reducers: {
    setDappConfig: (
      state: DappConfigSliceStateType,
      action: PayloadAction<DappConfigSliceStateType>
    ) => {
      state = action.payload;
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
