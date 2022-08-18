import { useCallback, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { getWebsocketUrl, retryMultipleTimes } from 'utils';
import { useGetNetworkConfig } from '../useGetNetworkConfig';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from './websocketConnection';

interface UseRegisterWebsocketListenerPropsType {
  onMessage: (message: string) => void;
  address: string;
}

const TIMEOUT = 3000;
const RECONNECTION_ATTEMPTS = 3;
const RETRY_INTERVAL = 500;
const MESSAGE_DELAY = 1000;

export function useRegisterWebsocketListener({
  onMessage,
  address
}: UseRegisterWebsocketListenerPropsType) {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const { network } = useGetNetworkConfig();

  const handleMessageReceived = (message: string) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => onMessage(message), MESSAGE_DELAY);
  };

  const initializeWebsocketConnection = useCallback(
    retryMultipleTimes(
      async () => {
        // If there are many components that use this hook, the initialize method is triggered many times.
        // To avoid multiple connections to the same endpoint, we have to guard the initialization before the logic started
        websocketConnection.status = WebsocketConnectionStatusEnum.PENDING;

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

        websocketConnection.status = WebsocketConnectionStatusEnum.COMPLETED;

        websocketConnection.current.onAny((message) => {
          handleMessageReceived(message);
        });
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
      websocketConnection.status ===
        WebsocketConnectionStatusEnum.NOT_INITIALIZED &&
      !websocketConnection.current
    ) {
      initializeWebsocketConnection();
    }
  }, [address, websocketConnection.current]);

  useEffect(() => {
    return () => {
      websocketConnection.current?.close();
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
}
