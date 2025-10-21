import { subscriptions } from 'constants/storage.constants';
import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { websocketEventSelector } from 'store/selectors/accountSelectors';
import { getStore } from 'store/store';
import { SubscriptionsEnum } from 'types/subscriptions.type';
import { checkTransactionStatus } from './helpers/checkTransactionStatus';
import { getPollingInterval } from './helpers/getPollingInterval';

/**
 * Tracks transactions using websocket or polling
 * @returns stopTransactionsTracking function
 */
export async function trackTransactions(): Promise<{
  stopTransactionsTracking: () => void;
}> {
  const store = getStore();
  const pollingInterval = getPollingInterval();
  let pollingIntervalRef: ReturnType<typeof setTimeout> | null = null;
  let timestamp = websocketEventSelector(store.getState())?.timestamp ?? null;

  const recheckStatus = async (): Promise<void> => {
    try {
      await checkTransactionStatus();
    } catch (error) {
      console.error(
        '[trackTransactions] Error checking transaction status:',
        error
      );
    }
  };

  const startPolling = (): void => {
    // Prevent multiple polling intervals
    if (pollingIntervalRef) {
      return;
    }
    pollingIntervalRef = setInterval(recheckStatus, pollingInterval);
  };

  const stopPolling = (): void => {
    if (pollingIntervalRef) {
      clearInterval(pollingIntervalRef);
      pollingIntervalRef = null;
    }
  };

  const setupWebSocketTracking = (): void => {
    stopPolling();
    const unsubscribeWebsocketEvent = store.subscribe(
      ({ account: { websocketEvent } }) => {
        if (
          websocketEvent?.message &&
          websocketEvent.timestamp != null &&
          timestamp !== websocketEvent.timestamp
        ) {
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

  // Initial execution
  recheckStatus();

  const stopTransactionsTracking = (): void => {
    stopPolling();
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
  return { stopTransactionsTracking };
}
