import { useEffect, useState } from 'react';
import { setTokenOptions } from 'redux/slices';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { NetworkConfigType } from 'types';
import { TokenOptionType } from '../types/transactions';

import { useDispatch } from 'redux/store';

export default function AppInitializer({
  networkConfig,
  tokenOptions,
  children
}: {
  networkConfig: NetworkConfigType;
  tokenOptions?: TokenOptionType[];
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

  useEffect(() => {
    tokenOptions != null && dispatch(setTokenOptions(tokenOptions));
  }, [tokenOptions]);

  return initialized ? children : null;
}
