import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from 'types';
import { DappCoreWCV2EventsEnum } from 'types/enums';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';

export function useCancelWalletConnectAction(action?: string) {
  const {
    provider
  }: {
    provider: any;
  } = useGetAccountProvider();

  async function cancelWalletConnectAction() {
    if (!provider) {
      return;
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.walletconnect)) {
      await cancelAction();
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)) {
      await cancelAction();
    }

    return;
  }

  async function cancelAction() {
    try {
      if (!provider || !getIsProviderEqualTo(LoginMethodsEnum.walletconnect)) {
        return;
      }

      const isProviderConnected = Boolean(provider?.walletConnector?.connected);
      if (!isProviderConnected) {
        return;
      }

      const customMessage = {
        method: 'erd_cancelAction',
        params: { action }
      };

      await provider.sendCustomMessage(customMessage);
    } catch (error) {
      console.warn('Unable to send cancelAction event', error);
    } finally {
      return;
    }
  }

  async function cancelActionV2() {
    try {
      if (
        !provider ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)
      ) {
        return;
      }

      await provider?.sendSessionEvent({
        event: {
          name: DappCoreWCV2EventsEnum.erd_cancelAction,
          data: { action }
        }
      });
    } catch (err) {
      console.warn(err);
    } finally {
      return;
    }
  }

  return { cancelAction, cancelActionV2, cancelWalletConnectAction };
}
