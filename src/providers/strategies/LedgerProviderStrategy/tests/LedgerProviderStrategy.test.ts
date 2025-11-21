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

jest.mock('../helpers/authenticateLedgerAccount', () => ({
  authenticateLedgerAccount: jest.fn()
}));

jest.mock('../helpers/getLedgerProvider', () => ({
  getLedgerProvider: jest.fn()
}));

jest.mock('../../helpers/signTransactions/signTransactions', () => ({
  signTransactions: jest.fn()
}));

jest.mock('../helpers/signLedgerMessage', () => ({
  signLedgerMessage: jest.fn()
}));

jest.mock('store/actions/toasts/toastsActions', () => ({
  createCustomToast: jest.fn()
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

const { authenticateLedgerAccount: mockAuthenticateLedgerAccount } =
  jest.requireMock('../helpers/authenticateLedgerAccount') as {
    authenticateLedgerAccount: jest.Mock;
  };

const ledgerConfigMock = { version: '1.0', dataEnabled: true };

const { getLedgerProvider: mockGetLedgerProvider } = jest.requireMock(
  '../helpers/getLedgerProvider'
) as {
  getLedgerProvider: jest.Mock;
};

const { signTransactions: mockSignTransactionsHelper } = jest.requireMock(
  '../../helpers/signTransactions/signTransactions'
) as {
  signTransactions: jest.Mock;
};

const { signLedgerMessage: mockSignLedgerMessage } = jest.requireMock(
  '../helpers/signLedgerMessage'
) as {
  signLedgerMessage: jest.Mock;
};

const { createCustomToast: mockCreateCustomToast } = jest.requireMock(
  'store/actions/toasts/toastsActions'
) as {
  createCustomToast: jest.Mock;
};

describe('LedgerProviderStrategy tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetIsLoggedIn.mockReturnValue(false);
    mockLedgerConnectManager.init.mockResolvedValue(undefined);
    mockAuthenticateLedgerAccount.mockReset();
    mockGetLedgerProvider.mockReset();
    mockCreateCustomToast.mockReset();
    mockAuthenticateLedgerAccount.mockResolvedValue({
      address: testAddress,
      signature: 'sig'
    });
    mockSignTransactionsHelper.mockResolvedValue([{ hash: 'signed' }]);
    mockSignLedgerMessage.mockResolvedValue({ data: 'signed' });
    mockGetLedgerProvider.mockResolvedValue({
      ledgerProvider: mockLedgerProvider,
      ledgerConfig: ledgerConfigMock
    });
    mockInitializeLedgerProvider.mockImplementation(({ resolve }) => {
      resolve({
        ledgerProvider: mockLedgerProvider,
        ledgerConfig: ledgerConfigMock
      });
    });
  });

  describe('init', () => {
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
  });

  describe('getType', () => {
    it('returns ledger enum', () => {
      const strategy = new LedgerProviderStrategy({});

      expect(strategy.getType()).toBe(ProviderTypeEnum.ledger);
    });
  });

  describe('getAddress', () => {
    it('throws when provider not initialized', () => {
      const strategy = new LedgerProviderStrategy({});

      expect(() => strategy.getAddress()).toThrow(
        ProviderErrorsEnum.notInitialized
      );
    });

    it('returns provider address when initialized', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      mockLedgerProvider.getAddress.mockResolvedValue(testAddress);

      const result = await strategy.getAddress();

      expect(result).toBe(testAddress);
    });
  });

  describe('isInitialized', () => {
    it('throws when provider missing', () => {
      const strategy = new LedgerProviderStrategy({});

      expect(() => strategy.isInitialized()).toThrow(
        ProviderErrorsEnum.notInitialized
      );
    });

    it('proxies to underlying provider', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      mockLedgerProvider.isInitialized.mockReturnValue(true);

      const result = strategy.isInitialized();

      expect(result).toBe(true);
    });
  });

  describe('logout', () => {
    it('throws when provider missing', () => {
      const strategy = new LedgerProviderStrategy({});

      expect(() => strategy.logout()).toThrow(
        ProviderErrorsEnum.notInitialized
      );
    });

    it('resolves with provider result when initialized', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      mockLedgerProvider.logout.mockResolvedValue(true);

      const result = await strategy.logout();

      expect(result).toBe(true);
    });
  });

  describe('setAccount', () => {
    it('delegates to provider when initialized', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      const account = { address: testAddress } as any;

      strategy.setAccount(account);

      expect(mockLedgerProvider.setAccount).toHaveBeenCalledWith(account);
    });
  });

  describe('loginOperation', () => {
    it('throws when provider or config missing', async () => {
      const strategy = new LedgerProviderStrategy({});

      await expect(strategy.loginOperation()).rejects.toThrow(
        ProviderErrorsEnum.notInitialized
      );
    });

    it('delegates to authenticateLedgerAccount', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      const options = { token: 'abc' };

      const result = await strategy.loginOperation(options);
      const callArgs = mockAuthenticateLedgerAccount.mock.calls[0]?.[0];
      const actual = { callArgs, result };

      expect(actual).toEqual({
        callArgs: expect.objectContaining({
          options,
          config: { version: '1.0', dataEnabled: true },
          provider: mockLedgerProvider,
          login: expect.any(Function)
        }),
        result: { address: testAddress, signature: 'sig' }
      });
    });
  });

  describe('ledgerLogin', () => {
    it('throws when provider missing', async () => {
      const strategy = new LedgerProviderStrategy({});

      await expect(
        (strategy as any).ledgerLogin({ addressIndex: 0 })
      ).rejects.toThrow(ProviderErrorsEnum.notInitialized);
    });

    it('throws when addressIndex missing', async () => {
      const strategy = new LedgerProviderStrategy({});
      (strategy as any).provider = mockLedgerProvider;

      await expect((strategy as any).ledgerLogin({})).rejects.toThrow(
        'Missing addressIndex for Ledger login'
      );
    });

    it('returns address and signature defaults', async () => {
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

  describe('rebuildProvider', () => {
    it('keeps provider when reachable', async () => {
      const strategy = new LedgerProviderStrategy({});
      (strategy as any).provider = mockLedgerProvider;
      mockLedgerProvider.getAddress.mockResolvedValue(testAddress);

      await (strategy as any).rebuildProvider();

      expect(mockLedgerProvider.getAddress).toHaveBeenCalled();
      expect(mockGetLedgerProvider).not.toHaveBeenCalled();
    });

    it('reinitializes provider on failure', async () => {
      const strategy = new LedgerProviderStrategy({});
      (strategy as any).provider = mockLedgerProvider;
      mockLedgerProvider.getAddress.mockRejectedValue(
        new Error('wallet error')
      );
      const newProvider = { ...mockLedgerProvider };
      mockGetLedgerProvider.mockResolvedValue({ ledgerProvider: newProvider });

      await (strategy as any).rebuildProvider();

      expect(mockGetLedgerProvider).toHaveBeenCalledWith({
        shouldInitProvider: true
      });
      expect((strategy as any).provider).toBe(newProvider);
    });

    it('shows toast and throws when reinit fails', async () => {
      const strategy = new LedgerProviderStrategy({});
      (strategy as any).provider = mockLedgerProvider;
      const error = new Error('reinit failed');
      mockLedgerProvider.getAddress.mockRejectedValue(error);
      mockGetLedgerProvider.mockRejectedValue(error);

      await expect((strategy as any).rebuildProvider()).rejects.toThrow(
        'reinit failed'
      );

      expect(mockCreateCustomToast).toHaveBeenCalledWith(
        expect.objectContaining({
          toastId: 'ledger-provider-rebuild-error',
          title: 'Ledger unavailable'
        })
      );
    });
  });

  describe('signTransactions', () => {
    it('throws when provider missing', async () => {
      const strategy = new LedgerProviderStrategy({});

      await expect(
        strategy.signTransactions([{ hash: 'tx' } as any])
      ).rejects.toThrow(ProviderErrorsEnum.notInitialized);
    });

    it('rebuilds provider and returns signed transactions', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      const txs = [{ hash: 'tx1' } as any];

      const result = await strategy.signTransactions(txs);

      expect(mockSignTransactionsHelper).toHaveBeenCalledWith(
        expect.objectContaining({
          transactions: txs,
          handleSign: expect.any(Function)
        })
      );
      expect(result).toEqual([{ hash: 'signed' }]);
    });
  });

  describe('signMessage', () => {
    it('throws when provider missing', async () => {
      const strategy = new LedgerProviderStrategy({});

      await expect(
        strategy.signMessage({ data: 'hello' } as any)
      ).rejects.toThrow(ProviderErrorsEnum.notInitialized);
    });

    it('rebuilds provider and returns signed message', async () => {
      const strategy = new LedgerProviderStrategy({});
      await strategy.init();
      const message = { data: 'hello' } as any;

      const result = await strategy.signMessage(message);

      expect(mockSignLedgerMessage).toHaveBeenCalledWith(
        expect.objectContaining({
          message,
          handleSignMessage: expect.any(Function)
        })
      );
      expect(result).toEqual({ data: 'signed' });
    });
  });
});
