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
});
