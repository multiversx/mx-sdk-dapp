import { subscriptions } from 'constants/storage.constants';
import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactions.constants';
import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { websocketTransactionEventSelector } from 'store/selectors/accountSelectors';
import { pendingTransactionsSessionsSelector } from 'store/selectors/transactionsSelector';
import { getStore } from 'store/store';
import { StoreType } from 'store/store.types';
import { SubscriptionsEnum } from 'types/subscriptions.type';
import { WebsocketTransactionEventsEnum } from 'types/websocket.types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { checkTransactionStatus } from './helpers/checkTransactionStatus';
import { getPollingInterval } from './helpers/getPollingInterval';
import { createWebsocketHashResolver } from './helpers/resolveWebsocketHashes';

const isResolvableEvent = (eventName?: string) =>
  eventName === WebsocketTransactionEventsEnum.transactionCompleted ||
  eventName === WebsocketTransactionEventsEnum.batchUpdated;

const trackingSubscriptions = [
  SubscriptionsEnum.websocketEventReceived,
  SubscriptionsEnum.websocketStatusChanged,
  SubscriptionsEnum.transactionsPolling
];

const getPendingSessionIds = (state: StoreType): string[] =>
  Object.keys(pendingTransactionsSessionsSelector(state));

/**
 * Tracks transactions using websocket or polling
 * @returns stopTransactionsTracking function
 */
export async function trackTransactions(): Promise<{
  stopTransactionsTracking: () => void;
}> {
  const store = getStore();
  const { resolve: resolveWebsocketHashes } = createWebsocketHashResolver();
  let pollingIntervalRef: ReturnType<typeof setTimeout> | null = null;
  let pollingIntervalMs: number | null = null;
  let timestamp =
    websocketTransactionEventSelector(store.getState())?.timestamp ?? null;
  let isWebsocketTrackingActive = false;

  trackingSubscriptions.forEach((key) => {
    subscriptions.get(key)?.();
    subscriptions.delete(key);
  });

  const ownedSubscriptions = new Map<SubscriptionsEnum, () => void>();

  const registerSubscription = (
    key: SubscriptionsEnum,
    unsubscribe: () => void
  ) => {
    subscriptions.set(key, unsubscribe);
    ownedSubscriptions.set(key, unsubscribe);
  };

  let pendingSessionIds = new Set(getPendingSessionIds(store.getState()));

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

  const stopPolling = (): void => {
    if (pollingIntervalRef) {
      clearInterval(pollingIntervalRef);
      pollingIntervalRef = null;
      pollingIntervalMs = null;
    }
  };

  registerSubscription(SubscriptionsEnum.transactionsPolling, stopPolling);

  const startPolling = (state?: StoreType): void => {
    const isWebsocketHealthy =
      (state ?? store.getState())?.config?.websocketStatus ===
      WebsocketConnectionStatusEnum.COMPLETED;

    const nextIntervalMs = isWebsocketHealthy
      ? TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
      : getPollingInterval();

    if (pollingIntervalRef && pollingIntervalMs === nextIntervalMs) {
      return;
    }

    stopPolling();
    pollingIntervalMs = nextIntervalMs;
    pollingIntervalRef = setInterval(recheckStatus, nextIntervalMs);
  };

  const syncPolling = (state?: StoreType): void => {
    const currentState = state ?? store.getState();
    const hasPendingSessions = getPendingSessionIds(currentState).length > 0;

    if (hasPendingSessions) {
      startPolling(currentState);
      return;
    }

    stopPolling();
  };

  const setupWebSocketTracking = (): void => {
    if (isWebsocketTrackingActive) {
      return;
    }
    isWebsocketTrackingActive = true;

    const unsubscribeWebsocketEvent = store.subscribe(
      ({ account: { websocketTransactionEvent } }) => {
        const isNewEvent =
          websocketTransactionEvent?.hashes?.length &&
          websocketTransactionEvent.timestamp != null &&
          timestamp !== websocketTransactionEvent.timestamp;

        if (!isNewEvent) {
          return;
        }

        timestamp = websocketTransactionEvent.timestamp;

        if (!isResolvableEvent(websocketTransactionEvent.eventName)) {
          return;
        }

        resolveWebsocketHashes(websocketTransactionEvent.hashes)
          .then(() => {
            const hasPendingSessions =
              getPendingSessionIds(store.getState()).length > 0;

            if (!hasPendingSessions && getIsLoggedIn()) {
              refreshAccount();
            }
          })
          .catch((error) => {
            console.error(
              '[trackTransactions] Error resolving websocket hashes:',
              error
            );
          });
      }
    );

    registerSubscription(
      SubscriptionsEnum.websocketEventReceived,
      unsubscribeWebsocketEvent
    );
  };

  const stopTransactionsTracking = (): void => {
    stopPolling();

    ownedSubscriptions.forEach((unsubscribe, key) => {
      if (subscriptions.get(key) !== unsubscribe) {
        return;
      }

      unsubscribe();
      subscriptions.delete(key);
    });
  };

  const applyWebsocketStatus = (
    websocketStatus?: WebsocketConnectionStatusEnum,
    address?: string,
    state?: StoreType
  ): void => {
    switch (websocketStatus) {
      case WebsocketConnectionStatusEnum.COMPLETED:
        setupWebSocketTracking();
        recheckStatus();
        syncPolling(state);
        break;
      case WebsocketConnectionStatusEnum.PENDING:
        startPolling(state);
        break;
      default:
        address ? startPolling(state) : stopPolling();
        break;
    }
  };

  recheckStatus();

  const unsubscribeWebsocketStatus = store.subscribe((state, prevState) => {
    const {
      account: { address },
      config: { websocketStatus }
    } = state;

    const nextPendingSessionIds = getPendingSessionIds(state);
    const hasNewPendingSession = nextPendingSessionIds.some(
      (sessionId) => !pendingSessionIds.has(sessionId)
    );
    pendingSessionIds = new Set(nextPendingSessionIds);

    if (hasNewPendingSession) {
      recheckStatus();
    }

    syncPolling(state);

    if (prevState.config.websocketStatus === websocketStatus) {
      return;
    }

    applyWebsocketStatus(websocketStatus, address, state);
  });

  registerSubscription(
    SubscriptionsEnum.websocketStatusChanged,
    unsubscribeWebsocketStatus
  );

  const initialState = store.getState();
  applyWebsocketStatus(
    initialState?.config?.websocketStatus,
    initialState?.account?.address,
    initialState
  );

  return { stopTransactionsTracking };
}
