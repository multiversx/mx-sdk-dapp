import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash.omit';
import { REHYDRATE } from 'redux-persist';
import { AVERAGE_TX_DURATION_MS } from 'constants/transactionStatus';
import { logoutAction } from 'reduxStore/commonActions';
import {
  AccountInfoSliceNetworkType,
  BaseNetworkType,
  NetworkType
} from 'types';
import { getRandomAddressFromNetwork } from 'utils/internal';

export const defaultNetwork: AccountInfoSliceNetworkType = {
  id: 'not-configured',
  chainId: '',
  name: 'NOT CONFIGURED',
  egldLabel: '',
  decimals: '18',
  digits: '4',
  gasPerDataByte: '1500',
  walletConnectDeepLink: '',
  walletConnectBridgeAddress: '',
  walletConnectV2RelayAddress: '',
  walletConnectV2ProjectId: '',
  walletConnectV2Options: {},
  walletAddress: '',
  apiAddress: '',
  explorerAddress: '',
  apiTimeout: '4000',
  roundDuration: AVERAGE_TX_DURATION_MS
};

export const networkConfigSlice = createSlice({
  name: 'appConfig',
  initialState: defaultNetwork,
  reducers: {
    initializeNetworkConfig: (
      state: AccountInfoSliceNetworkType,
      action: PayloadAction<NetworkType>
    ) => {
      const walletConnectV2RelayAddress = getRandomAddressFromNetwork(
        action.payload.walletConnectV2RelayAddresses
      );

      const network: BaseNetworkType = omit(
        action.payload,
        'walletConnectV2RelayAddresses'
      );

      return {
        ...state,
        ...network,
        walletConnectV2RelayAddress
      };
    },
    updateNetworkConfig: (
      state: AccountInfoSliceNetworkType,
      action: PayloadAction<Partial<AccountInfoSliceNetworkType>>
    ) => {
      // Assign each prop one by one instead of resetting entire state object
      // and lose object reference
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, (state: AccountInfoSliceNetworkType) => {
      state.customWalletAddress = undefined;
    }),
      builder.addCase(REHYDRATE, (state, action: any) => {
        if (!action.payload?.customWalletAddress) {
          return;
        }

        const { customWalletAddress } = action.payload;
        state.customWalletAddress = customWalletAddress;
      });
  }
});

export const { initializeNetworkConfig, updateNetworkConfig } =
  networkConfigSlice.actions;

export default networkConfigSlice.reducer;
