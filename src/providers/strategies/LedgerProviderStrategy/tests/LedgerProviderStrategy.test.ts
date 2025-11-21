import { testAddress } from '__mocks__';
import { ProviderErrorsEnum } from 'types/provider.types';
import { ProviderTypeEnum } from '../../../types/providerFactory.types';
import { LedgerProviderStrategy } from '../LedgerProviderStrategy';

const mockLedgerProvider = {
  init: jest.fn(),
  getAddress: jest.fn(),
  setAccount: jest.fn(),
  isInitialized: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  signTransactions: jest.fn(),
  signMessage: jest.fn()
};

const mockLedgerConnectManager = {
  init: jest.fn(),
  updateAccountScreen: jest.fn(),
  updateConnectScreen: jest.fn(),
  subscribeToProviderInit: jest.fn(),
  unsubscribeFromProviderInit: jest.fn()
};

jest.mock('@multiversx/sdk-hw-provider', () => ({
  HWProvider: jest.fn(() => mockLedgerProvider)
}));

jest.mock(
  'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager',
  () => ({
    LedgerConnectStateManager: {
      getInstance: jest.fn(() => mockLedgerConnectManager)
    }
  })
);

jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn()
}));

jest.mock('../helpers/initializeLedgerProvider', () => ({
  initializeLedgerProvider: jest.fn()
}));

const { getIsLoggedIn: mockGetIsLoggedIn } = jest.requireMock(
  'methods/account/getIsLoggedIn'
) as {
  getIsLoggedIn: jest.Mock;
};

const { initializeLedgerProvider: mockInitializeLedgerProvider } =
  jest.requireMock('../helpers/initializeLedgerProvider') as {
    initializeLedgerProvider: jest.Mock;
  };

describe('LedgerProviderStrategy tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetIsLoggedIn.mockReturnValue(false);
    mockLedgerConnectManager.init.mockResolvedValue(undefined);
    mockInitializeLedgerProvider.mockImplementation(({ resolve }) => {
      resolve({
        ledgerProvider: mockLedgerProvider,
        ledgerConfig: { version: '1.0', dataEnabled: true }
      });
    });
  });

  it('initializes provider successfully and returns true', async () => {
    const strategy = new LedgerProviderStrategy({});

    const result = await strategy.init();

    expect(result).toBe(true);
  });

  it('returns false when initializeProvider throws', async () => {
    mockInitializeLedgerProvider.mockImplementation(({ reject }) => {
      reject(new Error('Initialization failed'));
    });
    const strategy = new LedgerProviderStrategy({});

    const result = await strategy.init();

    expect(result).toBe(false);
  });

  it('getType returns ledger enum', () => {
    const strategy = new LedgerProviderStrategy({});

    expect(strategy.getType()).toBe(ProviderTypeEnum.ledger);
  });

  it('getAddress throws when provider not initialized', () => {
    const strategy = new LedgerProviderStrategy({});

    expect(() => strategy.getAddress()).toThrow(
      ProviderErrorsEnum.notInitialized
    );
  });

  it('getAddress returns provider address when initialized', async () => {
    const strategy = new LedgerProviderStrategy({});
    await strategy.init();
    mockLedgerProvider.getAddress.mockResolvedValue(testAddress);

    const result = await strategy.getAddress();

    expect(result).toBe(testAddress);
  });

  it('isInitialized throws when provider missing', () => {
    const strategy = new LedgerProviderStrategy({});

    expect(() => strategy.isInitialized()).toThrow(
      ProviderErrorsEnum.notInitialized
    );
  });

  it('isInitialized proxies to underlying provider', async () => {
    const strategy = new LedgerProviderStrategy({});
    await strategy.init();
    mockLedgerProvider.isInitialized.mockReturnValue(true);

    const result = strategy.isInitialized();

    expect(result).toBe(true);
  });

  it('logout throws when provider missing', () => {
    const strategy = new LedgerProviderStrategy({});

    expect(() => strategy.logout()).toThrow(ProviderErrorsEnum.notInitialized);
  });

  it('logout resolves with provider result when initialized', async () => {
    const strategy = new LedgerProviderStrategy({});
    await strategy.init();
    mockLedgerProvider.logout.mockResolvedValue(true);

    const result = await strategy.logout();

    expect(result).toBe(true);
  });

  it('setAccount delegates to provider when initialized', async () => {
    const strategy = new LedgerProviderStrategy({});
    await strategy.init();
    const account = { address: testAddress } as any;

    strategy.setAccount(account);

    expect(mockLedgerProvider.setAccount).toHaveBeenCalledWith(account);
  });

  it('ledgerLogin throws when provider missing', async () => {
    const strategy = new LedgerProviderStrategy({});

    await expect(
      (strategy as any).ledgerLogin({ addressIndex: 0 })
    ).rejects.toThrow(ProviderErrorsEnum.notInitialized);
  });

  it('ledgerLogin throws when addressIndex missing', async () => {
    const strategy = new LedgerProviderStrategy({});
    (strategy as any).provider = mockLedgerProvider;

    await expect((strategy as any).ledgerLogin({})).rejects.toThrow(
      'Missing addressIndex for Ledger login'
    );
  });

  it('ledgerLogin returns address and signature defaults', async () => {
    const strategy = new LedgerProviderStrategy({});
    (strategy as any).provider = mockLedgerProvider;
    mockLedgerProvider.login.mockResolvedValue({
      address: testAddress,
      signature: undefined
    });

    const result = await (strategy as any).ledgerLogin({ addressIndex: 3 });

    expect(result).toEqual({ address: testAddress, signature: '' });
  });
});
