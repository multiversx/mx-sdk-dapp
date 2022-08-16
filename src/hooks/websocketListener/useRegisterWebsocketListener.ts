import { useCallback, useEffect } from 'react';
import { io } from 'socket.io-client';
import { websocketConnection } from './websoketConnection';
import { getWebsocketUrl, retryMultipleTimes } from 'utils';
import { useGetNetworkConfig } from '../useGetNetworkConfig';

interface UseRegisterWebsocketListenerPropsType {
  onMessage: (message: string) => void;
  address: string;
}

const TIMEOUT = 3000;
const RECONNECTION_ATTEMPTS = 3;
const RETRY_INTERVAL = 500;

export function useRegisterWebsocketListener({
  onMessage,
  address
}: UseRegisterWebsocketListenerPropsType) {
  const { network } = useGetNetworkConfig();

  const initializeWebsocketConnection = useCallback(
    retryMultipleTimes(
      async () => {
        // If there are many components that use this hook, the initialize method is triggered many times.
        // To avoid multiple connections to the same endpoint, we have to guard the initialization before the logic started
        websocketConnection.status = 'pending';

        const websocketUrl = await getWebsocketUrl(network.apiAddress);

        if (websocketUrl == null) {
          console.warn('Can not get websocket url');
          return;
        }

        websocketConnection.current = io(websocketUrl, {
          forceNew: true,
          reconnectionAttempts: RECONNECTION_ATTEMPTS,
          timeout: TIMEOUT,
          query: {
            address
          }
        });

        websocketConnection.status = 'completed';

        websocketConnection.current.onAny(onMessage);
      },
      {
        retries: 2,
        delay: RETRY_INTERVAL
      }
    ),
    [address, onMessage]
  );

  useEffect(() => {
    if (
      address &&
      websocketConnection.status === 'not_initialized' &&
      !websocketConnection.current
    ) {
      initializeWebsocketConnection();
    }
  }, [address, websocketConnection.current]);

  useEffect(() => {
    return () => {
      websocketConnection.current?.close();
    };
  }, []);
}
