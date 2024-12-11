import { CrossWindowProvider } from '@multiversx/sdk-web-wallet-cross-window-provider/out';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from 'types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';

export function useCancelCrossWindowAction() {
  const { provider } = useGetAccountProvider();

  return async () => {
    if (!provider) {
      return;
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.crossWindow)) {
      const crossWindowProvider = provider as unknown as CrossWindowProvider;
      await crossWindowProvider.cancelAction();
      await crossWindowProvider.dispose();
    }
  };
}
