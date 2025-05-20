import { AccountSliceType } from './slices/account/account.types';
import { CacheSliceType } from './slices/cache/cacheSlice.types';
import { ConfigSliceType } from './slices/config/config.types';
import { LoginInfoSliceType } from './slices/loginInfo/loginInfo.types';
import { NetworkSliceType } from './slices/network/networkSlice.types';
import { ToastsSliceType } from './slices/toast/toastSlice.types';
import { TransactionsSliceType } from './slices/transactions/transactionsSlice.types';
import { UiSliceType } from './slices/ui/ui.types';

export type StoreType = {
  network: NetworkSliceType;
  account: AccountSliceType;
  loginInfo: LoginInfoSliceType;
  config: ConfigSliceType;
  toasts: ToastsSliceType;
  transactions: TransactionsSliceType;
  cache: CacheSliceType;
  ui: UiSliceType;
};

export type MutatorsIn = [
  ['zustand/devtools', never],
  ['zustand/persist', unknown],
  ['zustand/immer', never]
];

export type MutatorsOut = [
  ['zustand/devtools', never],
  ['zustand/persist', StoreType],
  ['zustand/immer', never]
];
