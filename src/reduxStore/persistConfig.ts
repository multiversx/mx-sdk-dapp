import { isWebEnvironment } from 'utils/environment/isWebEnvironment';

//this will make sure that when importing store in the app,
// in non-browser or mobile envs there will be no warnings/errors caused by redux-persist

export const reducers = isWebEnvironment()
  ? require('./persistedRootReducer').default
  : require('./rootReducer').default;

export const persistIgnoredActions = isWebEnvironment()
  ? require('./reduxPersistIgnoredActions').default
  : [];

export const persistStore = isWebEnvironment()
  ? require('./persistReduxStore').default
  : (store: any) => store;
