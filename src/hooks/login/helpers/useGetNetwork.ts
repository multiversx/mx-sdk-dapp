import {
  sessionNetworkStore,
  NetworkRootState,
  NetworkKeysEnum
} from '@multiversx/sdk-dapp-core/dist/store/models/network';
import { create } from 'zustand';

export const useSessionNetworkStore = create<NetworkRootState>((set) => {
  type NetworkKeys = keyof typeof NetworkKeysEnum;

  const returnObj = {};

  for (const key in NetworkKeysEnum) {
    const networkKey = NetworkKeysEnum[key as NetworkKeys];
    const currentValue = sessionNetworkStore.getState()[networkKey];
    returnObj[networkKey] =
      typeof currentValue === 'function'
        ? (data: any) => {
            // Update the vanilla store when setting count in the React store
            currentValue(data);
            // Update the React store
            set({ [networkKey]: data });
          }
        : currentValue;
  }

  return returnObj as NetworkRootState;
});

sessionNetworkStore.subscribe((newState) => {
  useSessionNetworkStore.setState(newState);
});
