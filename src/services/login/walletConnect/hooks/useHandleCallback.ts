import { useCallback } from 'react';
import { useSelector } from '../../../../redux/DappProviderContext';
import { providerSelector } from '../../../../redux/selectors';
import { handleOnLogout } from './handleOnLogout';

export const useHandleCallback = () => {
  const provider: any = useSelector(providerSelector);

  return useCallback(() => {
    async function handleHeartbeat() {
      const isProviderConnected = Boolean(provider.walletConnector?.connected);

      if (!isProviderConnected) return;

      const customMessage = {
        method: 'heartbeat',
        params: {}
      };

      try {
        await provider.sendCustomMessage(customMessage);
      } catch (error) {
        alert('lost');
        console.error('Connection lost', error);
        handleOnLogout();
      }
    }

    handleHeartbeat();
  }, [provider]);
};
