import * as account from '@multiversx/sdk-dapp-core/dist/store/models/account';
import * as network from '@multiversx/sdk-dapp-core/dist/store/models/network';
import { StoreType } from '@multiversx/sdk-dapp-core/dist/store/store';
import { create } from 'zustand';

const store = {
  [account.namespace]: account.store,
  [network.namespace]: network.store
};

const keys = {
  [account.namespace]: { ...account.KeysEnum },
  [network.namespace]: { ...network.KeysEnum }
};

const initialState = {
  ...account.initialState,
  ...network.initialState
};

console.log({ keys });

// eslint-disable-next-line @typescript-eslint/ban-types
function callSetFunction<T extends Function, F extends Function>(
  originalFunction: T,
  set: F
) {
  return function (this: any, ...args: any[]) {
    console.log({
      originalFunction,
      set,
      args
    });

    set.apply(this, args);
    return originalFunction.apply(this, args);
  };
}

export const useStore = create<StoreType>((set) => {
  const returnObj: any = {};

  for (const storeKey of Object.keys(store)) {
    const currentStore = store[storeKey as keyof StoreType];
    returnObj[storeKey] = {};

    const currentState = currentStore.getState();

    for (const key of Object.keys(initialState[storeKey])) {
      const currentValue = initialState[storeKey][key];

      console.log({
        currentValue,
        key,
        storeKey,
        currentState
      });

      returnObj[storeKey][key] =
        typeof currentValue === 'function'
          ? callSetFunction(currentValue, set)
          : currentValue;
    }
  }

  console.log({ returnObj });

  return returnObj as StoreType;
});

for (const storeKey of Object.keys(store)) {
  const currentStore = store[storeKey as keyof typeof store];
  console.log({
    storeKey,
    currentStore
  });

  currentStore.subscribe((newState) => {
    useStore[storeKey].setState(newState);
  });
}
