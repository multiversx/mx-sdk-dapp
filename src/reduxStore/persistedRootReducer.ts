import { createMigrate, persistReducer } from 'redux-persist';
import reduxPersistLocalStorage from 'redux-persist/lib/storage';
import reduxPersistSessionStorage from 'redux-persist/lib/storage/session';
import { PersistConfig } from 'redux-persist/lib/types';
import getRootReducer from 'reduxStore/reducers';
import { defaultNetwork } from 'reduxStore/slices';
import { signedMessageInfoReducer } from 'reduxStore/slices/signedMessageInfoSlice';
import toasts from 'reduxStore/slices/toastsSlice';
import transactionsInfo from 'reduxStore/slices/transactionsInfoSlice';
import transactions from 'reduxStore/slices/transactionsSlice';
import { ReducersEnum } from 'types/reducers.types';

const migrations: any = {
  2: (state: any) => {
    return {
      ...state,
      networkConfig: defaultNetwork
    };
  }
};

export function getSessionStoragePersistConfig(
  key: string,
  blacklist: string[] = []
) {
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
const toastsReducerPersistConfig =
  getSessionStoragePersistConfig('sdk-dapp-toasts');
const signedMessageInfoersistConfig = getSessionStoragePersistConfig(
  'sdk-dapp-signedMessageInfo'
);

export const localStoragePersistConfig: PersistConfig<any> = {
  key: 'sdk-dapp-store',
  version: 2,
  storage: reduxPersistLocalStorage,
  whitelist: [
    ReducersEnum.account,
    ReducersEnum.loginInfo,
    ReducersEnum.modals,
    ReducersEnum.networkConfig
  ],
  migrate: createMigrate(migrations, { debug: false })
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
  [ReducersEnum.signedMessageInfo]: persistReducer(
    signedMessageInfoersistConfig,
    signedMessageInfoReducer
  )
};

export default persistReducer(
  localStoragePersistConfig,
  getRootReducer(sessionStorageReducers)
);
