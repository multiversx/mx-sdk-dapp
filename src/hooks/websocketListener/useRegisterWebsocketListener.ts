import { useEffect } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import { websocketEventSelector } from 'reduxStore/selectors';
import { useInitializeWebsocketConnection } from './useInitializeWebsocketConnection';

export function useRegisterWebsocketListener(
  onMessage: (message: string) => void
) {
  useInitializeWebsocketConnection();

  const websocketEvent = useSelector(websocketEventSelector);

  useEffect(() => {
    const message = websocketEvent?.message;
    if (message) {
      onMessage(message);
    }
  }, [onMessage, websocketEvent]);
}
