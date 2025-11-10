import { account as mockAccount } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
import { defineCustomElements } from 'lib/sdkDappUi';
import { registerCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { getAccount } from 'methods/account/getAccount';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { waitForStoreRehydration } from 'methods/initApp/helpers/waitForStoreRehydration';
import { initApp, resetInitAppState } from 'methods/initApp/initApp';
import { setGasStationMetadata } from 'methods/initApp/setGasStationMetadata/setGasStationMetadata';
import { registerWebsocketListener } from 'methods/initApp/websocket/registerWebsocket';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { restoreProvider } from 'providers/helpers/restoreProvider';
import { ProviderFactory } from 'providers/ProviderFactory';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { setNativeAuthConfig } from 'store/actions/config/configActions';
import { EnvironmentsEnum } from 'types/enums.types';
import { ThemesEnum } from 'types/theme.types';
import { refreshAccount } from 'utils';
import { switchTheme } from 'utils/visual/switchTheme';

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

jest.mock('utils/visual/switchTheme', () => ({
  switchTheme: jest.fn()
}));

jest.mock('store/store', () => {
  const mockStore = {
    getState: jest.fn(),
    setState: jest.fn(),
    subscribe: jest.fn()
  };
  return {
    initStore: jest.fn().mockReturnValue(mockStore),
    getStore: jest.fn().mockReturnValue(mockStore)
  };
});

jest.mock('methods/initApp/helpers/waitForStoreRehydration', () => ({
  waitForStoreRehydration: jest.fn().mockResolvedValue(undefined)
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

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  refreshAccount: jest.fn().mockResolvedValue(undefined)
}));

jest.mock('methods/account/getAccount', () => ({
  getAccount: jest.fn()
}));

jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn()
}));

jest.mock('methods/initApp/helpers/setGasStationMetadata', () => ({
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
