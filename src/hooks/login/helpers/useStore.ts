import * as network from '@multiversx/sdk-dapp-core/dist/store/models/network';
import { StoreApi, UseBoundStore, create } from 'zustand';

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

function buildStore<T, K, S extends StoreApi<T>>({
  KeysEnum,
  store
}: {
  KeysEnum: K;
  store: S;
}) {
  const useStore = create<T>((set) => {
    const returnObj: any = {};

    for (const key in KeysEnum) {
      const currentKey = KeysEnum[key as keyof typeof KeysEnum];
      const currentValue = (store as any).getState()[currentKey];

      returnObj[currentKey] =
        typeof currentValue === 'function'
          ? callSetFunction(currentValue, set)
          : currentValue;
    }

    return returnObj as T;
  });

  store.subscribe((newState) => {
    useStore.setState(newState);
  });

  return useStore as UseBoundStore<StoreApi<ReturnType<typeof store.getState>>>;
}

export const useStore = buildStore(network);
