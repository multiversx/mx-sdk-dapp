import { PersistConfig } from 'redux-persist/es/types';
import { ReducersEnum } from 'types/reducers';
import { createMigrate, persistReducer } from 'redux-persist';
import getRootReducer from 'reduxStore/reducers';
import { defaultNetwork } from 'reduxStore/slices';
import toasts from 'reduxStore/slices/toastsSlice';
import transactions from 'reduxStore/slices/transactionsSlice';
import transactionsInfo from 'reduxStore/slices/transactionsInfoSlice';
import {
  getPersistLocalStorage,
  getPersistSessionStorage
} from './persistStorage';

const migrations: any = {
  2: (state: any) => {
    return {
      ...state,
      networkConfig: defaultNetwork
    };
  }
};

function getSessionStoragePersistConfig(key: string, blacklist: string[] = []) {
  return {
    key,
    version: 1,
    storage: getPersistSessionStorage(),
    blacklist
  };
}

const transactionsInfoPersistConfig = getSessionStoragePersistConfig(
  'dapp-core-transactionsInfo'
);
const transactionsReducerPersistConfig = getSessionStoragePersistConfig(
  'dapp-core-transactions',
  [ReducersEnum.transactionsToSign]
);
const toastsReducerPersistConfig = getSessionStoragePersistConfig(
  'dapp-core-toasts'
);

const localStoragePersistConfig: PersistConfig<any> = {
  key: 'dapp-core-store',
  version: 2,
  storage: getPersistLocalStorage(),
  whitelist: [
    ReducersEnum.account,
    ReducersEnum.loginInfo,
    ReducersEnum.modals,
    ReducersEnum.networkConfig
  ],
  migrate: createMigrate(migrations, { debug: false })
};
const sessionStorageReducers = {
  [ReducersEnum.toasts]: persistReducer(toastsReducerPersistConfig, toasts),
  [ReducersEnum.transactions]: persistReducer(
    transactionsReducerPersistConfig,
    transactions
  ),
  [ReducersEnum.transactionsInfo]: persistReducer(
    transactionsInfoPersistConfig,
    transactionsInfo
  )
};

export default persistReducer(
  localStoragePersistConfig,
  getRootReducer(sessionStorageReducers)
);
