import { REHYDRATE_STORE_TIMEOUT } from 'constants/storage.constants';
import { defaultStorageCallback } from 'store/storage';
import { InMemoryStorage } from 'store/storage';
import { StoreApi } from 'store/store';
import { waitForStoreRehydration } from '../waitForStoreRehydration';

const createMockStore = (isHydrated = false): StoreApi => {
  return {
    persist: {
      hasHydrated: jest.fn().mockReturnValue(isHydrated),
      onFinishHydration: jest.fn()
    }
  } as unknown as StoreApi;
};

describe('waitForStoreRehydration tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return immediately when using defaultStorageCallback', async () => {
    const mockStore = createMockStore();

    await waitForStoreRehydration({
      store: mockStore,
      getStorageCallback: defaultStorageCallback
    });

    expect(mockStore.persist.hasHydrated).not.toHaveBeenCalled();
    expect(mockStore.persist.onFinishHydration).not.toHaveBeenCalled();
  });

  it('should wait for rehydration when using custom storage and store is already hydrated', async () => {
    const mockStore = createMockStore(true);

    await waitForStoreRehydration({
      store: mockStore,
      getStorageCallback: () => new InMemoryStorage()
    });

    expect(mockStore.persist.hasHydrated).toHaveBeenCalled();
    expect(mockStore.persist.onFinishHydration).toHaveBeenCalled();
  });

  it('should resolve when onFinishHydration callback is triggered', async () => {
    const mockStore = createMockStore(false);
    let hydrationCallback: (() => void) | undefined;

    (mockStore.persist.onFinishHydration as jest.Mock).mockImplementation(
      (callback: () => void) => {
        hydrationCallback = callback;
      }
    );

    const promise = waitForStoreRehydration({
      store: mockStore,
      getStorageCallback: () => new InMemoryStorage()
    });

    hydrationCallback?.();

    await promise;

    expect(mockStore.persist.hasHydrated).toHaveBeenCalled();
    expect(mockStore.persist.onFinishHydration).toHaveBeenCalled();
  });

  it('should handle timeout and log warning when rehydration takes too long', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const mockStore = createMockStore(false);

    (mockStore.persist.onFinishHydration as jest.Mock).mockImplementation(
      () => {
        // Don't call the callback - simulate timeout
      }
    );

    const promise = waitForStoreRehydration({
      store: mockStore,
      getStorageCallback: () => new InMemoryStorage()
    });

    // Fast-forward time to trigger timeout
    jest.advanceTimersByTime(REHYDRATE_STORE_TIMEOUT);

    await promise;

    expect(mockStore.persist.hasHydrated).toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Store rehydration timed out'),
      undefined
    );

    consoleWarnSpy.mockRestore();
  });
});
