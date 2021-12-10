import { Nonce } from '@elrondnetwork/erdjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';
import { REHYDRATE } from 'redux-persist';
import { AccountType } from '../../types';
import {
  loginAction,
  logoutAction,
  LoginActionPayloadType
} from '../commonActions';

export interface LedgerAccountType {
  index: number;
  address: string;
}

export interface AccountInfoSliceType {
  address: string;
  shard?: number;
  account: Draft<AccountType>;
  ledgerAccount: LedgerAccountType | null;
  walletConnectAccount: string | null;
}

export const emptyAccount: AccountType = {
  balance: '...',
  address: '...',
  nonce: new Nonce(0)
};

const initialState: AccountInfoSliceType = {
  address: '',
  account: emptyAccount,
  shard: 0,
  ledgerAccount: null,
  walletConnectAccount: null
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
    },
    setLedgerAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<LedgerAccountType | null>
    ) => {
      state.ledgerAccount = action.payload;
    },
    setWalletConnectAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<string | null>
    ) => {
      state.walletConnectAccount = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(
      loginAction,
      (
        state: AccountInfoSliceType,
        action: PayloadAction<LoginActionPayloadType>
      ) => {
        state.address = action.payload.address;
      }
    );
    builder.addCase(REHYDRATE, (state, action: any) => {
      if (!action.payload?.account) {
        return;
      }

      const { account } = action.payload;
      state.address = account.address;
      state.shard = account.shard;
      state.account = account.account;
    });
  }
});

export const {
  setAccount,
  setAddress,
  setAccountNonce,
  setAccountShard,
  setLedgerAccount,
  setWalletConnectAccount
} = accountInfoSlice.actions;

export default accountInfoSlice.reducer;
