import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { ReducersEnum } from 'types/reducers';
import { createMigrate, persistReducer } from 'redux-persist';
import getRootReducer from 'reduxStore/reducers';
import { defaultNetwork } from 'reduxStore/slices';
import toasts from 'reduxStore/slices/toastsSlice';
import transactions from 'reduxStore/slices/transactionsSlice';
import transactionsInfo from 'reduxStore/slices/transactionsInfoSlice';
import sessionStorage from 'redux-persist/lib/storage/session';

const migrations: any = {
  2: (state: any) => {
    return {
      ...state,
      networkConfig: defaultNetwork
    };
  }
};

const transactionsInfoPersistConfig = {
  key: 'dapp-core-transactionsInfo',
  version: 1,
  storage: sessionStorage
};
const transactionsReducerPersistConfig = {
  key: 'dapp-core-transactions',
  version: 1,
  storage: sessionStorage,
  blacklist: [ReducersEnum.transactionsToSign]
};
const toastsReducerPersistConfig = {
  key: 'dapp-core-toasts',
  version: 1,
  storage: sessionStorage
};

const localStoragePersistConfig: PersistConfig<any> = {
  key: 'dapp-core-store',
  version: 2,
  storage,
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
