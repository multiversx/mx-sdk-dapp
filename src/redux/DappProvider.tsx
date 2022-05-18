import React from 'react';
import { IDappProvider } from '@elrondnetwork/erdjs/out';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { InternalComponents as DefaultInternalComponents } from 'components';
import ProviderInitializer from 'components/ProviderInitializer';
import {
  GetTransactionsByHashesType,
  SendSignedTransactionsAsyncType
} from 'contexts/types';
import { setExternalProvider } from 'providers/accountProvider';
import { DappCoreContext } from 'redux/DappProviderContext';
import { CustomNetworkType, EnvironmentsEnum } from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import { store, persistor } from './store';

interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  sendSignedTransactionsAsync?: SendSignedTransactionsAsyncType;
  getTransactionsByHash?: GetTransactionsByHashesType;
  InternalComponents?: typeof DefaultInternalComponents;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
  environment,
  InternalComponents = DefaultInternalComponents
}: DappProviderPropsType) => {
  if (!environment) {
    //throw if the user tries to initialize the app without a valid environment
    throw new Error('missing environment flag');
  }

  if (externalProvider != null) {
    setExternalProvider(externalProvider);
  }

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppInitializer
          environment={environment as EnvironmentsEnum}
          customNetworkConfig={customNetworkConfig}
        >
          <ProviderInitializer />
          <InternalComponents />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
