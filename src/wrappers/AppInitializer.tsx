import { useEffect, useState } from 'react';
// import { loginAction } from 'redux/commonActions';
import { useDispatch } from 'redux/DappProviderContext';
import { initializeExtraActions } from 'redux/slices/extraActionsSlice';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
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
      extraActions.init({
        onLogin: (address, loginMethod) => {
          console.log(12, address, loginMethod);
          // dispatch(loginAction({ address, loginMethod }));
        }
      });

      dispatch(initializeExtraActions(extraActions));
    }
    setInitialized(true);
  }, [networkConfig]);

  return initialized ? children : null;
}

export default AppInitializer;
