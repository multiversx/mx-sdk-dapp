import {
  CUSTOM_PROVIDER_TIMEOUT_MS,
  createCustomProvider
} from '../createCustomProvider';

const mockGetFlagsConfig = jest.fn();

jest.mock('methods/initApp/helpers/getFlagsConfig', () => ({
  getFlagsConfig: () => mockGetFlagsConfig()
}));

const validProvider = {
  init: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  signTransactions: jest.fn(),
  signMessage: jest.fn(),
  getType: jest.fn(),
  getAddress: jest.fn(),
  isInitialized: jest.fn(),
  setAccount: jest.fn()
};

const makeCustomProvider = (constructorFn: any) =>
  ({
    name: 'My Wallet',
    type: 'my-wallet',
    constructor: constructorFn
  }) as any;

describe('createCustomProvider', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockGetFlagsConfig.mockReturnValue({
      strictProviderRegistration: true
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('returns the provider a well-behaved constructor produced', async () => {
    const result = await createCustomProvider({
      customProvider: makeCustomProvider(async () => validProvider),
      address: 'erd1qqq'
    });

    expect(result).toBe(validProvider);
  });

  it('isolates a constructor that throws', async () => {
    await expect(
      createCustomProvider({
        customProvider: makeCustomProvider(async () => {
          throw new Error('boom');
        })
      })
    ).rejects.toThrow('Custom provider "my-wallet" failed to initialize: boom');
  });

  it('gives up on a constructor that never settles', async () => {
    const promise = createCustomProvider({
      customProvider: makeCustomProvider(() => new Promise(() => null))
    });

    jest.advanceTimersByTime(CUSTOM_PROVIDER_TIMEOUT_MS);

    await expect(promise).rejects.toThrow(
      `Custom provider "my-wallet" failed to initialize: Timed out after ${CUSTOM_PROVIDER_TIMEOUT_MS}ms`
    );
  });

  it('rejects a constructor that returns something that is not a provider', async () => {
    await expect(
      createCustomProvider({
        customProvider: makeCustomProvider(async () => ({ login: () => null }))
      })
    ).rejects.toThrow('did not return a valid provider');
  });

  it('waits for a slow constructor while strict registration is off', async () => {
    mockGetFlagsConfig.mockReturnValue({ strictProviderRegistration: false });
    let finishConstructor: (provider: unknown) => void = () => {};

    const promise = createCustomProvider({
      customProvider: makeCustomProvider(
        () => new Promise((resolve) => (finishConstructor = resolve))
      )
    });

    jest.advanceTimersByTime(CUSTOM_PROVIDER_TIMEOUT_MS * 2);
    finishConstructor(validProvider);

    await expect(promise).resolves.toBe(validProvider);
  });

  it('skips the shape check while strict registration is off', async () => {
    mockGetFlagsConfig.mockReturnValue({
      strictProviderRegistration: false
    });
    const partial = { login: () => null };

    const result = await createCustomProvider({
      customProvider: makeCustomProvider(async () => partial)
    });

    expect(result).toBe(partial);
  });
});
