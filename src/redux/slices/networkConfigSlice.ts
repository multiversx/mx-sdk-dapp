import {
  IDappProvider,
  IProvider,
  IApiProvider,
  ProxyProvider,
  ApiProvider
} from '@elrondnetwork/erdjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NetworkType } from 'types';
import { emptyProvider } from 'utils/provider';
import { logoutAction } from '../commonActions';

export const defaultNetwork: NetworkType = {
  id: 'not-configured',
  name: 'NOT CONFIGURED',
  egldLabel: '',
  walletAddress: '',
  apiAddress: '',
  gatewayAddress: '',
  explorerAddress: ''
};

export interface InitializeNetworkConfigPayloadType {
  walletConnectBridge: string;
  walletConnectDeepLink: string;
  network: NetworkType;
}

export interface NetworkConfigStateType {
  walletConnectBridge: string;
  walletConnectDeepLink: string;
  provider: IDappProvider;
  proxy: IProvider;
  apiProvider: IApiProvider;
  network: NetworkType;
  chainID: string;
}

const initialState: NetworkConfigStateType = {
  walletConnectBridge: '',
  walletConnectDeepLink: '',
  network: defaultNetwork,
  proxy: new ProxyProvider(defaultNetwork.gatewayAddress, { timeout: 4000 }),
  provider: emptyProvider,
  apiProvider: new ApiProvider(defaultNetwork.apiAddress, { timeout: 4000 }),
  chainID: 'D'
};

export const networkConfigSlice = createSlice({
  name: 'appConfig',
  initialState: initialState,
  reducers: {
    initializeNetworkConfig: (
      state: NetworkConfigStateType,
      action: PayloadAction<InitializeNetworkConfigPayloadType>
    ) => {
      const { walletConnectBridge, walletConnectDeepLink, network } =
        action.payload;
      const proxy = new ProxyProvider(network.gatewayAddress, {
        timeout: 4000 // TODO: timeout can be moved into global config
      });
      const apiProvider = new ApiProvider(network.apiAddress, {
        timeout: 4000
      });
      state.walletConnectBridge = walletConnectBridge;
      state.walletConnectDeepLink = walletConnectDeepLink;
      state.network = network;
      state.proxy = proxy;
      state.apiProvider = apiProvider;
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
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const { initializeNetworkConfig, setChainID, setProvider } =
  networkConfigSlice.actions;

export default networkConfigSlice.reducer;
