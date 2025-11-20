import { testAddress } from '__mocks__';
import { ToastManager } from 'managers/ToastManager';
import { createStoreStub } from 'managers/ToastManager/tests/helpers/createStoreStub';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { getTokenExpiration } from 'services/nativeAuth/methods/getTokenExpiration';
import {
  addressSelector,
  isLoggedInSelector
} from 'store/selectors/accountSelectors';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getStore } from 'store/store';
import { LogoutManager } from '../LogoutManager';

// Mock dependencies
jest.mock('store/store');
jest.mock('managers/ToastManager');
jest.mock('providers/helpers/accountProvider');
jest.mock('services/nativeAuth/methods/getTokenExpiration');
jest.mock('store/selectors/accountSelectors');
jest.mock('store/selectors/configSelectors');
jest.mock('store/selectors/loginInfoSelectors');

const mockGetStore = getStore as jest.MockedFunction<typeof getStore>;
const mockToastManagerGetInstance =
  ToastManager.getInstance as jest.MockedFunction<
    typeof ToastManager.getInstance
  >;
const mockGetAccountProvider = getAccountProvider as jest.MockedFunction<
  typeof getAccountProvider
>;
const mockGetTokenExpiration = getTokenExpiration as jest.MockedFunction<
  typeof getTokenExpiration
>;
const mockTokenLoginSelector = tokenLoginSelector as jest.MockedFunction<
  typeof tokenLoginSelector
>;
const mockIsLoggedInSelector = isLoggedInSelector as jest.MockedFunction<
  typeof isLoggedInSelector
>;
const mockAddressSelector = addressSelector as jest.MockedFunction<
  typeof addressSelector
>;
const mockNativeAuthConfigSelector =
  nativeAuthConfigSelector as jest.MockedFunction<
    typeof nativeAuthConfigSelector
  >;

describe('LogoutManager tests', () => {
  let mockStore: ReturnType<typeof createStoreStub>;
  let mockToastManager: {
    createCustomToast: jest.Mock;
  };
  let mockProvider: {
    logout: jest.Mock;
    getType: jest.Mock;
  };

  const mockAddress = testAddress;
  const mockToken = 'mock-native-auth-token';
  const mockExpiresAt = 1000000;
  const mockSecondsUntilExpires = 60;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();

    // Reset singleton instance
    (LogoutManager as any).instance = undefined;

    // Setup mock store
    mockStore = createStoreStub({
      account: { address: mockAddress },
      loginInfo: { tokenLogin: { nativeAuthToken: mockToken } },
      config: {
        nativeAuthConfig: {
          tokenExpirationToastWarningSeconds: 10
        }
      }
    });

    mockGetStore.mockReturnValue(mockStore);

    // Setup mock ToastManager
    mockToastManager = {
      createCustomToast: jest.fn()
    };
    mockToastManagerGetInstance.mockReturnValue(mockToastManager as any);

    // Setup mock provider
    mockProvider = {
      logout: jest.fn().mockResolvedValue(true),
      getType: jest.fn().mockReturnValue(ProviderTypeEnum.extension)
    };
    mockGetAccountProvider.mockReturnValue(mockProvider as any);

    // Setup default selector mocks
    mockTokenLoginSelector.mockImplementation((state) => {
      return state.loginInfo?.tokenLogin;
    });
    mockIsLoggedInSelector.mockImplementation((state) => {
      return Boolean(state.account?.address);
    });
    mockAddressSelector.mockImplementation((state) => {
      return state.account?.address;
    });
    mockNativeAuthConfigSelector.mockImplementation((state) => {
      return state.config?.nativeAuthConfig;
    });

    // Setup default token expiration mock
    mockGetTokenExpiration.mockReturnValue({
      isExpired: false,
      expiresAt: mockExpiresAt,
      secondsUntilExpires: mockSecondsUntilExpires
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('init() Method - shouldStart() Prevention', () => {
    it('does not proceed when shouldStart returns false (no tokenLogin)', async () => {
      mockTokenLoginSelector.mockReturnValue(null);

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Should not call getTokenExpiration or logout
      expect(mockGetTokenExpiration).not.toHaveBeenCalled();
      expect(mockProvider.logout).not.toHaveBeenCalled();
    });

    it('does not proceed when shouldStart returns false (no nativeAuthToken)', async () => {
      mockTokenLoginSelector.mockReturnValue({ nativeAuthToken: null } as any);

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Should not call getTokenExpiration or logout
      expect(mockGetTokenExpiration).not.toHaveBeenCalled();
      expect(mockProvider.logout).not.toHaveBeenCalled();
    });

    it('does not proceed when shouldStart returns false (not logged in)', async () => {
      mockIsLoggedInSelector.mockReturnValue(false);

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Should not call getTokenExpiration or logout
      expect(mockGetTokenExpiration).not.toHaveBeenCalled();
      expect(mockProvider.logout).not.toHaveBeenCalled();
    });
  });

  describe('init() Method - Webview Login Prevention', () => {
    it('does not schedule logout when no address in store', async () => {
      mockAddressSelector.mockReturnValue(undefined as any);

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Advance time - logout should not be called
      jest.advanceTimersByTime(mockSecondsUntilExpires * 1000);

      expect(mockProvider.logout).not.toHaveBeenCalled();
    });
  });

  describe('init() Method - Duplicate Prevention', () => {
    it('does not schedule duplicate logout for same address and expiration time', async () => {
      const manager = LogoutManager.getInstance();

      await manager.init();
      const firstCallTimeouts = {
        warning: (manager as any).warningLogoutTimeoutRef,
        planned: (manager as any).plannedLogoutTimeoutRef,
        actual: (manager as any).actualLogoutTimeoutRef
      };

      await manager.init();
      const secondCallTimeouts = {
        warning: (manager as any).warningLogoutTimeoutRef,
        planned: (manager as any).plannedLogoutTimeoutRef,
        actual: (manager as any).actualLogoutTimeoutRef
      };

      // Timeouts should be the same (not duplicated)
      expect(firstCallTimeouts.planned).toBe(secondCallTimeouts.planned);
    });

    it('allows new logout schedule when expiration time changes', async () => {
      const manager = LogoutManager.getInstance();

      await manager.init();
      const firstPlannedKey = (manager as any).plannedLogoutKey;

      // Change expiration time
      mockGetTokenExpiration.mockReturnValue({
        isExpired: false,
        expiresAt: mockExpiresAt + 1000,
        secondsUntilExpires: mockSecondsUntilExpires
      });

      await manager.init();
      const secondPlannedKey = (manager as any).plannedLogoutKey;

      expect(firstPlannedKey).not.toBe(secondPlannedKey);
    });
  });

  describe('stop() Method', () => {
    it('clears warning timeout', async () => {
      const manager = LogoutManager.getInstance();
      await manager.init();

      const warningTimeout = (manager as any).warningLogoutTimeoutRef;
      expect(warningTimeout).not.toBeNull();

      manager.stop();

      expect((manager as any).warningLogoutTimeoutRef).toBeNull();
    });

    it('resets plannedLogoutKey to null', async () => {
      const manager = LogoutManager.getInstance();
      await manager.init();

      expect((manager as any).plannedLogoutKey).not.toBeNull();

      manager.stop();

      expect((manager as any).plannedLogoutKey).toBeNull();
    });
  });

  describe('Warning Toast Scheduling', () => {
    it('does not schedule warning if tokenExpirationToastWarningSeconds not configured', async () => {
      mockNativeAuthConfigSelector.mockReturnValue(null);

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Advance time - warning should not be shown
      jest.advanceTimersByTime((mockSecondsUntilExpires - 5) * 1000);

      expect(mockToastManager.createCustomToast).not.toHaveBeenCalled();
    });

    it('does not schedule duplicate warning if already scheduled', async () => {
      const manager = LogoutManager.getInstance();
      await manager.init();

      const firstWarningTimeout = (manager as any).warningLogoutTimeoutRef;

      // Call addLogoutWarning again (via init)
      await manager.init();

      const secondWarningTimeout = (manager as any).warningLogoutTimeoutRef;

      // Should be the same timeout (not duplicated)
      expect(firstWarningTimeout).toBe(secondWarningTimeout);
    });
  });

  describe('Logout Toast and Execution', () => {
    it('executes provider logout immediately when token is already expired', async () => {
      mockGetTokenExpiration.mockReturnValue({
        isExpired: true,
        expiresAt: mockExpiresAt,
        secondsUntilExpires: mockSecondsUntilExpires
      });

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Logout should be called immediately, not scheduled
      expect(mockProvider.logout).toHaveBeenCalledTimes(1);
      expect(mockGetAccountProvider).toHaveBeenCalledTimes(1);

      // Should not schedule any timeouts
      expect((manager as any).plannedLogoutTimeoutRef).toBeNull();
      expect((manager as any).warningLogoutTimeoutRef).toBeNull();
    });

    it('executes provider logout at token expiration time', async () => {
      const manager = LogoutManager.getInstance();
      await manager.init();

      // Advance time to expiration
      jest.advanceTimersByTime(mockSecondsUntilExpires * 1000);

      expect(mockProvider.logout).toHaveBeenCalledTimes(1);
    });
  });

  describe('Timeout Edge Cases', () => {
    it('handles warning time greater than expiration time (schedules immediately)', async () => {
      const largeWarningSeconds = 100; // Greater than 60 seconds expiration
      mockGetTokenExpiration.mockReturnValue({
        isExpired: false,
        expiresAt: mockExpiresAt,
        secondsUntilExpires: mockSecondsUntilExpires
      });
      mockNativeAuthConfigSelector.mockReturnValue({
        tokenExpirationToastWarningSeconds: largeWarningSeconds
      } as any);

      const manager = LogoutManager.getInstance();
      await manager.init();

      // Warning should be scheduled immediately (timeout = 0)
      jest.advanceTimersByTime(0);

      expect(mockToastManager.createCustomToast).toHaveBeenCalledWith(
        expect.objectContaining({
          toastId: 'native-auth-expired'
        })
      );
    });
  });
});
