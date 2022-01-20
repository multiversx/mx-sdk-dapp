import { useCallback } from 'react';
import Timeout = NodeJS.Timeout;
import { useOnLogoutCallback } from './useOnLogoutCallback';

export const useWalletConnectorCallback = (callbackUrl: string) => {
  let heartbeatDisconnectInterval: Timeout;
  const onLogout = useOnLogoutCallback(callbackUrl);

  return useCallback(() => {
    clearInterval(heartbeatDisconnectInterval);
    heartbeatDisconnectInterval = setInterval(() => {
      console.log('Maiar Wallet Connection Lost');
      onLogout();
      clearInterval(heartbeatDisconnectInterval);
    }, 150000);
  }, [onLogout]);
};
