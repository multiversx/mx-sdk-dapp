import { useEffect, useState } from 'react';
import { loginAction } from 'redux/commonActions';
import { useDispatch } from 'redux/DappProviderContext';
// import { setProvider } from 'redux/slices';
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
          dispatch(loginAction({ address, loginMethod }));
        },
        log: (word) => {
          console.log('dapp log: ', word);
        }
      });

      dispatch(initializeExtraActions(extraActions));
    }
    setInitialized(true);
  }, [networkConfig]);

  return initialized ? children : null;
}

export default AppInitializer;
