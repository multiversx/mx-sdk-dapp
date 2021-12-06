import { createSelector } from 'reselect';
import { RootState } from '../store';

export const networkConfigSelector = (state: RootState) => state.networkConfig;

export const proxySelector = createSelector(
  networkConfigSelector,
  (state) => state.proxy
);

export const providerSelector = createSelector(
  networkConfigSelector,
  (state) => state.provider
);

export const apiProviderSelector = createSelector(
  networkConfigSelector,
  (state) => state.apiProvider
);

export const walletConnectBridgeSelector = createSelector(
  networkConfigSelector,
  (state) => state.walletConnectBridge
);

export const walletConnectDeepLinkSelector = createSelector(
  networkConfigSelector,
  (state) => state.walletConnectDeepLink
);

export const networkSelector = createSelector(
  networkConfigSelector,
  (state) => state.network
);

export const apiNetworkSelector = createSelector(
  networkSelector,
  (state) => state.apiAddress
);

export const explorerAddressSelector = createSelector(
  networkSelector,
  (state) => state.explorerAddress
);

export const egldLabelSelector = createSelector(
  networkSelector,
  (state) => state.egldLabel
);
