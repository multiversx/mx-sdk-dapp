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
  EGLDLabel: '',
  EGLDdenomination: '18',
  decimals: '4',
  gasPerDataByte: '1500',
  walletConnectDeepLink: '',
  walletConnectBridgeAddresses: '',
  walletAddress: '',
  apiAddress: '',
  explorerAddress: '',
  apiTimeout: 4000
};

export interface NetworkConfigStateType {
  provider: IDappProvider;
  proxy: IProvider;
  apiProvider: IApiProvider;
  network: NetworkType;
  chainID: string;
}

const initialState: NetworkConfigStateType = {
  network: defaultNetwork,
  proxy: new ProxyProvider(defaultNetwork.apiAddress, { timeout: 4000 }),
  apiProvider: new ApiProvider(defaultNetwork.apiAddress, { timeout: 4000 }),
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
      const network = action.payload;
      const { apiAddress } = network;

      if (apiAddress) {
        state.proxy = new ProxyProvider(apiAddress, {
          timeout: network.apiTimeout || defaultNetwork.apiTimeout
        });
        state.apiProvider = new ApiProvider(apiAddress, {
          timeout: network.apiTimeout || defaultNetwork.apiTimeout
        });
      }
      state.network = {
        ...state.network,
        ...action.payload
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
