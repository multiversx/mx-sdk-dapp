import { isMobileEnvironment, isWebEnvironment } from 'utils';

//this will make sure that when importing store in the app,
// in non-browser or mobile envs there will be no warnings/errors caused by redux-persist

const acceptPersistence = isWebEnvironment() || isMobileEnvironment();

export const reducers = acceptPersistence
  ? require('./persistedRootReducer').default
  : require('./rootReducer').default;

export const persistIgnoredActions = acceptPersistence
  ? require('./reduxPersistIgnoredActions').default
  : [];

export const persistStore = acceptPersistence
  ? require('./persistReduxStore').default
  : (store: any) => store;
