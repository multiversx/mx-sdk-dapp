import { useEffect, useState } from 'react';
import { useDispatch } from 'redux/DappProvider';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { NetworkConfigType } from 'types';

export default function AppInitializer({
  networkConfig,
  children
}: {
  networkConfig: NetworkConfigType;
  children: any;
}) {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  async function initializeApp() {
    dispatch(initializeNetworkConfig(networkConfig));
    setInitialized(true);
  }
  useEffect(() => {
    initializeApp();
  }, [networkConfig]);

  return initialized ? children : null;
}
