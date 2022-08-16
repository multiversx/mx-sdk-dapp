import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ProviderInitializer } from 'components/ProviderInitializer';

import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { getPersistor, getStore } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { AppInitializer } from 'wrappers/AppInitializer';

import { CustomComponents, CustomComponentsType } from './CustomComponents';
import { setExternalProvider } from 'providers/accountProvider';

export interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
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

  if (externalProvider != null) {
    setExternalProvider(externalProvider);
  }

  return (
    <Provider context={DappCoreContext} store={getStore()}>
      <PersistGate persistor={getPersistor()} loading={null}>
        <AppInitializer
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
