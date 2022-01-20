import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';

export const serializableCheck = {
  ignoredActions: [
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    'appConfig/setProvider',
    'accountInfoSlice/setAccount',
    'accountInfoSlice/setAccountNonce'
  ],
  ignoredPaths: [
    'networkConfig.proxy',
    'networkConfig.apiProvider',
    'networkConfig.provider',
    'payload.nonce',
    'account.account.nonce'
  ]
};
