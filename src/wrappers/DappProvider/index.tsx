import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ProviderInitializer } from 'components/ProviderInitializer';

import { setExternalProvider } from 'providers/accountProvider';
import { webviewProvider } from 'providers/webviewProvider';
import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { AppInitializer } from 'wrappers/AppInitializer';

import { CustomComponents, CustomComponentsType } from './CustomComponents';

export type DappConfigType = {
  logoutRoute?: string;
};

export interface DappProviderPropsType {
  children: React.ReactNode | ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  shouldUseWebViewProvider?: boolean;
  //we need the strings for autocomplete suggestions
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
  dappConfig?: DappConfigType;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
  shouldUseWebViewProvider,
  environment,
  customComponents,
  dappConfig
}: DappProviderPropsType) => {
  if (!environment) {
    //throw if the user tries to initialize the app without a valid environment
    throw new Error('missing environment flag');
  }

  if (externalProvider != null) {
    setExternalProvider(externalProvider);
  }
  if (shouldUseWebViewProvider) {
    setExternalProvider(webviewProvider);
  }

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppInitializer
          environment={environment as EnvironmentsEnum}
          customNetworkConfig={customNetworkConfig}
          logoutRoute={dappConfig?.logoutRoute}
        >
          <ProviderInitializer />
          <CustomComponents customComponents={customComponents} />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
