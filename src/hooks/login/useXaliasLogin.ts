import { useSelector } from 'reduxStore/DappProviderContext';
import { xAliasAddressSelector } from 'reduxStore/selectors';
import {
  UseWebWalletLoginPropsType,
  useWebWalletLogin,
  UseWebWalletLoginReturnType
} from './useWebWalletLogin';

export const useXaliasLogin = (
  props: UseWebWalletLoginPropsType
): UseWebWalletLoginReturnType => {
  const xAliasAddress = useSelector(xAliasAddressSelector);
  return useWebWalletLogin({
    ...props,
    customWalletAddress: props.customWalletAddress ?? xAliasAddress
  });
};
