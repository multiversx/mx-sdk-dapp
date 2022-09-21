import { useCallback, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useGetAccount } from 'hooks/account/useGetAccount';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { setWebsocketEvent } from 'reduxStore/slices';
import { retryMultipleTimes } from 'utils/retryMultipleTimes';
import { getWebsocketUrl } from 'utils/websocket/getWebsocketUrl';
import { useGetNetworkConfig } from '../useGetNetworkConfig';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from './websocketConnection';

const TIMEOUT = 3000;
const RECONNECTION_ATTEMPTS = 3;
const RETRY_INTERVAL = 500;
const MESSAGE_DELAY = 1000;

export function useInitializeWebsocketConnection() {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const { address } = useGetAccount();

  const dispatch = useDispatch();

  const { network } = useGetNetworkConfig();

  const handleMessageReceived = (message: string) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      dispatch(setWebsocketEvent(message));
    }, MESSAGE_DELAY);
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
    [address]
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
