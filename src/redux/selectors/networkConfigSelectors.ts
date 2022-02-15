import { ChainID } from '@elrondnetwork/erdjs';
import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const networkConfigSelector = (state: RootState) => state.networkConfig;

export const proxySelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.proxy
);

export const providerSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.provider
);

export const chainIDSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => new ChainID(state.chainID)
);

export const apiProviderSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.apiProvider
);

export const walletConnectBridgeAddressSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.network.walletConnectBridgeAddresses
);

export const walletConnectDeepLinkSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.network.walletConnectDeepLink
);

export const networkSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.network
);

export const apiNetworkSelector = createDeepEqualSelector(
  networkSelector,
  (state) => state.apiAddress
);

export const explorerAddressSelector = createDeepEqualSelector(
  networkSelector,
  (state) => state.explorerAddress
);

export const egldLabelSelector = createDeepEqualSelector(
  networkSelector,
  (state) => state.EGLDLabel
);
