import { useCallback, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useGetAccount } from 'hooks/account/useGetAccount';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { accountSelector } from 'reduxStore/selectors';
import { setWebsocketBatchEvent, setWebsocketEvent } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { BatchTransactionsWSResponseType } from 'types';
import { retryMultipleTimes } from 'utils/retryMultipleTimes';
// import { getWebsocketUrl } from 'utils/websocket/getWebsocketUrl';
// import { useGetNetworkConfig } from '../useGetNetworkConfig';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from './websocketConnection';

const TIMEOUT = 3000;
const RECONNECTION_ATTEMPTS = 3;
const RETRY_INTERVAL = 500;
const MESSAGE_DELAY = 1000;
const BATCH_UPDATED_EVENT = 'batchUpdated';
const CONNECT = 'connect';
const CONNECT_ERROR = 'connect_error';
const DISCONNECT = 'disconnect';

export function useInitializeWebsocketConnection() {
  const messageTimeout = useRef<NodeJS.Timeout | null>(null);
  const batchTimeout = useRef<NodeJS.Timeout | null>(null);
  const { address } = useGetAccount();
  const dispatch = useDispatch();
  // const { network } = useGetNetworkConfig();
  const previousAddressRef = useRef<string | undefined>(address);

  const handleMessageReceived = (message: string) => {
    if (messageTimeout.current) {
      clearTimeout(messageTimeout.current);
    }

    messageTimeout.current = setTimeout(() => {
      dispatch(setWebsocketEvent(message));
    }, MESSAGE_DELAY);
  };

  const handleBatchUpdate = (data: BatchTransactionsWSResponseType) => {
    if (batchTimeout.current) {
      clearTimeout(batchTimeout.current);
    }

    batchTimeout.current = setTimeout(() => {
      dispatch(setWebsocketBatchEvent(data));
    }, MESSAGE_DELAY);
  };

  const unsubscribeWS = () => {
    websocketConnection.current?.off(CONNECT_ERROR);
    websocketConnection.current?.off(CONNECT);
    websocketConnection.current?.off(BATCH_UPDATED_EVENT);
    websocketConnection.current?.close();
    websocketConnection.current = null;
    websocketConnection.status = WebsocketConnectionStatusEnum.NOT_INITIALIZED;

    if (messageTimeout.current) {
      clearTimeout(messageTimeout.current);
    }

    if (batchTimeout.current) {
      clearTimeout(batchTimeout.current);
    }
  };

  const retryWebsocketConnect = () => {
    setTimeout(() => {
      // Get the address from store directly to avoid closure issues related to hooks
      const { address: currentAddressAtTimeOfCall } = accountSelector(
        store.getState()
      );

      if (
        currentAddressAtTimeOfCall &&
        currentAddressAtTimeOfCall === address
      ) {
        websocketConnection.status = WebsocketConnectionStatusEnum.PENDING;
        websocketConnection.current?.connect();

        return;
      }

      if (
        websocketConnection.status === WebsocketConnectionStatusEnum.PENDING
      ) {
        websocketConnection.status =
          WebsocketConnectionStatusEnum.NOT_INITIALIZED;
      }
    }, RETRY_INTERVAL);
  };

  const initializeWebsocketConnection = useCallback(
    retryMultipleTimes(
      async () => {
        // Get the address from store directly to avoid closure issues related to hooks
        const { address: currentAddressAtTimeOfCall } = accountSelector(
          store.getState()
        );

        if (!currentAddressAtTimeOfCall) {
          websocketConnection.status =
            WebsocketConnectionStatusEnum.NOT_INITIALIZED;

          return;
        }

        // If there are many components that use this hook, the initialize method is triggered many times.
        // To avoid multiple connections to the same endpoint, we have to guard the initialization before the logic started
        websocketConnection.status = WebsocketConnectionStatusEnum.PENDING;

        const websocketUrl = 'wss://google.com';
        //network.websocketUrl ?? (await getWebsocketUrl(network.apiAddress));

        if (websocketUrl == null) {
          console.warn('Can not get websocket url');
          websocketConnection.status =
            WebsocketConnectionStatusEnum.NOT_INITIALIZED;

          return;
        }

        websocketConnection.current = io(websocketUrl, {
          forceNew: true,
          reconnection: true,
          reconnectionAttempts: RECONNECTION_ATTEMPTS,
          timeout: TIMEOUT,
          query: {
            address: currentAddressAtTimeOfCall
          }
        });

        websocketConnection.current.onAny(handleMessageReceived);

        websocketConnection.current.on(BATCH_UPDATED_EVENT, handleBatchUpdate);

        websocketConnection.current.on(CONNECT, () => {
          console.info('Websocket connected.');
          websocketConnection.status = WebsocketConnectionStatusEnum.COMPLETED;
        });

        websocketConnection.current.on(CONNECT_ERROR, (error) => {
          console.warn('Websocket connect error: ', error.message);

          if (currentAddressAtTimeOfCall) {
            retryWebsocketConnect();
          } else {
            websocketConnection.status =
              WebsocketConnectionStatusEnum.NOT_INITIALIZED;
          }
        });

        websocketConnection.current.on(DISCONNECT, () => {
          // Get fresh address value at time of disconnect
          const { address: addressAtDisconnect } = accountSelector(
            store.getState()
          );

          // Only attempt reconnect if we still have an address
          if (addressAtDisconnect) {
            console.warn('Websocket disconnected. Trying to reconnect...');
            retryWebsocketConnect();
          } else {
            console.warn('Websocket disconnected.');
            websocketConnection.status =
              WebsocketConnectionStatusEnum.NOT_INITIALIZED;
          }
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
    previousAddressRef.current = address;

    if (!address && websocketConnection.current) {
      console.info('Logged out. Unsubscribing websocket');
      unsubscribeWS();
      return;
    }

    // Only try to initialize if we have an address and aren't already connected
    if (
      address &&
      websocketConnection.status ===
        WebsocketConnectionStatusEnum.NOT_INITIALIZED &&
      !websocketConnection.current?.active
    ) {
      console.info('Logged in. Initializing websocket connection');
      initializeWebsocketConnection();
    }
  }, [address, initializeWebsocketConnection]);

  useEffect(() => {
    return () => {
      unsubscribeWS();
    };
  }, []);
}
