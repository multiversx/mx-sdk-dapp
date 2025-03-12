import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from 'types/enums.types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { useCancelWalletConnectAction } from './useCancelWalletConnectAction';

export function useCancelActionAndDispose() {
  const { provider } = useGetAccountProvider();
  const { cancelWalletConnectAction } = useCancelWalletConnectAction();

  return async () => {
    if (!provider) {
      return;
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)) {
      await cancelWalletConnectAction();
      return;
    }

    try {
      if (
        'cancelAction' in provider &&
        typeof provider.cancelAction === 'function'
      ) {
        await provider.cancelAction();
      }

      if ('dispose' in provider && typeof provider.dispose === 'function') {
        await provider.dispose();
      }
    } catch (error) {
      console.info('Failed to cancel action and/or dispose provider: ', {
        provider,
        error
      });
    }
  };
}
