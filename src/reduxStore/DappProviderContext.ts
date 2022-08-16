import React from 'react';
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  ReactReduxContextValue
} from 'react-redux';
import { getStore, getSubscription } from './store';

const defaultContextValue: ReactReduxContextValue = {
  store: getStore(),
  subscription: getSubscription()
};

export const DappCoreContext = React.createContext(defaultContextValue);

export const useStore = createStoreHook(DappCoreContext);
export const useDispatch = createDispatchHook(DappCoreContext);
export const useSelector = createSelectorHook(DappCoreContext);
