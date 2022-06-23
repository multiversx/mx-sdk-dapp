import React from 'react';
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  ReactReduxContextValue
} from 'react-redux';
import { store, subscription } from './store';

const defaultContextValue: ReactReduxContextValue = {
  store,
  subscription
};

export const DappCoreContext = React.createContext(defaultContextValue);

export const useStore = createStoreHook(DappCoreContext);
export const useDispatch = createDispatchHook(DappCoreContext);
export const useSelector = createSelectorHook(DappCoreContext);
