import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccountSliceState {
  loggedIn: boolean;
}

const initialState = {
  loggedIn: false
};

export const accountSlice = createSlice({
  name: 'accountSlice',
  initialState: initialState,
  reducers: {
    setLoggedIn: (
      state: AccountSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.loggedIn = action.payload;
    }
  }
});

export const { setLoggedIn } = accountSlice.actions;

export default accountSlice.reducer;
