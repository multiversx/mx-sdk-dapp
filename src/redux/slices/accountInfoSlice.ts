import { Nonce } from '@elrondnetwork/erdjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';
import { AccountType } from '../../types';
import { logoutAction } from '../commonActions';

export interface AccountInfoSliceType {
  address: string;
  shard?: number;
  account: Draft<AccountType>;
}

export const emptyAccount: AccountType = {
  balance: '...',
  address: '...',
  nonce: new Nonce(0)
};

const initialState = {
  address: '',
  account: emptyAccount,
  shard: 0
};

export const accountInfoSlice = createSlice({
  name: 'accountInfoSlice',
  initialState: initialState,
  reducers: {
    setAddress: (
      state: AccountInfoSliceType,
      action: PayloadAction<string>
    ) => {
      state.address = action.payload;
    },
    setAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<AccountType>
    ) => {
      state.account = action.payload;
    },
    setAccountNonce: (
      state: AccountInfoSliceType,
      action: PayloadAction<number>
    ) => {
      state.account.nonce = new Nonce(action.payload);
    },
    setAccountShard: (
      state: AccountInfoSliceType,
      action: PayloadAction<number>
    ) => {
      state.shard = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { setAccount, setAddress, setAccountNonce, setAccountShard } =
  accountInfoSlice.actions;

export default accountInfoSlice.reducer;
