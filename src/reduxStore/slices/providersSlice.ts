import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDappProvider } from 'types';
import { logoutAction } from '../commonActions';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { emptyProvider } from 'utils/providers/utils';

type ProvidersType =
  | IDappProvider
  | ExtensionProvider
  | WalletProvider
  | HWProvider
  | WalletConnectProvider;

export interface ProvidersSliceState {
  accountProvider: ProvidersType;
  externalProvider: IDappProvider | null;
}

const initialState = {
  accountProvider: emptyProvider,
  externalProvider: null
};

export const providersSlice = createSlice({
  name: 'providersSlice',
  initialState,
  reducers: {
    setAccountProvider: (
      state: ProvidersSliceState,
      action: PayloadAction<ProvidersType>
    ) => {
      state.accountProvider = action.payload;
    },
    setExternalProvider: (
      state: ProvidersSliceState,
      action: PayloadAction<IDappProvider>
    ) => {
      state.externalProvider = action.payload;
    },
    setExternalProviderAsAccountProvider: (state: ProvidersSliceState) => {
      if (state.externalProvider != null) {
        state.accountProvider = state.externalProvider;
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  setAccountProvider,
  setExternalProvider,
  setExternalProviderAsAccountProvider
} = providersSlice.actions;
console.log(providersSlice);

export default providersSlice.reducer;
