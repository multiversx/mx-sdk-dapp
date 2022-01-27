import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ProviderInitializer from 'components/ProviderInitializer';
import TransactionSender from 'components/TransactionSender';
import TransactionsTracker from 'components/TransactionsTracker';
import { DappCoreContext } from 'redux/DappProviderContext';
import { NetworkConfigType, ExtraActionsType } from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import { store, persistor } from './store';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  networkConfig: NetworkConfigType;
  extraActions?: ExtraActionsType;
}

export const DappProvider = ({
  children,
  networkConfig,
  extraActions
}: DappProviderPropsType) => {
  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppInitializer
          networkConfig={networkConfig}
          extraActions={extraActions}
        >
          <ProviderInitializer />
          <TransactionSender />
          <TransactionsTracker />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
