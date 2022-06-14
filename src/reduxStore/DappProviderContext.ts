import React from 'react';
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook
} from 'react-redux';

const defaultContextValue: any = null;
export const DappCoreContext = React.createContext(defaultContextValue);

export const useStore = createStoreHook(DappCoreContext);
export const useDispatch = createDispatchHook(DappCoreContext);
export const useSelector = createSelectorHook(DappCoreContext);
