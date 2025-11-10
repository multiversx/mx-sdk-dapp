import { account as mockAccount } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
import { defineCustomElements } from 'lib/sdkDappUi';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { ToastManager } from 'managers/ToastManager';
import { registerCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { getAccount } from 'methods/account/getAccount';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { setGasStationMetadata } from 'methods/initApp/gastStationMetadata/setGasStationMetadata';
import { waitForStoreRehydration } from 'methods/initApp/helpers/waitForStoreRehydration';
import { initApp } from 'methods/initApp/initApp';
import { registerWebsocketListener } from 'methods/initApp/websocket/registerWebsocket';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { restoreProvider } from 'providers/helpers/restoreProvider';
import { ProviderFactory } from 'providers/ProviderFactory';
import { initializeNetwork } from 'store/actions';
import {
  setNativeAuthConfig,
  setWalletConnectConfig
} from 'store/actions/config/configActions';
import { initStore, StoreApi } from 'store/store';
import { EnvironmentsEnum } from 'types/enums.types';
import { ThemesEnum } from 'types/theme.types';
import { refreshAccount } from 'utils';
import { switchTheme } from 'utils/visual/switchTheme';

/*
Execution flow:
  1. defineCustomElements
  2. switchTheme
  3. initStore
  4. waitForStoreRehydration
  5. initializeNetwork
  6. setNativeAuthConfig
  7. setWalletConnectConfig
  8. getIsLoggedIn
  9. getAccount
  10. ToastManager.getInstance().init()
  11. usedProviders
  12. ProviderFactory.customProviders = usedProviders.filter((provider, index, arr) => index === arr.findIndex((item) => item.type === provider.type)) || [];
  13. restoreProvider
  14. refreshAccount
  15. registerWebsocketListener
  16. trackTransactions
  17. LogoutManager.getInstance().init();
  18. registerCallbacks
  19. setGasStationMetadata

  Scenario 1.
    - isInitializing is true
    - return early
    - end of test

  Scenario 2:
    - isInitializing is false
    - dAppConfig?.nativeAuth is false
    - dAppConfig?.providers?.walletConnect is false
    - isAppInitialized is false
    - isLoggedIn is false 
    - end of test

  Scenario 3:
    - isInitializing is false
    - dAppConfig?.nativeAuth is false
    - dAppConfig?.providers?.walletConnect is false
    - isAppInitialized is false
    - isLoggedIn is true 
    - end of test
*/

jest.mock('constants/window.constants', () => ({
  safeWindow: {
    multiversx: {
      providers: []
    }
  }
}));

jest.mock('lib/sdkDappUi', () => ({
  defineCustomElements: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('managers/LogoutManager/LogoutManager', () => ({
  LogoutManager: {
    getInstance: jest.fn().mockReturnValue({
      init: jest.fn()
    })
  }
}));

jest.mock('managers/TransactionManager/helpers/sessionCallbacks', () => ({
  registerCallbacks: jest.fn()
}));

jest.mock('managers/ToastManager', () => ({
  ToastManager: {
    getInstance: jest.fn().mockReturnValue({
      init: jest.fn().mockResolvedValue(undefined)
    })
  }
}));

jest.mock('providers/helpers/restoreProvider', () => ({
  restoreProvider: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('providers/ProviderFactory', () => ({
  ProviderFactory: {
    customProviders: []
  }
}));

jest.mock('store/actions', () => ({
  initializeNetwork: jest.fn().mockResolvedValue({
    apiAddress: network.apiAddress
  })
}));

jest.mock('store/actions/config/configActions', () => ({
  setNativeAuthConfig: jest.fn(),
  setWalletConnectConfig: jest.fn()
}));

jest.mock('store/store', () => ({
  initStore: jest.fn()
}));

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  refreshAccount: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('utils/visual/switchTheme', () => ({
  switchTheme: jest.fn()
}));

jest.mock('methods/account/getAccount', () => ({
  getAccount: jest.fn()
}));

jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn()
}));

jest.mock('methods/trackTransactions/trackTransactions', () => ({
  trackTransactions: jest.fn()
}));

jest.mock('methods/initApp/gastStationMetadata/setGasStationMetadata', () => ({
  setGasStationMetadata: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('methods/initApp/helpers/waitForStoreRehydration', () => ({
  waitForStoreRehydration: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('methods/initApp/websocket/registerWebsocket', () => ({
  registerWebsocketListener: jest.fn().mockResolvedValue(undefined)
}));

describe('initApp tests', () => {
  let mockStore: StoreApi;
  let mockToastManager: any;
  let mockLogoutManager: any;

  beforeEach(() => {
    jest.clearAllMocks();

    // Setup default mocks for getAccount and getIsLoggedIn
    (getAccount as jest.Mock).mockReturnValue(mockAccount);
    (getIsLoggedIn as jest.Mock).mockReturnValue(false);

    // Create mock store
    mockStore = {
      persist: {
        hasHydrated: jest.fn().mockReturnValue(true),
        onFinishHydration: jest.fn()
      }
    } as unknown as StoreApi;

    (initStore as jest.Mock).mockReturnValue(mockStore);

    // Setup mock managers
    mockToastManager = {
      init: jest.fn().mockResolvedValue(undefined)
    };

    (ToastManager.getInstance as jest.Mock).mockReturnValue(mockToastManager);

    mockLogoutManager = {
      init: jest.fn()
    };

    (LogoutManager.getInstance as jest.Mock).mockReturnValue(mockLogoutManager);

    // Reset ProviderFactory
    ProviderFactory.customProviders = [];
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

  // Scenarios 2 & 3 need jest.isolateModulesAsync to reset the module state
  // (isAppInitialized = false) to test the full initialization flow
  describe('Scenario 2: User is not logged in', () => {
    it('should initialize app but skip logged-in user steps when isLoggedIn is false', async () => {
      (getAccount as jest.Mock).mockReturnValue({
        ...mockAccount,
        shard: null
      });
      (getIsLoggedIn as jest.Mock).mockReturnValue(false);

      await jest.isolateModulesAsync(async () => {
        const { initApp: initAppIsolated } = await import(
          'methods/initApp/initApp'
        );

        await initAppIsolated({
          dAppConfig: {
            environment: EnvironmentsEnum.devnet,
            nativeAuth: false
          }
        });
      });

      // Verify logged-in user steps were NOT called
      expect(refreshAccount).not.toHaveBeenCalled();
      expect(registerWebsocketListener).not.toHaveBeenCalled();
      expect(trackTransactions).not.toHaveBeenCalled();
      expect(mockLogoutManager.init).not.toHaveBeenCalled();
      expect(registerCallbacks).not.toHaveBeenCalled();
    });
  });

  describe('Scenario 3: User is logged in', () => {
    it('should initialize app and execute logged-in user steps when isLoggedIn is true', async () => {
      (getAccount as jest.Mock).mockReturnValue(mockAccount);
      (getIsLoggedIn as jest.Mock).mockReturnValue(true);

      // Ensure refreshAccount mock is reset and configured
      (refreshAccount as jest.Mock).mockClear();
      (refreshAccount as jest.Mock).mockResolvedValue(undefined);

      await jest.isolateModulesAsync(async () => {
        const { initApp: initAppIsolated } = await import(
          'methods/initApp/initApp'
        );

        await initAppIsolated({
          dAppConfig: {
            environment: EnvironmentsEnum.devnet,
            nativeAuth: false
          }
        });
      });

      // Verify initialization steps were called
      expect(defineCustomElements).toHaveBeenCalled();
      expect(switchTheme).toHaveBeenCalledWith(ThemesEnum.dark);
      expect(initStore).toHaveBeenCalled();
      expect(waitForStoreRehydration).toHaveBeenCalled();
      expect(initializeNetwork).toHaveBeenCalled();
      expect(getIsLoggedIn).toHaveBeenCalled();
      expect(getAccount).toHaveBeenCalled();
      expect(mockToastManager.init).toHaveBeenCalled();
      expect(restoreProvider).toHaveBeenCalled();

      // Verify logged-in user steps WERE called
      expect(refreshAccount).toHaveBeenCalled();
      expect(registerWebsocketListener).toHaveBeenCalledWith(
        mockAccount.address
      );
      expect(trackTransactions).toHaveBeenCalled();
      expect(mockLogoutManager.init).toHaveBeenCalled();
      expect(registerCallbacks).toHaveBeenCalledWith({
        onSuccess: undefined,
        onFail: undefined
      });

      // Verify gas station metadata was set when account has shard
      expect(setGasStationMetadata).toHaveBeenCalledWith({
        shard: 0,
        apiAddress: 'https://devnet-api.multiversx.com'
      });

      // Verify native auth and wallet connect were not set
      expect(setNativeAuthConfig).not.toHaveBeenCalled();
      expect(setWalletConnectConfig).not.toHaveBeenCalled();
    });
  });
});
