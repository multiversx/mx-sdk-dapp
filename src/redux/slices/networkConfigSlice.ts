import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash.omit';
import {
  AccountInfoSliceNetworkType,
  BaseNetworkType,
  NetworkType
} from 'types';
import { getBridgeAddressFromNetwork } from 'utils/internal';

export const defaultNetwork: AccountInfoSliceNetworkType = {
  id: 'not-configured',
  chainId: '',
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
    }
  }
});

export const {
  initializeNetworkConfig,
  setChainID
} = networkConfigSlice.actions;

export default networkConfigSlice.reducer;
