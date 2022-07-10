import { PersistConfig } from 'redux-persist/es/types';
import { ReducersEnum } from 'types/reducers';
import { createMigrate, persistReducer } from 'redux-persist';
import getRootReducer from 'reduxStore/reducers';
import { defaultNetwork } from 'reduxStore/slices';
import toasts from 'reduxStore/slices/toastsSlice';
import transactions from 'reduxStore/slices/transactionsSlice';
import transactionsInfo from 'reduxStore/slices/transactionsInfoSlice';

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
  storage: require('redux-persist/lib/storage/session')
};
const transactionsReducerPersistConfig = {
  key: 'dapp-core-transactions',
  version: 1,
  storage: require('redux-persist/lib/storage/session'),
  blacklist: [ReducersEnum.transactionsToSign]
};
const toastsReducerPersistConfig = {
  key: 'dapp-core-toasts',
  version: 1,
  storage: require('redux-persist/lib/storage/session')
};

const localStoragePersistConfig: PersistConfig<any> = {
  key: 'dapp-core-store',
  version: 2,
  storage: require('redux-persist/lib/storage'),
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
