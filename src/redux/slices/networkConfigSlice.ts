import {
  IDappProvider,
  IProvider,
  IApiProvider,
  ProxyProvider,
  ApiProvider,
  ChainID
} from '@elrondnetwork/erdjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NetworkType } from '../../types';
import { emptyProvider } from '../../utils/provider';
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

export interface InitializeNetworkConfigPayload {
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
  network?: NetworkType;
  chainID?: ChainID;
}

const initialState = {
  walletConnectBridge: '',
  walletConnectDeepLink: '',
  network: defaultNetwork,
  proxy: new ProxyProvider(defaultNetwork.gatewayAddress, { timeout: 4000 }),
  provider: emptyProvider,
  apiProvider: new ApiProvider(defaultNetwork.apiAddress, { timeout: 4000 })
};

export const networkConfigSlice = createSlice({
  name: 'appConfig',
  initialState: initialState,
  reducers: {
    initializeNetworkConfig: (
      state: NetworkConfigStateType,
      action: PayloadAction<InitializeNetworkConfigPayload>
    ) => {
      const { walletConnectBridge, walletConnectDeepLink, network } =
        action.payload;
      const proxy = new ProxyProvider(network.gatewayAddress, {
        timeout: 4000
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
      action: PayloadAction<ChainID>
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
