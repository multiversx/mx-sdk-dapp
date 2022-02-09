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
  completedTransactionsDelay?: number;
}

export const DappProvider = ({
  children,
  networkConfig,
  extraActions,
  completedTransactionsDelay = 0
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
          <TransactionsTracker
            completedTransactionsDelay={completedTransactionsDelay}
          />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
