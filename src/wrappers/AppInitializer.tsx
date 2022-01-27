import { useEffect, useState } from 'react';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { initializeExtraActions } from 'redux/slices/extraActionsSlice';
import { ExtraActionsType, NetworkConfigType } from 'types';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNetworkConfig(networkConfig));
    if (extraActions !== undefined) {
      dispatch(initializeExtraActions(extraActions));
    }
    setInitialized(true);
  }, [networkConfig, extraActions]);

  return initialized ? children : null;
}

export default AppInitializer;
