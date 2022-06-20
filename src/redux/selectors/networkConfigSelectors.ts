import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const networkConfigSelector = (state: RootState) => state.networkConfig;

export const chainIDSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.chainID
);

export const walletConnectBridgeAddressSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.network.walletConnectBridgeAddress
);

export const walletConnectV2RelaySelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.network.walletConnectV2RelayAddress
);

export const walletConnectV2ProjectIdSelector = createDeepEqualSelector(
  networkConfigSelector,
  (state) => state.network.walletConnectV2ProjectId
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
  (state) => state.egldLabel
);
