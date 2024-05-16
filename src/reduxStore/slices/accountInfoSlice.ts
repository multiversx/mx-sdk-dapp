import { Address } from '@multiversx/sdk-core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import { ZERO } from 'constants/index';
import { BatchTransactionsWSResponseType } from 'types';
import { AccountType } from 'types/account.types';
import { storage } from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';

import {
  loginAction,
  logoutAction,
  LoginActionPayloadType
} from '../commonActions';

export interface LedgerAccountType {
  index: number;
  address: string;
  hasContractDataEnabled: boolean;
  version: string;
}

export interface UpdateLedgerAccountPayloadType {
  index: number;
  address: string;
}

export interface AccountInfoSliceType {
  address: string;
  shard?: number;
  accounts: { [address: string]: AccountType };
  publicKey: string;
  ledgerAccount: LedgerAccountType | null;
  walletConnectAccount: string | null;
  websocketEvent: {
    timestamp: number;
    message: string;
  } | null;
  websocketBatchEvent: {
    timestamp: number;
    data: BatchTransactionsWSResponseType;
  } | null;
}

export const emptyAccount: AccountType = {
  balance: '...',
  address: '',
  isGuarded: false,
  nonce: 0,
  txCount: 0,
  scrCount: 0,
  claimableRewards: ZERO
};

const initialState: AccountInfoSliceType = {
  address: '',
  websocketEvent: null,
  websocketBatchEvent: null,
  accounts: { '': emptyAccount },
  ledgerAccount: null,
  publicKey: '',
  walletConnectAccount: null
};

export const accountInfoSlice = createSlice({
  name: 'accountInfoSlice',
  initialState: initialState,
  reducers: {
    setAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<AccountType>
    ) => {
      state.address = action.payload.address;
      state.publicKey = new Address(action.payload.address).hex();

      // account fetching always comes after address is populated

      state.accounts = {
        [state.address]: action.payload
      };
      state.shard = action.payload.shard;
    },
    setAccountNonce: (
      state: AccountInfoSliceType,
      action: PayloadAction<number>
    ) => {
      const { address } = state;
      state.accounts[address].nonce = action.payload;
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
    updateLedgerAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<UpdateLedgerAccountPayloadType>
    ) => {
      if (state.ledgerAccount != null) {
        state.ledgerAccount.index = action.payload.index;
        state.ledgerAccount.address = action.payload.address;
      }
    },
    setWalletConnectAccount: (
      state: AccountInfoSliceType,
      action: PayloadAction<string | null>
    ) => {
      state.walletConnectAccount = action.payload;
    },

    setWebsocketEvent: (
      state: AccountInfoSliceType,
      action: PayloadAction<string>
    ) => {
      state.websocketEvent = {
        timestamp: Date.now(),
        message: action.payload
      };
    },
    setWebsocketBatchEvent: (
      state: AccountInfoSliceType,
      action: PayloadAction<BatchTransactionsWSResponseType>
    ) => {
      state.websocketBatchEvent = {
        timestamp: Date.now(),
        data: action.payload
      };
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
        const {
          account: { address }
        } = action.payload;
        state.address = address;
        state.publicKey = new Address(address).hex();
      }
    );
    builder.addCase(REHYDRATE, (state, action: any) => {
      if (!action.payload?.account) {
        return;
      }

      const { account: accountInfo } = action.payload;
      const { address, shard, accounts, publicKey } =
        accountInfo as AccountInfoSliceType;
      state.address = address;
      state.shard = shard;
      const isAddressInAccounts = accounts && address in accounts;
      state.accounts = isAddressInAccounts ? accounts : initialState.accounts;
      state.publicKey = publicKey;
    });
  }
});

export const {
  setAccount,
  setAccountNonce,
  setAccountShard,
  setLedgerAccount,
  updateLedgerAccount,
  setWalletConnectAccount,
  setWebsocketEvent,
  setWebsocketBatchEvent
} = accountInfoSlice.actions;

export default accountInfoSlice.reducer;
