import { useEffect, useState } from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { useGetAccountInfo } from 'hooks';
import { loginAction } from 'redux/commonActions';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeExtraActions } from 'redux/slices/extraActionsSlice';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { ExtraActionsType, NetworkConfigType } from 'types';
import { logout } from 'utils';
import getAccountShard from 'utils/account/getAccountShard';

export function AppInitializer({
  networkConfig,
  extraActions,
  children
}: {
  networkConfig: NetworkConfigType;
  children: any;
  extraActions?: ExtraActionsType;
}) {
  const [initialized, setInitialized] = useState(false);
  const account = useGetAccountInfo();
  const { address, publicKey } = account;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNetworkConfig(networkConfig));
    if (extraActions != null) {
      extraActions.init({
        onLogin: (address, loginMethod) => {
          dispatch(loginAction({ address, loginMethod }));
        },
        log: (word) => {
          console.log('dapp log: ', word);
        }
      });

      dispatch(initializeExtraActions(extraActions));
    }

    //sync redux with shardId from server
    getAccountShard();

    setInitialized(true);
  }, [networkConfig]);

  useEffect(() => {
    if (address) {
      const pubKey = new Address(address).hex();
      if (pubKey !== publicKey) {
        logout();
      }
    }
  }, [address, publicKey]);

  return initialized ? children : null;
}

export default AppInitializer;
