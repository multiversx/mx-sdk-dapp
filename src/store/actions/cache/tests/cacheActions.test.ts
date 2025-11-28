import { clearCache, removeFromCache, saveToCache } from '../cacheActions';

const mockSetState = jest.fn();

jest.mock('store/store', () => ({
  getStore: () => ({
    setState: mockSetState
  })
}));

const createRootState = () =>
  ({
    cache: {
      initial: 'value'
    }
  }) as any;

describe('cacheActions', () => {
  let rootState: ReturnType<typeof createRootState>;

  beforeEach(() => {
    rootState = createRootState();
    mockSetState.mockImplementation(
      (updater: (state: typeof rootState) => void) => updater(rootState)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('saves value to cache', () => {
    saveToCache({ key: 'newKey', value: 42 });

    expect(rootState.cache.newKey).toBe(42);
  });

  it('removes value from cache', () => {
    removeFromCache('initial');

    expect(rootState.cache.initial).toBeUndefined();
  });

  it('clears cache content', () => {
    saveToCache({ key: 'another', value: 'test' });
    clearCache();

    expect(Object.keys(rootState.cache)).toHaveLength(0);
  });
});
