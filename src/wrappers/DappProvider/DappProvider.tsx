import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProviderInitializer } from 'components/ProviderInitializer/ProviderInitializer';
import { setExternalProvider } from 'providers/accountProvider';
import { ExperimentalWebviewProvider } from 'providers/experimentalWebViewProvider/ExperimentalWebviewProvider';
import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { setWebviewLogin } from 'reduxStore/slices';
import { persistor, store } from 'reduxStore/store';
import { getAccessTokenFromSearchParams } from 'utils/account/getAccessTokenFromSearchParams';
import { CustomNetworkType, IDappProvider, DappConfigType } from '../../types';
import {
  AppInitializer,
  UseAppInitializerPropsType
} from './../../wrappers/AppInitializer';
import { CustomComponents, CustomComponentsType } from './CustomComponents';

export { DappConfigType };

console.log('TEST');

const setWebviewProvider = () => {
  const providerInstance = ExperimentalWebviewProvider.getInstance();

  const accessToken = getAccessTokenFromSearchParams();
  setWebviewLogin({
    data: accessToken
  });

  providerInstance.init?.();
  setExternalProvider(providerInstance);
};

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
