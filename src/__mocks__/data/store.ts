import { StoreType } from 'store/store.types';
import { account } from './storeData/account';
import { config } from './storeData/config';
import { loginInfo } from './storeData/loginInfo';
import { network } from './storeData/network';

export const store: StoreType = {
  network: {
    network
  },
  account,
  loginInfo,
  config,
  transactions: {},
  toasts: { customToasts: [], transactionToasts: [] },
  cache: {},
  ui: { isSidePanelOpen: false }
};
