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

    const typedProvider = provider as unknown as {
      cancelAction: () => Promise<boolean> | boolean;
      dispose: () => Promise<void> | void;
    };

    try {
      if (
        'cancelAction' in typedProvider &&
        typeof typedProvider.cancelAction === 'function'
      ) {
        await typedProvider.cancelAction();
      }

      if (
        'dispose' in typedProvider &&
        typeof typedProvider.dispose === 'function'
      ) {
        await typedProvider.dispose();
      }
    } catch (error) {
      console.info('Failed to cancel action and/or dispose provider: ', {
        provider,
        error
      });
    }
  };
}
