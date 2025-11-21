import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { LedgerIdleStateManager } from '../LedgerIdleStateManager';

type ProviderTypeValue =
  (typeof ProviderTypeEnum)[keyof typeof ProviderTypeEnum];

const mockState: {
  loginInfo: { providerType?: ProviderTypeValue };
  account: { isLoggedIn: boolean };
} = {
  loginInfo: { providerType: undefined },
  account: { isLoggedIn: false }
};

const intervalCallbacks: Array<() => Promise<void> | void> = [];

jest.mock('store/store', () => ({
  getStore: () => ({
    getState: jest.fn(() => mockState)
  }),
  getState: jest.fn(() => mockState)
}));

jest.mock('store/selectors/loginInfoSelectors', () => ({
  loginInfoSelector: jest.fn((state) => state.loginInfo)
}));

jest.mock('store/selectors/accountSelectors', () => ({
  isLoggedInSelector: jest.fn((state) => state.account.isLoggedIn)
}));

jest.mock('store/selectors/uiSelectors', () => ({
  isSidePanelOpenSelector: jest.fn(() => false)
}));

const toastMock = { createCustomToast: jest.fn() };

jest.mock('managers/ToastManager', () => ({
  ToastManager: {
    getInstance: () => toastMock
  }
}));

const mockLedgerProviderInstance = {
  getAddress: jest.fn(),
  init: jest.fn()
};

const mockDappProvider = jest.fn();

jest.mock('providers/helpers/accountProvider', () => ({
  getAccountProvider: jest.fn(() => ({
    getProvider: () => mockLedgerProviderInstance
  })),
  setAccountProvider: jest.fn()
}));

jest.mock('providers/DappProvider', () => ({
  DappProvider: jest.fn((createdProvider) => {
    mockDappProvider(createdProvider);
    return { provider: createdProvider };
  })
}));

jest.mock(
  'providers/strategies/LedgerProviderStrategy/LedgerProviderStrategy',
  () => ({
    LedgerProviderStrategy: jest.fn().mockImplementation((config) => ({
      init: jest.fn(),
      getType: jest.fn(),
      config
    }))
  })
);

const { LedgerProviderStrategy: LedgerProviderStrategyMock } = jest.requireMock(
  'providers/strategies/LedgerProviderStrategy/LedgerProviderStrategy'
) as { LedgerProviderStrategy: jest.Mock };

const { setAccountProvider: mockSetAccountProvider } = jest.requireMock(
  'providers/helpers/accountProvider'
) as {
  setAccountProvider: jest.Mock;
};

describe('LedgerIdleStateManager tests', () => {
  let setIntervalSpy: jest.SpyInstance;
  let clearIntervalSpy: jest.SpyInstance;
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  beforeEach(() => {
    setIntervalSpy = jest.spyOn(global, 'setInterval');
    setIntervalSpy.mockImplementation((cb: any) => {
      intervalCallbacks.push(cb);
      return 1 as any;
    });
    clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    clearIntervalSpy.mockImplementation(() => 0 as any);
    jest.clearAllMocks();
    mockState.loginInfo.providerType = undefined;
    mockState.account.isLoggedIn = false;
    mockLedgerProviderInstance.getAddress.mockResolvedValue(undefined);
    toastMock.createCustomToast.mockClear();
    intervalCallbacks.length = 0;
    LedgerProviderStrategyMock.mockClear();
    mockDappProvider.mockClear();
    mockSetAccountProvider.mockClear();
  });

  afterEach(() => {
    setIntervalSpy.mockRestore();
    clearIntervalSpy.mockRestore();
    consoleSpy.mockClear();
  });

  describe('init', () => {
    it('starts check connection loop', () => {
      const manager = LedgerIdleStateManager.getInstance();
      (manager as any).connectionCheckInterval = null;
      manager.init();
      expect(intervalCallbacks.length).toBeGreaterThan(0);
    });
  });

  describe('shouldCheckConnection', () => {
    it('returns false when not ledger provider', () => {
      const manager = LedgerIdleStateManager.getInstance();
      expect((manager as any).shouldCheckConnection()).toBe(false);
    });

    it('returns true when ledger provider logged in', () => {
      const manager = LedgerIdleStateManager.getInstance();
      mockState.loginInfo.providerType = ProviderTypeEnum.ledger;
      mockState.account.isLoggedIn = true;

      expect((manager as any).shouldCheckConnection()).toBe(true);
    });
  });

  describe('startCheckConnectionLoop', () => {
    it('does not create new interval if already running', () => {
      const manager = LedgerIdleStateManager.getInstance();
      (manager as any).connectionCheckInterval = 123;
      (manager as any).startCheckConnectionLoop();
      expect(intervalCallbacks.length).toBe(0);
    });

    it('handles provider error and schedules reconnect', async () => {
      const manager = LedgerIdleStateManager.getInstance();
      mockState.loginInfo.providerType = ProviderTypeEnum.ledger;
      mockState.account.isLoggedIn = true;
      mockLedgerProviderInstance.getAddress.mockRejectedValueOnce(
        new Error('fail')
      );

      (manager as any).connectionCheckInterval = null;
      (manager as any).startCheckConnectionLoop();
      await intervalCallbacks[0]?.();

      expect(toastMock.createCustomToast).toHaveBeenCalledWith(
        expect.objectContaining({
          toastId: 'ledger-provider-idle-warning',
          title: 'Ledger disconnected'
        })
      );
    });
  });

  describe('reconnectProvider', () => {
    it('returns early when shouldCheckConnection is false', async () => {
      const manager = LedgerIdleStateManager.getInstance();
      mockState.loginInfo.providerType = undefined;
      mockState.account.isLoggedIn = false;
      const result = await (manager as any).reconnectProvider();
      expect(result).toBeUndefined();
      expect(mockDappProvider).not.toHaveBeenCalled();
    });

    it('recreates provider and restarts loop on success', async () => {
      const manager = LedgerIdleStateManager.getInstance();
      mockState.loginInfo.providerType = ProviderTypeEnum.ledger;
      mockState.account.isLoggedIn = true;
      const createdProvider = {
        init: jest.fn(),
        getType: jest.fn()
      };
      LedgerProviderStrategyMock.mockImplementation(() => createdProvider);

      await (manager as any).reconnectProvider();

      expect(createdProvider.init).toHaveBeenCalled();
      expect(mockDappProvider).toHaveBeenCalledWith(createdProvider);
      expect(mockSetAccountProvider).toHaveBeenCalled();
      expect(toastMock.createCustomToast).toHaveBeenCalledWith(
        expect.objectContaining({
          toastId: 'ledger-provider-idle-warning',
          title: 'Ledger reconnected'
        })
      );
    });

    it('logs error when reconnection fails', async () => {
      const manager = LedgerIdleStateManager.getInstance();
      mockState.loginInfo.providerType = ProviderTypeEnum.ledger;
      mockState.account.isLoggedIn = true;
      LedgerProviderStrategyMock.mockImplementation(() => ({
        init: jest.fn().mockRejectedValue(new Error('fail'))
      }));

      await (manager as any).reconnectProvider();

      expect(consoleSpy).toHaveBeenCalledWith('Unable to reconnect to Ledger');
    });
  });
});
