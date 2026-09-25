import { InMemoryStorage } from 'store/storage';
import { initStore } from '../store';

describe('initStore tests', () => {
  it('should initialize and return a store', () => {
    const store = initStore(() => new InMemoryStorage());

    expect(store).toBeDefined();
    expect(store.getState).toBeDefined();
    expect(store.setState).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });

  it('keeps updating state when the storage rejects a write', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => null);
    const storage = new InMemoryStorage();
    jest.spyOn(storage, 'setItem').mockImplementation(() => {
      throw new DOMException('quota exceeded', 'QuotaExceededError');
    });
    const store = initStore(() => storage);

    expect(() =>
      store.setState((state) => {
        state.ui.isSidePanelOpen = true;
      })
    ).not.toThrow();
    expect(store.getState().ui.isSidePanelOpen).toBe(true);

    consoleSpy.mockRestore();
  });

  it('keeps updating state when the state cannot be serialized', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => null);
    const store = initStore(() => new InMemoryStorage());

    expect(() =>
      store.setState((state) => {
        (state.ui as any).unserializable = 1n;
      })
    ).not.toThrow();
    expect((store.getState().ui as any).unserializable).toBe(1n);
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('handles a write rejected by an async storage', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => null);
    const error = new Error('disk full');
    const store = initStore(() => ({
      getItem: async () => null,
      setItem: () => Promise.reject(error),
      removeItem: async () => undefined
    }));

    store.setState((state) => {
      state.ui.isSidePanelOpen = true;
    });
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(consoleSpy).toHaveBeenCalledWith(
      'Unable to persist the sdk-dapp store:',
      error
    );

    consoleSpy.mockRestore();
  });
});
