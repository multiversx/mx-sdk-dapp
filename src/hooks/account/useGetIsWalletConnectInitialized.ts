import { useSelector } from 'reduxStore/DappProviderContext';
import { isWalletConnectInitializedSelector } from 'reduxStore/selectors';

export const useGetIsWalletConnectInitialized = () => {
  return useSelector(isWalletConnectInitializedSelector);
};
