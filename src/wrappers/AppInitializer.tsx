import React, { useEffect, useState } from 'react';
import { Address } from '@multiversx/sdk-core/out';

import { getServerConfiguration } from 'apiCalls';
import { fallbackNetworkConfigurations } from 'constants/network';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { isLoginSessionInvalidSelector } from 'reduxStore/selectors/loginInfoSelectors';
import { initializeNetworkConfig } from 'reduxStore/slices/networkConfigSlice';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { logout } from 'utils/logout';
import { setLogoutRoute } from 'reduxStore/slices/loginInfoSlice';

export interface AppInitializerPropsType {
  customNetworkConfig?: CustomNetworkType;
  children: any;
  externalProvider?: IDappProvider;
  environment: EnvironmentsEnum;
  logoutRoute?: string;
}

export function AppInitializer({
  customNetworkConfig = {},
  children,
  environment,
  logoutRoute,
}: AppInitializerPropsType) {
  const [initialized, setInitialized] = useState(false);
  const account = useGetAccountInfo();
  const isLoginSessionInvalid = useSelector(isLoginSessionInvalidSelector);

  const { address, publicKey } = account;
  const dispatch = useDispatch();

  async function initializeNetwork() {
    const fetchConfigFromServer = !customNetworkConfig?.skipFetchFromServer;
    const customNetworkApiAddress = customNetworkConfig?.apiAddress;
    const fallbackConfig = fallbackNetworkConfigurations[environment] || {};

    const localConfig = {
      ...fallbackConfig,
      ...customNetworkConfig
    };

    if (fetchConfigFromServer) {
      const fallbackApiAddress = fallbackConfig?.apiAddress;

      const serverConfig = await getServerConfiguration(
        customNetworkApiAddress || fallbackApiAddress
      );

      if (serverConfig != null) {
        const apiConfig = {
          ...fallbackConfig,
          ...serverConfig,
          ...customNetworkConfig
        };
        dispatch(initializeNetworkConfig(apiConfig));
        return;
      }
    }

    dispatch(initializeNetworkConfig(localConfig));
  }

  async function initializeApp() {
    dispatch(setLogoutRoute(logoutRoute))
    await initializeNetwork();

    setInitialized(true);
  }

  useEffect(() => {
    if (address) {
      const pubKey = new Address(address).hex();
      if (pubKey !== publicKey) {
        logout(logoutRoute);
      }
    }
  }, [address, publicKey, logoutRoute]);

  useEffect(() => {
    initializeApp();
  }, [customNetworkConfig, environment, logoutRoute]);

  useEffect(() => {
    if (account.address && isLoginSessionInvalid) {
      logout(logoutRoute);
    }
  }, [isLoginSessionInvalid, account.address, logoutRoute]);

  return initialized ? <>{children}</> : null;
}

