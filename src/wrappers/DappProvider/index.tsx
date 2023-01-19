import React, { ReactElement, ReactChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ProviderInitializer } from 'components/ProviderInitializer';

import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { AppInitializer } from 'wrappers/AppInitializer';

import { CustomComponents, CustomComponentsType } from './CustomComponents';
import { setExternalProvider } from 'providers/accountProvider';

export interface DappProviderPropsType {
  children: ReactChildren | ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
  autoLogoutCallbackUrl?: string;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
  environment,
  customComponents,
  autoLogoutCallbackUrl
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
          autoLogoutCallbackUrl={autoLogoutCallbackUrl}
        >
          <ProviderInitializer />
          <CustomComponents customComponents={customComponents} />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
