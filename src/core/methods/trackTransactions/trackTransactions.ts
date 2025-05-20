import { subscriptions } from 'constants/storage.constants';
import {
  WebsocketConnectionStatusEnum,
  websocketConnection
} from 'constants/websocket.constants';
import { websocketEventSelector } from 'store/selectors/accountSelectors';
import { getStore } from 'store/store';
import { SubscriptionsEnum } from 'types/subscriptions.type';
import { checkTransactionStatus } from './helpers/checkTransactionStatus';
import { getPollingInterval } from './helpers/getPollingInterval';

/**
 * Tracks transactions using websocket or polling
 * @returns stopTransactionsTracking function
 */
export async function trackTransactions() {
  const store = getStore();
  const pollingInterval = getPollingInterval();
  let pollingIntervalRef: ReturnType<typeof setTimeout> | null = null;
  let websocketStatusCheckIntervalRef: ReturnType<typeof setTimeout> | null =
    null;
  let timestamp = websocketEventSelector(store.getState())?.timestamp;

  const recheckStatus = () => {
    checkTransactionStatus();
  };

  const startPolling = () => {
    pollingIntervalRef ??= setInterval(recheckStatus, pollingInterval);
  };

  const stopPolling = () => {
    if (pollingIntervalRef) {
      clearInterval(pollingIntervalRef);
      pollingIntervalRef = null;
    }
  };

  const setupWebSocketTracking = () => {
    stopPolling();
    const unsubscribeWebsocketEvent = store.subscribe(
      ({ account: { websocketEvent } }) => {
        if (websocketEvent?.message && timestamp !== websocketEvent.timestamp) {
          timestamp = websocketEvent.timestamp;
          recheckStatus();
        }
      }
    );

    subscriptions.set(
      SubscriptionsEnum.websocketEventReceived,
      unsubscribeWebsocketEvent
    );
  };

  const startWatchingWebsocketStatus = () => {
    if (
      websocketConnection.status !==
        WebsocketConnectionStatusEnum.NOT_INITIALIZED ||
      websocketStatusCheckIntervalRef
    ) {
      return;
    }

    websocketStatusCheckIntervalRef = setInterval(() => {
      if (
        websocketConnection.status === WebsocketConnectionStatusEnum.COMPLETED
      ) {
        clearInterval(websocketStatusCheckIntervalRef!);
        websocketStatusCheckIntervalRef = null;
        setupWebSocketTracking();
      }
    }, 1000);
  };

  // Initial execution
  recheckStatus();

  const stopTransactionsTracking = () => {
    stopPolling();
    if (websocketStatusCheckIntervalRef) {
      clearInterval(websocketStatusCheckIntervalRef);
      websocketStatusCheckIntervalRef = null;
    }
  };

  const unsubscribeWebsocketStatus = store.subscribe(
    ({ account: { address }, config: { websocketStatus } }, prevState) => {
      const hasStatusChange =
        prevState.config.websocketStatus !== websocketStatus;

      if (!hasStatusChange) {
        return;
      }

      switch (websocketStatus) {
        case WebsocketConnectionStatusEnum.COMPLETED:
          setupWebSocketTracking();
          break;
        case WebsocketConnectionStatusEnum.PENDING:
          startPolling();
          startWatchingWebsocketStatus();
          break;
        default:
          address ? startPolling() : stopTransactionsTracking();
          break;
      }
    }
  );

  subscriptions.set(
    SubscriptionsEnum.websocketStatusChanged,
    unsubscribeWebsocketStatus
  );
  subscriptions.set(
    SubscriptionsEnum.websocketEventReceived,
    stopTransactionsTracking
  );
  return { stopTransactionsTracking };
}
