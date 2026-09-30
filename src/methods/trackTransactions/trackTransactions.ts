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

let checkQueue: Promise<void> = Promise.resolve();
let queuedChecks = 0;

const runExclusively = (check: () => Promise<void>): Promise<void> => {
  const previousCheck = queuedChecks > 0 ? checkQueue : null;
  let releaseQueue: () => void = () => undefined;

  checkQueue = new Promise<void>((resolve) => {
    releaseQueue = resolve;
  });
  queuedChecks++;

  return (async () => {
    if (previousCheck) {
      await previousCheck;
    }

    await check();
  })().finally(() => {
    queuedChecks--;
    releaseQueue();
  });
};

/**
 * Tracks transactions using websocket or polling
 * @returns stopTransactionsTracking function
 */
export async function trackTransactions(): Promise<{
  stopTransactionsTracking: () => void;
}> {
  const store = getStore();
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
  let isRecheckQueued = false;
  let isFullCheckRunning = false;

  const runStatusCheck = async (): Promise<void> => {
    try {
      await checkTransactionStatus();
    } catch (error) {
      console.error(
        '[trackTransactions] Error checking transaction status:',
        error
      );
    }
  };

  const recheckStatus = (): void => {
    if (isRecheckQueued) {
      return;
    }

    isRecheckQueued = true;

    runExclusively(async () => {
      isRecheckQueued = false;
      isFullCheckRunning = true;

      try {
        await runStatusCheck();
      } finally {
        isFullCheckRunning = false;
      }
    });
  };

  const pollStatus = (): void => {
    if (!isFullCheckRunning) {
      recheckStatus();
    }
  };

  const { resolve: resolveWebsocketHashes } = createWebsocketHashResolver(
    (props, onStart) =>
      runExclusively(() => {
        onStart();
        return checkTransactionStatus(props);
      })
  );

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
    pollingIntervalRef = setInterval(pollStatus, nextIntervalMs);
  };

  const syncPolling = (
    state?: StoreType,
    hasPendingSessions = getPendingSessionIds(state ?? store.getState())
      .length > 0
  ): void => {
    const currentState = state ?? store.getState();

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

    let hasNewPendingSession = false;

    if (state.transactions !== prevState.transactions) {
      const nextPendingSessionIds = getPendingSessionIds(state);
      hasNewPendingSession = nextPendingSessionIds.some(
        (sessionId) => !pendingSessionIds.has(sessionId)
      );
      pendingSessionIds = new Set(nextPendingSessionIds);
    }

    const isStatusChanged =
      prevState.config.websocketStatus !== websocketStatus;

    // events sent while the websocket was not connected were missed
    const isReconnected =
      isStatusChanged &&
      websocketStatus === WebsocketConnectionStatusEnum.COMPLETED;

    if (hasNewPendingSession || isReconnected) {
      recheckStatus();
    }

    syncPolling(state, pendingSessionIds.size > 0);

    if (!isStatusChanged) {
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
