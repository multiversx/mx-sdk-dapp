import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NetworkConfigInitializer from 'components/NetworkConfigInitializer';
import ProviderInitializer from 'components/ProviderInitializer';
import { NetworkConfigType } from 'types';

import SignTransactions from '../components/SignTransactions';
import TransactionSender from '../components/TransactionSender';
import { store, persistor } from './store';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  networkConfig: NetworkConfigType;
}

export const DappProvider = ({
  children,
  networkConfig
}: DappProviderPropsType) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <NetworkConfigInitializer networkConfig={networkConfig} />
      <ProviderInitializer />
      <SignTransactions />
      <TransactionSender />
      {children}
    </PersistGate>
  </Provider>
);
