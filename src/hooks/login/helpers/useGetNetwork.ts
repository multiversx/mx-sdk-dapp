import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

enum NetworkKeysEnum {
  environment = 'environment',
  count = 'count',
  setCount = 'setCount',
  setEnvironment = 'setEnvironment'
}

type ConfigType = {
  [NetworkKeysEnum.environment]: 'devnet' | 'mainnet' | 'testnet';
};

type RootState = {
  [NetworkKeysEnum.environment]: ConfigType['environment'];
  [NetworkKeysEnum.count]: number;
  [NetworkKeysEnum.setEnvironment]: (
    newEnv?: ConfigType['environment']
  ) => void;
  [NetworkKeysEnum.setCount]: (newCount?: number) => void;
};

export const definition = (
  set: (
    partial:
      | RootState
      | Partial<RootState>
      | ((state: RootState) => RootState | Partial<RootState>),
    replace?: boolean | undefined
  ) => void
): RootState => ({
  [NetworkKeysEnum.environment]: 'devnet',
  [NetworkKeysEnum.count]: 1,
  [NetworkKeysEnum.setEnvironment]: () =>
    set((state) => ({
      ...state,
      environment:
        state[NetworkKeysEnum.environment] === 'mainnet' ? 'devnet' : 'mainnet'
    })),
  [NetworkKeysEnum.setCount]: () =>
    set((state) => ({
      ...state,
      count: state[NetworkKeysEnum.count] + 1
    }))
});

export const sessionNetworkStore = createStore<RootState>()(
  devtools(
    persist(definition, {
      name: 'sessionNetworkStore',
      storage: createJSONStorage(() => sessionStorage)
    })
  )
);

export const useSessionNetworkStore = create<RootState>((set) => {
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

  return returnObj as RootState;
});

sessionNetworkStore.subscribe((newState) => {
  useSessionNetworkStore.setState(newState);
});

export const initializeNetworkStore = (config: ConfigType) => {
  // It will not trigger a react rerender
  sessionNetworkStore.setState(config);
};
