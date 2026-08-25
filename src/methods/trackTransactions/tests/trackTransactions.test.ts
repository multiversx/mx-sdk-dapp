import { subscriptions } from 'constants/storage.constants';
import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { websocketTransactionEventSelector } from 'store/selectors/accountSelectors';
import { pendingTransactionsSessionsSelector } from 'store/selectors/transactionsSelector';
import { getStore } from 'store/store';
import { SubscriptionsEnum } from 'types/subscriptions.type';
import { refreshAccount } from 'utils/account/refreshAccount';
import { checkTransactionStatus } from '../helpers/checkTransactionStatus';
import { getPollingInterval } from '../helpers/getPollingInterval';
import { trackTransactions } from '../trackTransactions';

// Mock all dependencies
jest.mock('store/store');
jest.mock('store/selectors/accountSelectors');
jest.mock('store/selectors/transactionsSelector');
jest.mock('methods/account/getIsLoggedIn');
jest.mock('utils/account/refreshAccount');
jest.mock('../helpers/checkTransactionStatus');
jest.mock('../helpers/getPollingInterval');

const mockGetStore = getStore as jest.MockedFunction<typeof getStore>;
const mockWebsocketTransactionEventSelector =
  websocketTransactionEventSelector as jest.MockedFunction<
    typeof websocketTransactionEventSelector
  >;
const mockPendingTransactionsSessionsSelector =
  pendingTransactionsSessionsSelector as jest.MockedFunction<
    typeof pendingTransactionsSessionsSelector
  >;
const mockGetIsLoggedIn = getIsLoggedIn as jest.MockedFunction<
  typeof getIsLoggedIn
>;
const mockRefreshAccount = refreshAccount as jest.MockedFunction<
  typeof refreshAccount
>;
const mockCheckTransactionStatus =
  checkTransactionStatus as jest.MockedFunction<typeof checkTransactionStatus>;
const mockGetPollingInterval = getPollingInterval as jest.MockedFunction<
  typeof getPollingInterval
>;

describe('trackTransactions', () => {
  let mockStore: any;
  let mockSubscribe: jest.Mock;
  let mockGetState: jest.Mock;
  let mockUnsubscribe: jest.Mock;
  let mockSetInterval: jest.Mock;
  let mockClearInterval: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();

    // Mock global timer functions
    mockSetInterval = jest.fn().mockReturnValue(123);
    mockClearInterval = jest.fn();
    global.setInterval = mockSetInterval as any;
    global.clearInterval = mockClearInterval as any;

    // Reset websocket connection status
    // Note: websocketConnection.status is no longer used in the refactored version

    // Clear subscriptions
    subscriptions.clear();

    // Setup mock store
    mockUnsubscribe = jest.fn();
    mockSubscribe = jest.fn().mockReturnValue(mockUnsubscribe);
    mockGetState = jest.fn();

    mockStore = {
      subscribe: mockSubscribe,
      getState: mockGetState
    };

    mockGetStore.mockReturnValue(mockStore);
    mockGetPollingInterval.mockReturnValue(5000);
    mockWebsocketTransactionEventSelector.mockReturnValue({
      timestamp: 1234567890,
      eventName: 'transactionCompleted',
      hashes: ['hash-0']
    });
    mockPendingTransactionsSessionsSelector.mockReturnValue({});
    mockGetIsLoggedIn.mockReturnValue(false);
    mockRefreshAccount.mockResolvedValue(undefined);
    mockCheckTransactionStatus.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.useRealTimers();
    subscriptions.clear();
  });

  describe('initial execution', () => {
    it('should not resolve a polling interval before polling starts', async () => {
      await trackTransactions();

      // The interval is read at each polling start, so that a network config
      // hydrated after tracking begins is picked up.
      expect(mockGetPollingInterval).not.toHaveBeenCalled();
    });

    it('should handle checkTransactionStatus errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      mockCheckTransactionStatus.mockRejectedValue(new Error('Test error'));

      await trackTransactions();

      expect(consoleSpy).toHaveBeenCalledWith(
        '[trackTransactions] Error checking transaction status:',
        expect.any(Error)
      );
      consoleSpy.mockRestore();
    });
  });

  describe('websocket status subscription', () => {
    it('should subscribe to websocket status changes', async () => {
      await trackTransactions();

      expect(mockSubscribe).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should setup websocket tracking when status is COMPLETED', async () => {
      await trackTransactions();

      // Simulate websocket status change to COMPLETED
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Should setup websocket tracking (stop polling and subscribe to websocket events)
      expect(mockSubscribe).toHaveBeenCalledTimes(2); // Initial + websocket event subscription
      expect(subscriptions.has(SubscriptionsEnum.websocketEventReceived)).toBe(
        true
      );
    });

    it('should start polling when status is PENDING', async () => {
      await trackTransactions();

      // Simulate websocket status change to PENDING
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };
      const mockPrevState = {
        config: {
          websocketStatus: WebsocketConnectionStatusEnum.NOT_INITIALIZED
        }
      };

      subscribeCallback(mockState, mockPrevState);

      // Should start polling - manually call the polling function
      const [pollingCallback] = mockSetInterval.mock.calls[0];
      pollingCallback();
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + polling
    });

    it('should start polling when address exists and status is default', async () => {
      await trackTransactions();

      // Simulate websocket status change to default with address
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: {
          websocketStatus: WebsocketConnectionStatusEnum.NOT_INITIALIZED
        }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };

      subscribeCallback(mockState, mockPrevState);

      // Should start polling - manually call the polling function
      const [pollingCallback] = mockSetInterval.mock.calls[0];
      pollingCallback();
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + polling
    });

    it('should stop tracking when no address and status is default', async () => {
      await trackTransactions();

      // Simulate websocket status change to default without address
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: null },
        config: {
          websocketStatus: WebsocketConnectionStatusEnum.NOT_INITIALIZED
        }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };

      subscribeCallback(mockState, mockPrevState);

      // Should not start polling
      jest.advanceTimersByTime(5000);
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1); // Only initial call
    });
  });

  describe('websocket event tracking', () => {
    it('should setup websocket event subscription when websocket is ready', async () => {
      await trackTransactions();

      // Simulate websocket status change to COMPLETED
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Should have websocket event subscription
      expect(subscriptions.has(SubscriptionsEnum.websocketEventReceived)).toBe(
        true
      );
    });

    it('should call checkTransactionStatus when websocket event timestamp changes', async () => {
      await trackTransactions();

      // Setup websocket tracking
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const [websocketEventCallback] = mockSubscribe.mock.calls[1];

      websocketEventCallback({
        account: {
          websocketTransactionEvent: {
            eventName: 'transactionCompleted',
            hashes: ['hash-1'],
            timestamp: 1234567891 // Different timestamp
          }
        }
      });

      // Initial + reconcile on connect + websocket event
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(3);
      expect(mockCheckTransactionStatus).toHaveBeenLastCalledWith({
        hashes: ['hash-1']
      });
    });

    it('should not call checkTransactionStatus when websocket event timestamp is same', async () => {
      await trackTransactions();

      // Setup websocket tracking
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const [websocketEventCallback] = mockSubscribe.mock.calls[1];

      websocketEventCallback({
        account: {
          websocketTransactionEvent: {
            eventName: 'transactionCompleted',
            hashes: ['hash-1'],
            timestamp: 1234567890 // Same timestamp as initial
          }
        }
      });

      // Initial + reconcile on connect only
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2);
    });

    it('should handle websocket event with null timestamp', async () => {
      await trackTransactions();

      // Setup websocket tracking
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const [websocketEventCallback] = mockSubscribe.mock.calls[1];

      websocketEventCallback({
        account: {
          websocketTransactionEvent: {
            eventName: 'transactionCompleted',
            hashes: ['hash-1'],
            timestamp: null
          }
        }
      });

      // Initial + reconcile on connect only
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2);
    });

    it('should not resolve hashes for transactionPendingResults', async () => {
      await trackTransactions();

      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      subscribeCallback(
        {
          account: { address: 'test-address' },
          config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
        },
        { config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING } }
      );

      mockCheckTransactionStatus.mockClear();

      const [websocketEventCallback] = mockSubscribe.mock.calls[1];
      websocketEventCallback({
        account: {
          websocketTransactionEvent: {
            eventName: 'transactionPendingResults',
            hashes: ['hash-1'],
            timestamp: 1234567891
          }
        }
      });

      // The event only reports that cross-shard results are outstanding, so
      // resolving it would spend a request to learn nothing changed.
      expect(mockCheckTransactionStatus).not.toHaveBeenCalled();
    });

    it('should resolve each hash once across a burst of repeated events', async () => {
      let resolveCheck: () => void = () => undefined;
      mockCheckTransactionStatus.mockImplementation(
        () =>
          new Promise<void>((resolvePromise) => {
            resolveCheck = resolvePromise;
          })
      );

      await trackTransactions();

      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      subscribeCallback(
        {
          account: { address: 'test-address' },
          config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
        },
        { config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING } }
      );

      mockCheckTransactionStatus.mockClear();

      const [websocketEventCallback] = mockSubscribe.mock.calls[1];
      const emit = (timestamp: number) =>
        websocketEventCallback({
          account: {
            websocketTransactionEvent: {
              eventName: 'batchUpdated',
              hashes: ['hash-1'],
              timestamp
            }
          }
        });

      emit(1234567891);
      emit(1234567892);
      emit(1234567893);

      // The API repeats batchUpdated per processed block; only the first
      // reaches the network while that hash is still resolving.
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1);

      resolveCheck();
    });
  });

  describe('polling behavior', () => {
    it('should start polling with correct interval', async () => {
      mockGetPollingInterval.mockReturnValue(3000);

      await trackTransactions();

      // Simulate websocket status change to PENDING
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };
      const mockPrevState = {
        config: {
          websocketStatus: WebsocketConnectionStatusEnum.NOT_INITIALIZED
        }
      };

      subscribeCallback(mockState, mockPrevState);

      // Should start polling with correct interval
      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 3000);
    });

    it('should downgrade to the watchdog interval once the socket connects', async () => {
      await trackTransactions();

      // Start polling first
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };
      const mockPrevState = {
        config: {
          websocketStatus: WebsocketConnectionStatusEnum.NOT_INITIALIZED
        }
      };

      subscribeCallback(mockState, mockPrevState);

      // Clear previous calls
      mockCheckTransactionStatus.mockClear();

      // Setup websocket tracking
      const websocketState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const websocketPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      mockPendingTransactionsSessionsSelector.mockReturnValue({
        'session-1': { transactions: [], status: 'sent' } as any
      });
      mockSetInterval.mockClear();

      subscribeCallback(websocketState, websocketPrevState);

      // Fast polling is replaced by the slow watchdog, not left running.
      expect(mockClearInterval).toHaveBeenCalledWith(123);
      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 9000);
    });
  });

  describe('subscription management', () => {
    it('should register websocket status subscription', async () => {
      await trackTransactions();

      expect(subscriptions.has(SubscriptionsEnum.websocketStatusChanged)).toBe(
        true
      );
    });

    it('should register websocket event subscription when websocket tracking is setup', async () => {
      await trackTransactions();

      // Initially no websocket event subscription
      expect(subscriptions.has(SubscriptionsEnum.websocketEventReceived)).toBe(
        false
      );

      // Setup websocket tracking
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Now should have websocket event subscription
      expect(subscriptions.has(SubscriptionsEnum.websocketEventReceived)).toBe(
        true
      );
    });

    it('should return stopTransactionsTracking function', async () => {
      const result = await trackTransactions();

      expect(typeof result.stopTransactionsTracking).toBe('function');
    });
  });

  describe('stopTransactionsTracking', () => {
    it('should clear polling interval', async () => {
      const { stopTransactionsTracking } = await trackTransactions();

      // Start polling
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };
      const mockPrevState = {
        config: {
          websocketStatus: WebsocketConnectionStatusEnum.NOT_INITIALIZED
        }
      };

      subscribeCallback(mockState, mockPrevState);

      // Stop tracking
      stopTransactionsTracking();

      // Advance time - should not call checkTransactionStatus
      jest.advanceTimersByTime(5000);
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1); // Only initial call
    });
  });

  describe('pending session tracking', () => {
    const pendingSession = { transactions: [], status: 'sent' } as any;

    const triggerStoreChange = (
      subscribeCallback: any,
      websocketStatus = WebsocketConnectionStatusEnum.COMPLETED
    ) =>
      subscribeCallback(
        {
          account: { address: 'test-address' },
          config: { websocketStatus }
        },
        { config: { websocketStatus } }
      );

    it('should check transaction status when a new pending session appears', async () => {
      await trackTransactions();
      const [subscribeCallback] = mockSubscribe.mock.calls[0];

      mockPendingTransactionsSessionsSelector.mockReturnValue({
        'session-1': pendingSession
      });
      triggerStoreChange(subscribeCallback);

      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + new session
    });

    it('should not re-check for an already known pending session', async () => {
      await trackTransactions();
      const [subscribeCallback] = mockSubscribe.mock.calls[0];

      mockPendingTransactionsSessionsSelector.mockReturnValue({
        'session-1': pendingSession
      });
      triggerStoreChange(subscribeCallback);
      triggerStoreChange(subscribeCallback);

      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + first appearance only
    });

    it('should run a slow watchdog while sessions are pending and websocket is COMPLETED', async () => {
      await trackTransactions();
      const [subscribeCallback] = mockSubscribe.mock.calls[0];

      mockPendingTransactionsSessionsSelector.mockReturnValue({
        'session-1': pendingSession
      });
      triggerStoreChange(subscribeCallback);

      // A missed event is unrecoverable, so polling stays on as a safety net —
      // at the slow interval rather than the fast one.
      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 9000);
      expect(mockGetPollingInterval).not.toHaveBeenCalled();

      const [pollingCallback] = mockSetInterval.mock.calls[0];
      pollingCallback();
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(3);
    });

    it('should poll at the fast interval when the websocket is unavailable', async () => {
      await trackTransactions();
      const [subscribeCallback] = mockSubscribe.mock.calls[0];

      mockPendingTransactionsSessionsSelector.mockReturnValue({
        'session-1': pendingSession
      });
      triggerStoreChange(
        subscribeCallback,
        WebsocketConnectionStatusEnum.NOT_INITIALIZED
      );

      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 5000);
    });

    it('should stop polling once no session is pending anymore', async () => {
      await trackTransactions();
      const [subscribeCallback] = mockSubscribe.mock.calls[0];

      mockPendingTransactionsSessionsSelector.mockReturnValue({
        'session-1': pendingSession
      });
      triggerStoreChange(subscribeCallback);

      mockPendingTransactionsSessionsSelector.mockReturnValue({});
      triggerStoreChange(subscribeCallback);

      expect(mockClearInterval).toHaveBeenCalledWith(123);
    });
  });

  describe('already connected websocket', () => {
    it('should setup websocket tracking when the socket connected before tracking started', async () => {
      mockGetState.mockReturnValue({
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      });

      await trackTransactions();

      expect(subscriptions.has(SubscriptionsEnum.websocketEventReceived)).toBe(
        true
      );
    });

    it('should setup websocket tracking only once', async () => {
      await trackTransactions();
      const [subscribeCallback] = mockSubscribe.mock.calls[0];

      const completedState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const pendingState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(completedState, pendingState);
      subscribeCallback(completedState, pendingState);

      expect(mockSubscribe).toHaveBeenCalledTimes(2); // Status subscription + single websocket event subscription
    });

    it('should unsubscribe previously registered subscriptions on re-init', async () => {
      await trackTransactions();
      await trackTransactions();

      expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
    });
  });

  describe('edge cases', () => {
    it('should handle missing websocket event in selector', async () => {
      mockWebsocketTransactionEventSelector.mockReturnValue(null);

      await trackTransactions();

      // Should not throw error
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1);
    });

    it('should handle websocket event without hashes', async () => {
      await trackTransactions();

      // Setup websocket tracking
      const [subscribeCallback] = mockSubscribe.mock.calls[0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const [websocketEventCallback] = mockSubscribe.mock.calls[1];

      websocketEventCallback({
        account: {
          websocketTransactionEvent: {
            eventName: 'transactionCompleted',
            hashes: [],
            timestamp: 1234567891
          }
        }
      });

      // Initial + reconcile on connect, but nothing for the empty event
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2);
    });
  });
});
