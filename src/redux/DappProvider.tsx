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
import { NetworkConfigType } from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import { store, persistor } from './store';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  networkConfig: NetworkConfigType;
  completedTransactionsDelay?: number;
  signWithoutSending?: boolean;
  sendSignedTransactionsAsync?: SendSignedTransactionsAsyncType;
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export const DappProvider = ({
  children,
  networkConfig,
  completedTransactionsDelay = 0,
  signWithoutSending = false,
  sendSignedTransactionsAsync = sendSignedTransactions,
  getTransactionsByHash = getTransactionsByHashes
}: DappProviderPropsType) => {
  const memoizedSendSignedTransactionsAsync = useCallback(
    sendSignedTransactionsAsync,
    []
  );

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
          <AppInitializer networkConfig={networkConfig}>
            <ProviderInitializer />
            {!signWithoutSending && <TransactionSender />}
            <TransactionsTracker />
            {children}
          </AppInitializer>
        </OverrideDefaultBehaviourContext.Provider>
      </PersistGate>
    </Provider>
  );
};
