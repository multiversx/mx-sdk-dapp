import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash.omit';
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
  apiTimeout: '4000'
};

export interface NetworkConfigStateType {
  network: AccountInfoSliceNetworkType;
  chainID: string;
}

const initialState: NetworkConfigStateType = {
  network: defaultNetwork,
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
      const walletConnectBridgeAddress = getRandomAddressFromNetwork(
        action.payload.walletConnectBridgeAddresses
      );
      const walletConnectV2RelayAddress = getRandomAddressFromNetwork(
        action.payload.walletConnectV2RelayAddresses
      );
      const network: BaseNetworkType = omit(
        action.payload,
        'walletConnectBridgeAddresses',
        'walletConnectV2RelayAddresses'
      );
      state.network = {
        ...state.network,
        ...network,
        walletConnectBridgeAddress,
        walletConnectV2RelayAddress
      };
    },
    setChainID: (
      state: NetworkConfigStateType,
      action: PayloadAction<string>
    ) => {
      state.chainID = action.payload;
    }
  }
});

export const {
  initializeNetworkConfig,
  setChainID
} = networkConfigSlice.actions;

export default networkConfigSlice.reducer;
