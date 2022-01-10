import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ProviderInitializer from 'components/ProviderInitializer';
import SignTransactions from 'components/SignTransactions';
import TransactionSender from 'components/TransactionSender';
import TransactionsTracker from 'components/TransactionsTracker';
import { NetworkConfigType } from 'types';
import { TokenOptionType } from 'types/transactions';
import AppInitializer from 'wrappers/AppInitializer';

import NotificationModal from '../UI/NotificationModal';
import { store, persistor, DappCoreContext } from './store';

import '../assets/sass/main.scss';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  networkConfig: NetworkConfigType;
  tokenOptions?: TokenOptionType[];
}

export const DappProvider = ({
  children,
  networkConfig,
  tokenOptions
}: DappProviderPropsType) => (
  <Provider context={DappCoreContext} store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppInitializer networkConfig={networkConfig} tokenOptions={tokenOptions}>
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
