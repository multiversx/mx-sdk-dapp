import React, { ReactElement } from 'react';
import { Logger } from '@multiversx/sdk-dapp-core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProviderInitializer } from 'components/ProviderInitializer/ProviderInitializer';
import { setExternalProvider } from 'providers/accountProvider';
import { ExperimentalWebviewProvider } from 'providers/experimentalWebViewProvider/ExperimentalWebviewProvider';
import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { DappConfigType } from 'types/dappConfig.types';
import { AppInitializer } from 'wrappers/AppInitializer';
import { CustomComponents, CustomComponentsType } from './CustomComponents';

export { DappConfigType };

const setWebviewProvider = () => {
  const providerInstance = ExperimentalWebviewProvider.getInstance();
  providerInstance.init?.();
  setExternalProvider(providerInstance);
};

export interface DappProviderPropsType {
  children: React.ReactNode | ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
  dappConfig?: DappConfigType;
}
Logger.log('DappProvider.tsx');

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
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
  } else if (dappConfig?.shouldUseWebViewProvider) {
    setWebviewProvider();
  }

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {() => (
          <AppInitializer
            environment={environment as EnvironmentsEnum}
            customNetworkConfig={customNetworkConfig}
            dappConfig={dappConfig}
          >
            <ProviderInitializer />
            <CustomComponents customComponents={customComponents} />
            {children}
          </AppInitializer>
        )}
      </PersistGate>
    </Provider>
  );
};
