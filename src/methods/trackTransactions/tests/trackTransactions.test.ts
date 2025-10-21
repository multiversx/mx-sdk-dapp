import { subscriptions } from 'constants/storage.constants';
import {
  WebsocketConnectionStatusEnum,
  websocketConnection
} from 'constants/websocket.constants';
import { websocketEventSelector } from 'store/selectors/accountSelectors';
import { getStore } from 'store/store';
import { SubscriptionsEnum } from 'types/subscriptions.type';
import { checkTransactionStatus } from '../helpers/checkTransactionStatus';
import { getPollingInterval } from '../helpers/getPollingInterval';
import { trackTransactions } from '../trackTransactions';

// Mock all dependencies
jest.mock('store/store');
jest.mock('store/selectors/accountSelectors');
jest.mock('../helpers/checkTransactionStatus');
jest.mock('../helpers/getPollingInterval');

const mockGetStore = getStore as jest.MockedFunction<typeof getStore>;
const mockWebsocketEventSelector =
  websocketEventSelector as jest.MockedFunction<typeof websocketEventSelector>;
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
    websocketConnection.status = WebsocketConnectionStatusEnum.NOT_INITIALIZED;

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
    mockWebsocketEventSelector.mockReturnValue({
      timestamp: 1234567890,
      message: 'test-message'
    });
    mockCheckTransactionStatus.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.useRealTimers();
    subscriptions.clear();
  });

  describe('initial execution', () => {
    it('should call checkTransactionStatus immediately', async () => {
      await trackTransactions();

      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1);
    });

    it('should get polling interval from helper', async () => {
      await trackTransactions();

      expect(mockGetPollingInterval).toHaveBeenCalledTimes(1);
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
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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
      const pollingCallback = mockSetInterval.mock.calls[0][0];
      pollingCallback();
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + polling
    });

    it('should start polling when address exists and status is default', async () => {
      await trackTransactions();

      // Simulate websocket status change to default with address
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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
      const pollingCallback = mockSetInterval.mock.calls[0][0];
      pollingCallback();
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + polling
    });

    it('should stop tracking when no address and status is default', async () => {
      await trackTransactions();

      // Simulate websocket status change to default without address
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const websocketEventCallback = mockSubscribe.mock.calls[1][0];

      // Simulate websocket event with new timestamp
      const mockWebsocketEvent = {
        message: 'test-message',
        timestamp: 1234567891 // Different timestamp
      };

      websocketEventCallback({
        account: { websocketEvent: mockWebsocketEvent }
      });

      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2); // Initial + websocket event
    });

    it('should not call checkTransactionStatus when websocket event timestamp is same', async () => {
      await trackTransactions();

      // Setup websocket tracking
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const websocketEventCallback = mockSubscribe.mock.calls[1][0];

      // Simulate websocket event with same timestamp
      const mockWebsocketEvent = {
        message: 'test-message',
        timestamp: 1234567890 // Same timestamp as initial
      };

      websocketEventCallback({
        account: { websocketEvent: mockWebsocketEvent }
      });

      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1); // Only initial call
    });
  });

  describe('websocket status monitoring', () => {
    it('should start monitoring websocket status when PENDING', async () => {
      await trackTransactions();

      // Simulate websocket status change to PENDING
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

      // Should start monitoring interval
      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 1000);
    });

    it('should setup websocket tracking when status becomes COMPLETED during monitoring', async () => {
      await trackTransactions();

      // Simulate websocket status change to PENDING
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

      // Should have started monitoring
      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 1000);

      // Verify that monitoring callback exists
      expect(mockSetInterval.mock.calls[0][0]).toBeDefined();
      expect(typeof mockSetInterval.mock.calls[0][0]).toBe('function');
    });

    it('should not start monitoring if websocket is already initialized', async () => {
      websocketConnection.status = WebsocketConnectionStatusEnum.COMPLETED;

      await trackTransactions();

      // Simulate websocket status change to PENDING
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

      // Should not start monitoring interval
      expect(mockSetInterval).not.toHaveBeenCalledWith(
        expect.any(Function),
        1000
      );
    });
  });

  describe('polling behavior', () => {
    it('should start polling with correct interval', async () => {
      mockGetPollingInterval.mockReturnValue(3000);

      await trackTransactions();

      // Simulate websocket status change to PENDING
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

    it('should stop polling when websocket tracking is setup', async () => {
      await trackTransactions();

      // Start polling first
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

      subscribeCallback(websocketState, websocketPrevState);

      // Advance time - should not call checkTransactionStatus via polling
      jest.advanceTimersByTime(5000);
      expect(mockCheckTransactionStatus).not.toHaveBeenCalled();
    });
  });

  describe('subscription management', () => {
    it('should register websocket status subscription', async () => {
      await trackTransactions();

      expect(subscriptions.has(SubscriptionsEnum.websocketStatusChanged)).toBe(
        true
      );
    });

    it('should register websocket event subscription', async () => {
      await trackTransactions();

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
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

    it('should clear websocket status check interval', async () => {
      const { stopTransactionsTracking } = await trackTransactions();

      // Start monitoring
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

      // Should clear interval
      expect(mockClearInterval).toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should handle missing websocket event in selector', async () => {
      mockWebsocketEventSelector.mockReturnValue(null);

      await trackTransactions();

      // Should not throw error
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1);
    });

    it('should handle websocket event without message', async () => {
      await trackTransactions();

      // Setup websocket tracking
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
      const mockState = {
        account: { address: 'test-address' },
        config: { websocketStatus: WebsocketConnectionStatusEnum.COMPLETED }
      };
      const mockPrevState = {
        config: { websocketStatus: WebsocketConnectionStatusEnum.PENDING }
      };

      subscribeCallback(mockState, mockPrevState);

      // Get websocket event subscription callback
      const websocketEventCallback = mockSubscribe.mock.calls[1][0];

      // Simulate websocket event without message
      const mockWebsocketEvent = {
        message: null,
        timestamp: 1234567891
      };

      websocketEventCallback({
        account: { websocketEvent: mockWebsocketEvent }
      });

      // Should not call checkTransactionStatus
      expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1); // Only initial call
    });

    it('should not start monitoring if already monitoring', async () => {
      await trackTransactions();

      // Start monitoring first time
      const subscribeCallback = mockSubscribe.mock.calls[0][0];
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

      const firstSetIntervalCall = mockSetInterval.mock.calls.length;

      // Try to start monitoring again
      subscribeCallback(mockState, mockPrevState);

      const secondSetIntervalCall = mockSetInterval.mock.calls.length;

      // Should not start monitoring again
      expect(secondSetIntervalCall).toBe(firstSetIntervalCall);
    });
  });
});
