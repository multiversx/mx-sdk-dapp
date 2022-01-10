import { useEffect, useState } from 'react';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { useDispatch } from 'redux/store';
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
    await dispatch(initializeNetworkConfig(networkConfig)); // TODO: maybe remove await?
    setInitialized(true);
  }
  useEffect(() => {
    initializeApp();
  }, [networkConfig]);

  return initialized ? children : null;
}
