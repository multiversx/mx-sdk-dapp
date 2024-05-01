import { createMigrate, persistReducer } from 'redux-persist';
import reduxPersistLocalStorage from 'redux-persist/lib/storage';
import reduxPersistSessionStorage from 'redux-persist/lib/storage/session';
import { PersistConfig } from 'redux-persist/lib/types';
import getRootReducer from 'reduxStore/reducers';
import account from 'reduxStore/slices/accountInfoSlice';
import batchTransactions from 'reduxStore/slices/batchTransactionsSlice';
import loginInfo from 'reduxStore/slices/loginInfoSlice';
import modals from 'reduxStore/slices/modalsSlice';
import { signedMessageInfoReducer } from 'reduxStore/slices/signedMessageInfoSlice';
import toasts from 'reduxStore/slices/toastsSlice';
import transactionsInfo from 'reduxStore/slices/transactionsInfoSlice';
import transactions from 'reduxStore/slices/transactionsSlice';
import { ReducersEnum } from 'types/reducers.types';

const config: {
  persistReducersStorageType: 'localStorage' | 'sessionStorage';
} = {
  persistReducersStorageType: 'localStorage'
};

const persistMapping = {
  [ReducersEnum.account]: 'sdk-dapp-account',
  [ReducersEnum.loginInfo]: 'sdk-dapp-login-info',
  [ReducersEnum.modals]: 'sdk-dapp-modals'
};

const accountReducerPersistConfig = getSessionStoragePersistConfig(
  persistMapping[ReducersEnum.account]
);
const loginInfReducerPersistConfig = getSessionStoragePersistConfig(
  persistMapping[ReducersEnum.loginInfo]
);
const modalsReducerPersistConfig = getSessionStoragePersistConfig(
  persistMapping[ReducersEnum.modals]
);

const migrations: any = {
  2: (state: any) => {
    return {
      ...state
    };
  }
};

function getSessionStoragePersistConfig(key: string, blacklist: string[] = []) {
  return {
    key,
    version: 1,
    storage: reduxPersistSessionStorage,
    blacklist
  };
}

const transactionsInfoPersistConfig = getSessionStoragePersistConfig(
  'sdk-dapp-transactionsInfo'
);
const transactionsReducerPersistConfig = getSessionStoragePersistConfig(
  'sdk-dapp-transactions',
  [ReducersEnum.transactionsToSign]
);
const batchTransactionsReducerPersistConfig = getSessionStoragePersistConfig(
  'sdk-dapp-batchTransactions',
  [ReducersEnum.batchTransactions]
);
const toastsReducerPersistConfig =
  getSessionStoragePersistConfig('sdk-dapp-toasts');
const signedMessageInfoersistConfig = getSessionStoragePersistConfig(
  'sdk-dapp-signedMessageInfo'
);

const localStoragePersistConfig: PersistConfig<any> = {
  key: 'sdk-dapp-store',
  version: 2,
  storage: reduxPersistLocalStorage,
  whitelist: Object.keys(persistMapping),
  migrate: createMigrate(migrations, { debug: false })
};

const emptyLocalStoragePersistConfig = {
  ...localStoragePersistConfig,
  whitelist: []
};

export const sessionStorageReducers = {
  [ReducersEnum.toasts]: persistReducer(toastsReducerPersistConfig, toasts),
  [ReducersEnum.transactions]: persistReducer(
    transactionsReducerPersistConfig,
    transactions
  ),
  [ReducersEnum.transactionsInfo]: persistReducer(
    transactionsInfoPersistConfig,
    transactionsInfo
  ),
  [ReducersEnum.batchTransactions]: persistReducer(
    batchTransactionsReducerPersistConfig,
    batchTransactions
  ),
  [ReducersEnum.signedMessageInfo]: persistReducer(
    signedMessageInfoersistConfig,
    signedMessageInfoReducer
  )
};

const fullSessionReducers = {
  ...sessionStorageReducers,
  [ReducersEnum.account]: persistReducer(accountReducerPersistConfig, account),
  [ReducersEnum.loginInfo]: persistReducer(
    loginInfReducerPersistConfig,
    loginInfo
  ),
  [ReducersEnum.modals]: persistReducer(modalsReducerPersistConfig, modals)
};

const isPersistToLocalStorage =
  config.persistReducersStorageType === 'localStorage';

const persistedReducer = isPersistToLocalStorage
  ? persistReducer(
      localStoragePersistConfig,
      getRootReducer(sessionStorageReducers)
    )
  : persistReducer(
      emptyLocalStoragePersistConfig,
      getRootReducer(fullSessionReducers)
    );

export default persistedReducer;
