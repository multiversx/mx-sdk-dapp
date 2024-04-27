import {
  sessionNetworkStore,
  RootState,
  KeysEnum
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

// Immer working
export const useStore = create<RootState>((set) => {
  const returnObj: any = {};

  for (const key in KeysEnum) {
    const networkKey = KeysEnum[key as keyof typeof KeysEnum];
    const currentValue = sessionNetworkStore.getState()[networkKey];

    returnObj[networkKey] =
      typeof currentValue === 'function'
        ? callSetFunction(currentValue, set)
        : currentValue;
  }

  return returnObj as RootState;
});

sessionNetworkStore.subscribe((newState) => {
  useStore.setState(newState);
});
