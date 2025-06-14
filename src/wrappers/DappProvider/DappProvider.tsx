import React, { ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProviderInitializer } from 'components/ProviderInitializer/ProviderInitializer';
import { setExternalProvider } from 'providers/accountProvider';
import { useInitiateExperimentalWebviewLogin } from 'providers/experimentalWebViewProvider/useInitiateExperimentalWebviewLogin';
import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { persistor, store } from 'reduxStore/store';
import { CustomNetworkType, IDappProvider, DappConfigType } from '../../types';
import {
  AppInitializer,
  UseAppInitializerPropsType
} from './../../wrappers/AppInitializer';
import { CustomComponents, CustomComponentsType } from './CustomComponents';

export { DappConfigType };

export interface DappProviderPropsType {
  children: React.ReactNode | ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
  environment: UseAppInitializerPropsType['environment'];
  customComponents?: CustomComponentsType;
  dappConfig?: DappConfigType;
}

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

  const experimentalWebviewLogin = useInitiateExperimentalWebviewLogin();

  useEffect(() => {
    if (externalProvider != null) {
      setExternalProvider(externalProvider);
    } else if (dappConfig?.shouldUseWebViewProvider) {
      experimentalWebviewLogin();
    }
  }, []);

  return (
    <Provider context={DappCoreContext} store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {() => (
          <AppInitializer
            environment={environment}
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
