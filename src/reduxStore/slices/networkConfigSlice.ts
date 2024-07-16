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

export interface NetworkConfigStateType {
  network: AccountInfoSliceNetworkType;
  chainID: string;
}

const initialState: NetworkConfigStateType = {
  network: defaultNetwork,
  chainID: ''
};

export const networkConfigSlice = createSlice({
  name: 'appConfig',
  initialState: initialState,
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
    setChainID: (
      state: NetworkConfigStateType,
      action: PayloadAction<string>
    ) => {
      state.chainID = action.payload;
    },
    setRoundDuration: (
      state: NetworkConfigStateType,
      action: PayloadAction<number>
    ) => {
      state.network.roundDuration = action.payload;
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
  setChainID,
  setRoundDuration,
  setCustomWalletAddress
} = networkConfigSlice.actions;

export default networkConfigSlice.reducer;
