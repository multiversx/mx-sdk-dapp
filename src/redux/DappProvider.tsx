import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {
  getTransactionsByHashes,
  sendSignedTransactions
} from 'APICalls/transactions';
import ProviderInitializer from 'components/ProviderInitializer';
import TransactionSender from 'components/TransactionSender';
import TransactionsTracker from 'components/TransactionsTracker';
import OverrideDefaultBehaviourContext from 'contexts/OverrideDefaultBehaviourContext';
import {
  GetTransactionsByHashesType,
  SendSignedTransactionsAsyncType
} from 'contexts/types';
import { DappCoreContext } from 'redux/DappProviderContext';
import { CustomNetworkType, EnvironmentsEnum, ExtraActionsType } from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import { store, persistor } from './store';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  customNetworkConfig?: CustomNetworkType;
  extraActions?: ExtraActionsType;
  completedTransactionsDelay?: number;
  environment: 'testnet' | 'mainnet' | 'devnet';
  sendSignedTransactionsAsync?: SendSignedTransactionsAsyncType;
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  extraActions,
  completedTransactionsDelay = 0,
  environment,
  sendSignedTransactionsAsync = sendSignedTransactions,
  getTransactionsByHash = getTransactionsByHashes
}: DappProviderPropsType) => {
  const memoizedSendSignedTransactionsAsync = useCallback(
    sendSignedTransactionsAsync,
    []
  );

  if (!environment) {
    //throw if the user tries to initialize the app without a valid environment
    throw new Error('missing environment flag');
  }
  const memoizedGetTransactionsByHash = useCallback(getTransactionsByHash, []);
  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <OverrideDefaultBehaviourContext.Provider
          value={{
            sendSignedTransactionsAsync: memoizedSendSignedTransactionsAsync,
            getTransactionsByHash: memoizedGetTransactionsByHash,
            completedTransactionsDelay
          }}
        >
          <AppInitializer
            environment={environment as EnvironmentsEnum}
            customNetworkConfig={customNetworkConfig}
            extraActions={extraActions}
          >
            <ProviderInitializer />
            <TransactionSender />
            <TransactionsTracker />
            {children}
          </AppInitializer>
        </OverrideDefaultBehaviourContext.Provider>
      </PersistGate>
    </Provider>
  );
};
