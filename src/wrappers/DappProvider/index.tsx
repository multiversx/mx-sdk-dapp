import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ProviderInitializer from 'components/ProviderInitializer';

import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { IDappProvider } from 'types';
import { CustomNetworkType, EnvironmentsEnum } from 'types';
import AppInitializer from 'wrappers/AppInitializer';

import { CustomComponents, CustomComponentsType } from './CustomComponents';

export interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
  environment,
  customComponents
}: DappProviderPropsType) => {
  if (!environment) {
    //throw if the user tries to initialize the app without a valid environment
    throw new Error('missing environment flag');
  }

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppInitializer
          externalProvider={externalProvider}
          environment={environment as EnvironmentsEnum}
          customNetworkConfig={customNetworkConfig}
        >
          <ProviderInitializer />
          <CustomComponents customComponents={customComponents} />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};

export default DappProvider;
