import { useSelector } from 'reduxStore/DappProviderContext';
import { isWalletConnectV2InitializedSelector } from 'reduxStore/selectors';

export const useGetIsWalletConnectV2Initialized = () => {
  return useSelector(isWalletConnectV2InitializedSelector);
};
