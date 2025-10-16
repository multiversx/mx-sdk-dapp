import { io } from 'socket.io-client';
import { getWebsocketUrl } from 'apiCalls/websocket';
import {
  WebsocketConnectionStatusEnum,
  websocketConnection
} from 'constants/websocket.constants';
import {
  setWebsocketBatchEvent,
  setWebsocketEvent
} from 'store/actions/account/accountActions';
import { setWebsocketStatus } from 'store/actions/config/configActions';
import { networkSelector } from 'store/selectors';
import { getStore } from 'store/store';
import { BatchTransactionsWSResponseType } from 'types/websocket.types';

const TIMEOUT = 3_000;
const RECONNECTION_ATTEMPTS = 3;
const RETRY_INTERVAL = 500;
const MESSAGE_DELAY = 500;
const BATCH_UPDATED_EVENT = 'batchUpdated';
const CONNECT = 'connect';
const CONNECT_ERROR = 'connect_error';
const DISCONNECT = 'disconnect';

type TimeoutType = ReturnType<typeof setTimeout> | null;

export async function initializeWebsocketConnection(address: string) {
  const { apiAddress, websocketUrl: customWebsocketUrl } = networkSelector(
    getStore().getState()
  );

  if (!address) {
    throw new Error('Websocket could not be initialized: address missing');
  }

  let messageTimeout: TimeoutType = null;
  let batchTimeout: TimeoutType = null;

  // Update socket status in store for status subscription
  const updateSocketStatus = (status: WebsocketConnectionStatusEnum) => {
    websocketConnection.status = status;
    setWebsocketStatus(status);
  };

  const handleMessageReceived = (message: string) => {
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    messageTimeout = setTimeout(() => {
      setWebsocketEvent(message);
    }, MESSAGE_DELAY);
  };

  const handleBatchUpdate = (data: BatchTransactionsWSResponseType) => {
    if (batchTimeout) {
      clearTimeout(batchTimeout);
    }
    batchTimeout = setTimeout(() => {
      setWebsocketBatchEvent(data);
    }, MESSAGE_DELAY);
  };

  const closeConnection = () => {
    const instance = websocketConnection.instance;
    if (instance) {
      instance.off(CONNECT_ERROR);
      instance.off(CONNECT);
      instance.off(BATCH_UPDATED_EVENT);
      instance.off(DISCONNECT);
      instance.close();
      console.log('Websocket disconnected.');
    }

    updateSocketStatus(WebsocketConnectionStatusEnum.NOT_INITIALIZED);
    websocketConnection.instance = null;

    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }

    if (batchTimeout) {
      clearTimeout(batchTimeout);
    }
  };

  const initializeConnection = async () => {
    updateSocketStatus(WebsocketConnectionStatusEnum.PENDING);

    const websocketUrl =
      customWebsocketUrl ?? (await getWebsocketUrl(apiAddress));

    if (!websocketUrl) {
      updateSocketStatus(WebsocketConnectionStatusEnum.NOT_INITIALIZED);
      return;
    }

    websocketConnection.instance = io(websocketUrl, {
      forceNew: true,
      reconnection: true,
      reconnectionAttempts: RECONNECTION_ATTEMPTS,
      reconnectionDelay: RETRY_INTERVAL,
      timeout: TIMEOUT,
      query: { address }
    });

    websocketConnection.instance.onAny(handleMessageReceived);

    websocketConnection.instance.on(BATCH_UPDATED_EVENT, handleBatchUpdate);

    websocketConnection.instance.on(CONNECT, () => {
      console.log('Websocket connected.');
      updateSocketStatus(WebsocketConnectionStatusEnum.COMPLETED);
    });

    websocketConnection.instance.on(CONNECT_ERROR, (error) => {
      console.warn('Websocket connect error: ', error.message);
    });

    websocketConnection.instance.on(DISCONNECT, (reason) => {
      console.warn('Websocket disconnected: ', reason);
      updateSocketStatus(WebsocketConnectionStatusEnum.PENDING);
    });
  };

  if (
    websocketConnection.status ===
      WebsocketConnectionStatusEnum.NOT_INITIALIZED &&
    !websocketConnection.instance?.active
  ) {
    await initializeConnection();
  }

  return {
    closeConnection
  };
}
