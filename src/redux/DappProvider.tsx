import React from 'react';
import { createDispatchHook, createSelectorHook, createStoreHook, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ProviderInitializer from 'components/ProviderInitializer';
import { NetworkConfigType } from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import SignTransactions from '../components/SignTransactions';
import TransactionSender from '../components/TransactionSender';
import TransactionsTracker from '../components/TransactionsTracker';
import NotificationModal from '../UI/NotificationModal';
import { store, persistor } from './store';

import '../assets/sass/main.scss';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  networkConfig: NetworkConfigType;
}

const defaultContextValue : any  = null;
const DappCoreContext = React.createContext(defaultContextValue);

export const useStore = createStoreHook(DappCoreContext);
export const useDispatch = createDispatchHook(DappCoreContext);
export const useSelector = createSelectorHook(DappCoreContext);

export const DappProvider = ({
  children,
  networkConfig
}: DappProviderPropsType) => (
  <Provider context={DappCoreContext} store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppInitializer networkConfig={networkConfig}>
        <ProviderInitializer />
        <SignTransactions />
        <TransactionSender />
        <TransactionsTracker />
        <NotificationModal />
        {children}
      </AppInitializer>
    </PersistGate>
  </Provider>
);
