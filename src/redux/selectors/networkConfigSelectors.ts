import { RootState } from '../store';
import { createSelector } from 'reselect';

export const networkConfigSelector = (state: RootState) => state.networkConfig;

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

