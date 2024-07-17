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

export interface NetworkConfigStateType {
  network: AccountInfoSliceNetworkType;
}

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

const initialState: NetworkConfigStateType = {
  network: defaultNetwork
};

export const networkConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    initializeNetworkConfig: (
      state: NetworkConfigStateType,
      action: PayloadAction<NetworkType>
    ) => {
      const walletConnectV2RelayAddress = getRandomAddressFromNetwork(
        action.payload.walletConnectV2RelayAddresses
      );

      const network: BaseNetworkType = omit(
        action.payload,
        'walletConnectV2RelayAddresses'
      );

      state.network = {
        ...state.network,
        ...network,
        walletConnectV2RelayAddress
      };
    },
    updateNetworkConfig: (
      state: NetworkConfigStateType,
      action: PayloadAction<Partial<NetworkConfigStateType>>
    ) => {
      state.network = {
        ...state.network,
        ...action.payload
      };
    },
    setCustomWalletAddress: (
      state: NetworkConfigStateType,
      action: PayloadAction<AccountInfoSliceNetworkType['customWalletAddress']>
    ) => {
      state.network.customWalletAddress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, (state: NetworkConfigStateType) => {
      state.network.customWalletAddress = undefined;
    }),
      builder.addCase(REHYDRATE, (state, action: any) => {
        if (!action.payload?.network?.customWalletAddress) {
          return;
        }

        const {
          network: { customWalletAddress }
        } = action.payload;
        state.network.customWalletAddress = customWalletAddress;
      });
  }
});

export const {
  initializeNetworkConfig,
  updateNetworkConfig,
  setCustomWalletAddress
} = networkConfigSlice.actions;

export default networkConfigSlice.reducer;
