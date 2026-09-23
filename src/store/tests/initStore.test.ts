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
});
