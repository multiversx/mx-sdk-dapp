import { useEffect, useState } from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { getServerConfiguration } from 'apiCalls';
import { fallbackNetworkConfigurations } from 'constants/network';
import { useGetAccountInfo } from 'hooks';
import { initializeProxyProvider } from 'providers/proxyProvider';
import { loginAction } from 'redux/commonActions';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeExtraActions } from 'redux/slices/extraActionsSlice';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import {
  CustomNetworkType,
  EnvironmentsEnum,
  ExtraActionsType,
  NetworkType
} from 'types';
import { logout } from 'utils';
import getAccountShard from 'utils/account/getAccountShard';

interface AppInitializerPropsType {
  customNetworkConfig?: CustomNetworkType;
  children: any;
  environment: EnvironmentsEnum;
  extraActions?: ExtraActionsType;
}

export function AppInitializer({
  customNetworkConfig = {},
  children,
  environment,
  extraActions
}: AppInitializerPropsType) {
  const [initialized, setInitialized] = useState(false);
  const account = useGetAccountInfo();
  const { address, publicKey } = account;
  const dispatch = useDispatch();

  async function initializeNetwork() {
    const fallbackConfig = fallbackNetworkConfigurations[environment];
    if (fallbackConfig != null) {
      const newNetworkConfig = { ...fallbackConfig, ...customNetworkConfig };
      dispatch(initializeNetworkConfig(newNetworkConfig));
      initializeProviders(newNetworkConfig);
    }

    const customNetworkApiAddress = customNetworkConfig?.apiAddress;
    const fallbackApiAddress = fallbackConfig?.apiAddress;

    if (!customNetworkConfig?.skipFetchFromServer) {
      const serverConfig = await getServerConfiguration(
        customNetworkApiAddress || fallbackApiAddress
      );

      if (serverConfig != null) {
        const configFromServer = { ...fallbackConfig, ...customNetworkConfig };
        dispatch(
          initializeNetworkConfig({ ...serverConfig, ...customNetworkConfig })
        );
        initializeProviders(configFromServer);
      }
    }
  }

  function initializeProviders(networkConfig: NetworkType) {
    initializeProxyProvider(networkConfig);
  }

  function initializeCustomExtraActions() {
    if (extraActions != null) {
      try {
        extraActions?.init({
          onLogin: (address, loginMethod) => {
            dispatch(loginAction({ address, loginMethod }));
          },
          log: (word) => {
            console.log('dapp log: ', word);
          }
        });
        dispatch(initializeExtraActions(extraActions));
      } catch (err) {
        console.error('Unable to initalize extraActions', err);
      }
    }
  }

  async function initializeApp() {
    initializeCustomExtraActions();
    await initializeNetwork();
    setInitialized(true);

    //sync redux with shardId from server
    getAccountShard();
  }

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
