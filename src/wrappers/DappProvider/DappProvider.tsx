import React, { ReactElement, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ProviderInitializer } from 'components/ProviderInitializer';

import { setExternalProvider } from 'providers/accountProvider';
import { webviewProvider } from 'providers/webviewProvider';
import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { DappConfigType } from 'types/dappConfig.types';

import { CustomComponents, CustomComponentsType } from './CustomComponents';
import { isWindowAvailable } from 'utils/isWindowAvailable';

export { DappConfigType };

export interface DappProviderPropsType {
  children: React.ReactNode | ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
  dappConfig?: DappConfigType;
  enableBatchTransactions?: boolean;
}

const AppInitializerComponent = React.lazy(() =>
  import('../AppInitializer').then((module) => ({
    default: module.AppInitializer
  }))
);

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
  environment,
  customComponents,
  dappConfig,
  enableBatchTransactions
}: DappProviderPropsType) => {
  if (!environment) {
    //throw if the user tries to initialize the app without a valid environment
    throw new Error('missing environment flag');
  }

  if (externalProvider != null) {
    setExternalProvider(externalProvider);
  } else if (dappConfig?.shouldUseWebViewProvider) {
    setExternalProvider(webviewProvider);
  }

  const isSSR = !isWindowAvailable();

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {() => (
          <Suspense fallback={null}>
            <AppInitializerComponent
              environment={environment as EnvironmentsEnum}
              customNetworkConfig={customNetworkConfig}
              dappConfig={dappConfig}
              isSSR={isSSR}
            >
              <ProviderInitializer />
              <CustomComponents
                customComponents={customComponents}
                enableBatchTransactions={enableBatchTransactions}
              />
              {children}
            </AppInitializerComponent>
          </Suspense>
        )}
      </PersistGate>
    </Provider>
  );
};
