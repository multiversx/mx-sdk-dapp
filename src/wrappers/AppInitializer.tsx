import { useEffect, useState } from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { useGetAccountInfo } from 'hooks';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { NetworkConfigType } from 'types';
import { logout } from 'utils';
import getAccountShard from 'utils/account/getAccountShard';

export function AppInitializer({
  networkConfig,
  children
}: {
  networkConfig: NetworkConfigType;
  children: any;
}) {
  const [initialized, setInitialized] = useState(false);
  const account = useGetAccountInfo();
  const { address, publicKey } = account;
  const dispatch = useDispatch();

  async function initializeApp() {
    dispatch(initializeNetworkConfig(networkConfig));
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
  }, [networkConfig]);

  return initialized ? children : null;
}

export default AppInitializer;
