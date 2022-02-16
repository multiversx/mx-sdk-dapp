import { useEffect, useState } from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { getServerConfiguration } from 'APICalls/configuration/getServerConfiguration';
import { fallbackConfigurations } from 'constants/network';
import { useGetAccountInfo } from 'hooks';
import { loginAction } from 'redux/commonActions';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeExtraActions } from 'redux/slices/extraActionsSlice';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { CustomNetworkType, EnvironmentsEnum, ExtraActionsType } from 'types';
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
    const fallbackConfig = fallbackConfigurations[environment];
    if (fallbackConfig != null) {
      dispatch(
        initializeNetworkConfig({ ...fallbackConfig, ...customNetworkConfig })
      );
    }
    const serverConfig = await getServerConfiguration(environment);
    if (serverConfig != null) {
      dispatch(
        initializeNetworkConfig({ ...serverConfig, ...customNetworkConfig })
      );
    }
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
