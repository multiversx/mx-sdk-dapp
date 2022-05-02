import { useEffect, useState } from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { getServerConfiguration } from 'apiCalls';
import { fallbackNetworkConfigurations } from 'constants/network';
import { useGetAccountInfo } from 'hooks';
import { initializeProxyProvider } from 'providers/proxyProvider';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { CustomNetworkType, EnvironmentsEnum, NetworkType } from 'types';
import { logout } from 'utils';
import getAccountShard from 'utils/account/getAccountShard';

interface AppInitializerPropsType {
  customNetworkConfig?: CustomNetworkType;
  children: any;
  environment: EnvironmentsEnum;
}

export function AppInitializer({
  customNetworkConfig = {},
  children,
  environment
}: AppInitializerPropsType) {
  const [initialized, setInitialized] = useState(false);
  const account = useGetAccountInfo();
  const { address, publicKey } = account;
  const dispatch = useDispatch();

  function initializeProviders(networkConfig: NetworkType) {
    initializeProxyProvider(networkConfig);
  }

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
        initializeProviders(apiConfig);
        return;
      }
    }

    dispatch(initializeNetworkConfig(localConfig));
    initializeProviders(localConfig);
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

  return initialized ? children : null;
}

export default AppInitializer;
