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
});
