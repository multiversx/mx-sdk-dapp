import { useNetworkStore } from 'lib/sdkDappCore';
import {
  UseWebWalletLoginPropsType,
  useWebWalletLogin,
  UseWebWalletLoginReturnType
} from './useWebWalletLogin';

export const useXaliasLogin = (
  props: UseWebWalletLoginPropsType
): UseWebWalletLoginReturnType => {
  const xAliasAddress = useNetworkStore().network.xAliasAddress;
  return useWebWalletLogin({
    ...props,
    customWalletAddress: props.customWalletAddress ?? xAliasAddress
  });
};
