import React, { useEffect, useState } from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { getServerConfiguration } from 'apiCalls';
import { fallbackNetworkConfigurations } from 'constants/network';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { initializeNetworkConfig } from 'reduxStore/slices/networkConfigSlice';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { logout } from 'utils/logout';
import { getAccountShard } from 'utils/account/getAccountShard';
import { isLoginSessionInvalidSelector } from 'reduxStore/selectors/loginInfoSelectors';

interface AppInitializerPropsType {
  customNetworkConfig?: CustomNetworkType;
  children: any;
  externalProvider?: IDappProvider;
  environment: EnvironmentsEnum;
}

export function AppInitializer({
  customNetworkConfig = {},
  children,
  environment
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
    await initializeNetwork();

    setInitialized(true);

    getAccountShard();
  }

  useEffect(() => {
    if (!address) {
      return;
    }

    getAccountShard();
  }, [address]);

  useEffect(() => {
    if (address) {
      const pubKey = new Address(address).hex();
      if (pubKey !== publicKey) {
        logout();
      }
    }
  }, [address, publicKey]);

  useEffect(() => {
    initializeApp();
  }, [customNetworkConfig, environment]);

  useEffect(() => {
    if (isLoginSessionInvalid) {
      logout();
    }
  }, [isLoginSessionInvalid]);

  return initialized ? <>{children}</> : null;
}
