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
});
