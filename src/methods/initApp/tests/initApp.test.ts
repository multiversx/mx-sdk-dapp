import { account as mockAccount } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
import { defineCustomElements } from 'lib/sdkDappUi';
import { registerCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { getAccount } from 'methods/account/getAccount';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { setGasStationMetadata } from 'methods/initApp/gasStationMetadata/setGasStationMetadata';
import { waitForStoreRehydration } from 'methods/initApp/helpers/waitForStoreRehydration';
import { initApp, resetInitAppState } from 'methods/initApp/initApp';
import { registerWebsocketListener } from 'methods/initApp/websocket/registerWebsocket';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { clearLocalSession } from 'providers/DappProvider/helpers/logout/logout';
import { restoreProvider } from 'providers/helpers/restoreProvider';
import { ProviderFactory } from 'providers/ProviderFactory';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { setNativeAuthConfig } from 'store/actions/config/configActions';
import { initializeNetwork } from 'store/actions/network/initializeNetwork';
import { initStore } from 'store/store';
import { EnvironmentsEnum } from 'types/enums.types';
import { ThemesEnum } from 'types/theme.types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { switchTheme } from 'utils/visual/switchTheme';

jest.mock('constants/window.constants', () => ({
  safeWindow: {
    multiversx: {
      providers: []
    }
  }
}));

const { safeWindow: mockSafeWindow } = jest.requireMock(
  'constants/window.constants'
) as { safeWindow: { multiversx: { providers: any[] } } };

jest.mock('lib/sdkDappUi', () => ({
  defineCustomElements: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('utils/visual/switchTheme', () => ({
  switchTheme: jest.fn()
}));

jest.mock('utils/account/reconcileAccountNonce', () => ({
  reconcileAccountNonce: jest.fn().mockResolvedValue(undefined)
}));
jest.mock('utils/account/refreshAccount', () => ({
  refreshAccount: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('store/store', () => {
  const mockStore = {
    getState: jest.fn(() => ({})),
    setState: jest.fn(),
    subscribe: jest.fn()
  };
  return {
    initStore: jest.fn().mockReturnValue(mockStore),
    getStore: jest.fn().mockReturnValue(mockStore),
    getState: jest.fn(() => ({}))
  };
});

jest.mock('methods/initApp/helpers/waitForStoreRehydration', () => ({
  waitForStoreRehydration: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('store/actions/network/initializeNetwork', () => ({
  initializeNetwork: jest.fn().mockResolvedValue({
    apiAddress: network.apiAddress
  })
}));

jest.mock('store/actions/config/configActions', () => ({
  setNativeAuthConfig: jest.fn(),
  setFlagsConfig: jest.fn(),
  setWalletConnectConfig: jest.fn(),
  setProviderSettings: jest.fn()
}));

jest.mock('services/nativeAuth/methods/getDefaultNativeAuthConfig', () => ({
  getDefaultNativeAuthConfig: jest.fn().mockReturnValue({
    apiAddress: network.apiAddress,
    origin: network.walletAddress,
    expirySeconds: 86400
  })
}));

jest.mock('managers/TransactionManager/helpers/sessionCallbacks', () => ({
  registerCallbacks: jest.fn()
}));

jest.mock('methods/trackTransactions/trackTransactions', () => ({
  trackTransactions: jest.fn()
}));

jest.mock('providers/helpers/restoreProvider', () => ({
  restoreProvider: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('providers/DappProvider/helpers/logout/logout', () => ({
  clearLocalSession: jest.fn()
}));

jest.mock(
  'providers/DappProvider/helpers/logout/listenForLogoutAcrossTabs',
  () => ({
    listenForLogoutAcrossTabs: jest.fn()
  })
);

jest.mock('methods/account/getAccount', () => ({
  getAccount: jest.fn()
}));

jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn()
}));

jest.mock('methods/initApp/gasStationMetadata/setGasStationMetadata', () => ({
  setGasStationMetadata: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('methods/initApp/websocket/registerWebsocket', () => ({
  registerWebsocketListener: jest.fn().mockResolvedValue(undefined)
}));

// Mock manager instances
const mockToastManagerInit = jest.fn().mockResolvedValue(undefined);
const mockLogoutManagerInit = jest.fn().mockResolvedValue(undefined);

jest.mock('managers/ToastManager', () => ({
  ToastManager: {
    getInstance: jest.fn(() => ({
      init: mockToastManagerInit
    }))
  }
}));

jest.mock('managers/LogoutManager/LogoutManager', () => ({
  LogoutManager: {
    getInstance: jest.fn(() => ({
      init: mockLogoutManagerInit
    }))
  }
}));

describe('initApp tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Reset module state
    resetInitAppState();

    // Control login state
    (getAccount as jest.Mock).mockReturnValue(mockAccount);
    (getIsLoggedIn as jest.Mock).mockReturnValue(false);

    // Reset ProviderFactory state
    ProviderFactory.customProviders = [];
    mockSafeWindow.multiversx.providers = [];
  });

  describe('Scenario 1: isInitializing is true', () => {
    it('should return early when isInitializing is true', async () => {
      (getIsLoggedIn as jest.Mock).mockReturnValue(false);
      (getAccount as jest.Mock).mockReturnValue(mockAccount);

      // First call sets isInitializing to true
      const firstCall = initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet
        }
      });

      // Second call should return early because isInitializing is true
      const secondCall = initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet
        }
      });

      await Promise.all([firstCall, secondCall]);

      // The second call should not have executed any initialization steps
      // We can verify this by checking that defineCustomElements was only called once
      expect(defineCustomElements).toHaveBeenCalledTimes(1);
    });
  });

  describe('Repeated and failed initialization', () => {
    const config = {
      dAppConfig: { environment: EnvironmentsEnum.devnet }
    };

    it('makes concurrent callers wait for the same initialization', async () => {
      let releaseElements: () => void = () => {};
      (defineCustomElements as jest.Mock).mockImplementationOnce(
        () => new Promise<void>((resolve) => (releaseElements = resolve))
      );

      const first = initApp(config);
      const second = initApp(config);
      let isSecondDone = false;
      second.then(() => (isSecondDone = true));

      await new Promise(process.nextTick);
      expect(isSecondDone).toBe(false);

      releaseElements();
      await Promise.all([first, second]);

      expect(isSecondDone).toBe(true);
      expect(defineCustomElements).toHaveBeenCalledTimes(1);
    });

    it('can be retried after a failure', async () => {
      (initializeNetwork as jest.Mock).mockRejectedValueOnce(
        new Error('network down')
      );

      await expect(initApp(config)).rejects.toThrow('network down');
      await initApp(config);

      expect(initializeNetwork).toHaveBeenCalledTimes(2);
      expect(restoreProvider).toHaveBeenCalledTimes(1);
    });

    it('clears the session when the stored provider cannot be restored', async () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      (getIsLoggedIn as jest.Mock).mockReturnValue(true);
      (restoreProvider as jest.Mock).mockRejectedValueOnce(
        new Error('Unable to create provider')
      );

      await expect(initApp(config)).resolves.toBeUndefined();

      expect(clearLocalSession).toHaveBeenCalled();
      expect(refreshAccount).not.toHaveBeenCalled();
      expect(trackTransactions).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it('keeps the store on a second initialization', async () => {
      await initApp(config);
      await initApp(config);

      expect(initStore).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom provider registration', () => {
    const rogueProvider = {
      name: 'Official Wallet',
      type: 'official-wallet',
      iconUrl: 'https://cdn.different.example/logo.png',
      constructor: jest.fn()
    };

    const authoredProvider = {
      name: 'My Wallet',
      type: 'my-wallet',
      constructor: jest.fn()
    };

    it('accepts window.multiversx.providers with warning', async () => {
      const warnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => null);
      mockSafeWindow.multiversx.providers = [rogueProvider];

      await initApp({
        dAppConfig: { environment: EnvironmentsEnum.devnet, nativeAuth: false }
      });

      expect(ProviderFactory.customProviders).toEqual([rogueProvider]);
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('window.multiversx.providers')
      );

      warnSpy.mockRestore();
    });

    it('ignores window.multiversx.providers under strictProviderRegistration', async () => {
      mockSafeWindow.multiversx.providers = [rogueProvider];

      await initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet,
          nativeAuth: false,
          flags: { strictProviderRegistration: true }
        },
        customProviders: [authoredProvider]
      });

      expect(ProviderFactory.customProviders).toEqual([authoredProvider]);
    });

    it('lets the explicitly passed provider win a type collision with the global', async () => {
      const diff = { ...rogueProvider, type: 'my-wallet' };
      mockSafeWindow.multiversx.providers = [diff];

      await initApp({
        dAppConfig: { environment: EnvironmentsEnum.devnet, nativeAuth: false },
        customProviders: [authoredProvider]
      });

      expect(ProviderFactory.customProviders).toEqual([authoredProvider]);
    });
  });

  describe('Scenario 2: User is not logged in', () => {
    it('should initialize app but skip logged-in user steps when isLoggedIn is false', async () => {
      (getAccount as jest.Mock).mockReturnValue({
        ...mockAccount,
        shard: null
      });
      (getIsLoggedIn as jest.Mock).mockReturnValue(false);

      await initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet,
          nativeAuth: false
        }
      });

      // Verify logged-in user steps were NOT called
      expect(refreshAccount).not.toHaveBeenCalled();
      expect(registerWebsocketListener).not.toHaveBeenCalled();
      expect(trackTransactions).not.toHaveBeenCalled();
      expect(mockLogoutManagerInit).not.toHaveBeenCalled();
    });

    it('registers the configured transaction callbacks before any login', async () => {
      (getIsLoggedIn as jest.Mock).mockReturnValue(false);
      const onSuccess = jest.fn();
      const onFail = jest.fn();

      await initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet,
          nativeAuth: false,
          transactionTracking: { onSuccess, onFail }
        }
      });

      expect(registerCallbacks).toHaveBeenCalledWith({ onSuccess, onFail });
    });
  });

  describe('Scenario 3: User is logged in', () => {
    it('should initialize app and execute logged-in user steps when isLoggedIn is true', async () => {
      (getAccount as jest.Mock).mockReturnValue(mockAccount);
      (getIsLoggedIn as jest.Mock).mockReturnValue(true);

      // Ensure refreshAccount mock is reset and configured
      (refreshAccount as jest.Mock).mockClear();
      (refreshAccount as jest.Mock).mockResolvedValue(undefined);

      await initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet,
          nativeAuth: false
        }
      });

      // Verify initialization steps were called
      expect(defineCustomElements).toHaveBeenCalled();
      expect(switchTheme).toHaveBeenCalledWith(ThemesEnum.dark);
      expect(waitForStoreRehydration).toHaveBeenCalled();
      expect(getIsLoggedIn).toHaveBeenCalled();
      expect(getAccount).toHaveBeenCalled();
      expect(mockToastManagerInit).toHaveBeenCalled();
      expect(restoreProvider).toHaveBeenCalled();

      // Verify logged-in user steps WERE called
      expect(refreshAccount).toHaveBeenCalled();
      expect(registerWebsocketListener).toHaveBeenCalledWith(
        mockAccount.address
      );
      expect(trackTransactions).toHaveBeenCalled();
      expect(mockLogoutManagerInit).toHaveBeenCalled();
      expect(registerCallbacks).toHaveBeenCalledWith({
        onSuccess: undefined,
        onFail: undefined
      });

      // Verify gas station metadata was set when account has shard
      expect(setGasStationMetadata).toHaveBeenCalledWith({
        shard: 0,
        apiAddress: network.apiAddress
      });
    });
  });

  describe('Scenario 4: NativeAuth is enabled', () => {
    it('should configure nativeAuth when nativeAuth is set to true', async () => {
      (getAccount as jest.Mock).mockReturnValue(mockAccount);
      (getIsLoggedIn as jest.Mock).mockReturnValue(false);

      await initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.devnet,
          nativeAuth: true
        }
      });

      // Verify getDefaultNativeAuthConfig was called with apiAddress
      expect(getDefaultNativeAuthConfig).toHaveBeenCalledWith({
        apiAddress: network.apiAddress
      });

      // Verify setNativeAuthConfig was called with the config
      expect(setNativeAuthConfig).toHaveBeenCalledWith({
        apiAddress: network.apiAddress,
        origin: network.walletAddress,
        expirySeconds: 86400
      });
    });

    it('should configure nativeAuth when nativeAuth is an object with config', async () => {
      (getAccount as jest.Mock).mockReturnValue(mockAccount);
      (getIsLoggedIn as jest.Mock).mockReturnValue(false);

      const customNativeAuthConfig = {
        apiAddress: network.apiAddress,
        origin: network.walletAddress,
        expirySeconds: 3600
      };

      await initApp({
        dAppConfig: {
          environment: EnvironmentsEnum.mainnet,
          nativeAuth: customNativeAuthConfig
        }
      });

      // Verify getDefaultNativeAuthConfig was called with the custom config
      expect(getDefaultNativeAuthConfig).toHaveBeenCalledWith(
        customNativeAuthConfig
      );

      // Verify setNativeAuthConfig was called
      expect(setNativeAuthConfig).toHaveBeenCalled();
    });
  });
});
