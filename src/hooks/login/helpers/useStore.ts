import {
  sessionNetworkStore,
  NetworkRootState,
  NetworkKeysEnum
} from '@multiversx/sdk-dapp-core/dist/store/models/network';
import { create } from 'zustand';

// eslint-disable-next-line @typescript-eslint/ban-types
function callSetFunction<T extends Function, F extends Function>(
  originalFunction: T,
  set: F
) {
  return function (this: any, ...args: any[]) {
    set.apply(this, args);
    return originalFunction.apply(this, args);
  };
}

export const useStore = create<NetworkRootState>((set) => {
  const returnObj: any = {};

  for (const key in NetworkKeysEnum) {
    const networkKey = NetworkKeysEnum[key as keyof typeof NetworkKeysEnum];
    const currentValue = sessionNetworkStore.getState()[networkKey];

    returnObj[networkKey] =
      typeof currentValue === 'function'
        ? callSetFunction(currentValue, set)
        : currentValue;
  }

  return returnObj as NetworkRootState;
});

sessionNetworkStore.subscribe((newState) => {
  useStore.setState(newState);
});
