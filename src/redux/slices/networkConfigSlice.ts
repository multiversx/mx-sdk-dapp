import { IDappProvider } from '@elrondnetwork/erdjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash/omit';
import {
  AccountInfoSliceNetworkType,
  BaseNetworkType,
  NetworkType
} from 'types';
import { getBridgeAddressFromNetwork } from 'utils/internal';
import { emptyProvider } from 'utils/provider';
import { logoutAction } from '../commonActions';

export const defaultNetwork: AccountInfoSliceNetworkType = {
  id: 'not-configured',
  name: 'NOT CONFIGURED',
  egldLabel: '',
  egldDenomination: '18',
  decimals: '4',
  gasPerDataByte: '1500',
  walletConnectDeepLink: '',
  walletConnectBridgeAddress: '',
  walletAddress: '',

  apiAddress: '',
  explorerAddress: '',
  apiTimeout: '4000'
};

export interface NetworkConfigStateType {
  provider: IDappProvider;
  network: AccountInfoSliceNetworkType;
  chainID: string;
}

const initialState: NetworkConfigStateType = {
  network: defaultNetwork,
  provider: emptyProvider,
  chainID: '-1'
};

export const networkConfigSlice = createSlice({
  name: 'appConfig',
  initialState: initialState,
  reducers: {
    initializeNetworkConfig: (
      state: NetworkConfigStateType,
      action: PayloadAction<NetworkType>
    ) => {
      const walletConnectBridgeAddress = getBridgeAddressFromNetwork(
        action.payload.walletConnectBridgeAddresses
      );
      const network: BaseNetworkType = omit(
        action.payload,
        'walletConnectBridgeAddresses'
      );
      state.network = {
        ...state.network,
        ...network,
        walletConnectBridgeAddress
      };
    },
    setChainID: (
      state: NetworkConfigStateType,
      action: PayloadAction<string>
    ) => {
      state.chainID = action.payload;
    },
    setProvider: (
      state: NetworkConfigStateType,
      action: PayloadAction<IDappProvider>
    ) => {
      state.provider = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, (state) => {
      state.provider = initialState.provider;
    });
  }
});

export const { initializeNetworkConfig, setChainID, setProvider } =
  networkConfigSlice.actions;

export default networkConfigSlice.reducer;
