import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {
  getTransactionsByHashes,
  sendSignedTransactions
} from 'apiCalls/transactions';
import ProviderInitializer from 'components/ProviderInitializer';
import TransactionSender from 'components/TransactionSender';
import TransactionsTracker from 'components/TransactionsTracker';
import OverrideDefaultBehaviourContext from 'contexts/OverrideDefaultBehaviourContext';
import {
  GetTransactionsByHashesType,
  SendSignedTransactionsAsyncType
} from 'contexts/types';
import { setExternalProvider } from 'providers/accountProvider';
import { DappCoreContext } from 'redux/DappProviderContext';
import {
  CustomNetworkType,
  EnvironmentsEnum,
  ExternalProviderType
} from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import { store, persistor } from './store';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: ExternalProviderType;
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  sendSignedTransactionsAsync?: SendSignedTransactionsAsyncType;
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
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

  if (externalProvider != null) {
    setExternalProvider(externalProvider);
  }

  const memoizedGetTransactionsByHash = useCallback(getTransactionsByHash, []);
  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <OverrideDefaultBehaviourContext.Provider
          value={{
            sendSignedTransactionsAsync: memoizedSendSignedTransactionsAsync,
            getTransactionsByHash: memoizedGetTransactionsByHash
          }}
        >
          <AppInitializer
            environment={environment as EnvironmentsEnum}
            customNetworkConfig={customNetworkConfig}
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
