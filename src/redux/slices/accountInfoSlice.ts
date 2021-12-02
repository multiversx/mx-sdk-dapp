import { Nonce } from '@elrondnetwork/erdjs';
import { Draft } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountType } from '../../types';

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
    setShard: (state: AccountInfoSliceType, action: PayloadAction<number>) => {
      state.shard = action.payload;
    }
  }
});

export const { setAccount, setAddress, setShard } = accountInfoSlice.actions;

export default accountInfoSlice.reducer;
