import { Address } from '@elrondnetwork/erdjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import storage from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';

import {
  loginAction,
  logoutAction,
  LoginActionPayloadType
} from '../commonActions';

export interface AccountType {
  address: string;
  balance: string;
  nonce: number;
  code?: string;
  username?: string;
}
export interface LedgerAccountType {
  index: number;
  address: string;
}

export interface AccountInfoSliceType {
  address: string;
  shard?: number;
  account: AccountType;
  publicKey: string;
  ledgerAccount: LedgerAccountType | null;
  walletConnectAccount: string | null;
  isAccountLoading: boolean;
  accountLoadingError: string | null;
}

export const emptyAccount: AccountType = {
  balance: '...',
  address: '',
  nonce: 0
};

const initialState: AccountInfoSliceType = {
  address: '',
  account: emptyAccount,
  ledgerAccount: null,
  publicKey: '',
  walletConnectAccount: null,
  isAccountLoading: true,
  accountLoadingError: null
};

export const accountInfoSlice = createSlice({
  name: 'accountInfoSlice',
  initialState: initialState,
  reducers: {
    setAddress: (
      state: AccountInfoSliceType,
      action: PayloadAction<string>
    ) => {
      const address = action.payload;
      state.address = address;
      state.publicKey = new Address(address).hex();
    },
    setAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<AccountType>
    ) => {
      state.account = action.payload;
      state.isAccountLoading = false;
      state.accountLoadingError = null;
    },
    setAccountNonce: (
      state: AccountInfoSliceType,
      action: PayloadAction<number>
    ) => {
      state.account.nonce = action.payload;
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
    },
    setIsAccountLoading: (
      state: AccountInfoSliceType,
      action: PayloadAction<boolean>
    ) => {
      state.isAccountLoading = action.payload;
      state.accountLoadingError = null;
    },
    setAccountLoadingError: (
      state: AccountInfoSliceType,
      action: PayloadAction<string | null>
    ) => {
      state.accountLoadingError = action.payload;
      state.isAccountLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      storage.local.removeItem(localStorageKeys.loginExpiresAt);
      return initialState;
    });
    builder.addCase(
      loginAction,
      (
        state: AccountInfoSliceType,
        action: PayloadAction<LoginActionPayloadType>
      ) => {
        const { address } = action.payload;
        state.address = address;
        state.publicKey = new Address(address).hex();
      }
    );
    builder.addCase(REHYDRATE, (state, action: any) => {
      if (!action.payload?.account) {
        return;
      }

      const { account: accountInfo } = action.payload;
      const { address, shard, account, publicKey } = accountInfo;
      state.address = address;
      state.shard = shard;
      state.account = account;
      state.publicKey = publicKey;
    });
  }
});

export const {
  setAccount,
  setAddress,
  setAccountNonce,
  setAccountShard,
  setLedgerAccount,
  setWalletConnectAccount,
  setIsAccountLoading,
  setAccountLoadingError
} = accountInfoSlice.actions;

export default accountInfoSlice.reducer;
