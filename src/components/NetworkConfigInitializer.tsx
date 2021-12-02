import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeNetworkConfig } from 'redux/slices/networkConfigSlice';
import { NetworkConfigType } from 'types';

export default function NetworkConfigInitializer({
  networkConfig
}: {
  networkConfig: NetworkConfigType;
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNetworkConfig(networkConfig));
  }, []);

  return null;
}
