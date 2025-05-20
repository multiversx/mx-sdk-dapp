import { NetworkType } from 'types/network.types';
import { getStore } from '../../store';

export const initializeNetworkConfig = (newNetwork: NetworkType) =>
  getStore().setState(
    ({ network: state }) => {
      state.network = {
        ...state.network,
        ...newNetwork
      };
    },
    false,
    'initializeNetworkConfig'
  );

export { initializeNetwork } from './initializeNetwork';
