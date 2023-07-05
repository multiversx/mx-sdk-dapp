import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from 'types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { WalletConnectOptionalMethodsEnum } from 'utils/walletconnect/__sdkWalletconnectProvider';

export function useCancelWalletConnectAction(action?: string) {
  const { provider } = useGetAccountProvider();

  async function cancelWalletConnectAction() {
    if (!provider) {
      return;
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)) {
      await cancelActionV2();
    }

    return;
  }

  async function cancelActionV2() {
    try {
      if (
        !provider ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)
      ) {
        return;
      }

      await provider?.sendCustomRequest?.({
        request: {
          method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
          params: { action }
        }
      });
    } catch (error) {
      console.warn('WalletConnectV2: Unable to send cancelAction event', error);
    }
  }

  return { cancelActionV2, cancelWalletConnectAction };
}
