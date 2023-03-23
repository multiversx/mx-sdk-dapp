import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { AppInitializer } from 'wrappers/AppInitializer';

import { CustomComponentsType } from './CustomComponents';
import { ProviderInitializer } from './ProviderInitializer';

export type DappNewConfigType = {
  logoutRoute?: string;
  shouldUseWebViewProvider?: boolean;
};

export interface DappNewProviderPropsType {
  children: React.ReactNode | ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
  dappConfig?: DappNewConfigType;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  // externalProvider,
  environment,
  // customComponents,
  dappConfig
}: DappNewProviderPropsType) => {
  console.log({
    customNetworkConfig,
    environment,
    dappConfig
  });

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppInitializer
          environment={environment as EnvironmentsEnum}
          customNetworkConfig={customNetworkConfig}
          logoutRoute={dappConfig?.logoutRoute}
        >
          <ProviderInitializer />
          <>CHILDREN---4: {children}</>
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
