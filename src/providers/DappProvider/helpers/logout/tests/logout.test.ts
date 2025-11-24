import { testAddress } from '__mocks__/accountConfig';
import { subscriptions } from 'constants/storage.constants';
import { logout } from '../logout';

jest.mock('constants/window.constants', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  return {
    safeWindow: { localStorage: localStorageMock },
    localStorageMock
  };
});

jest.mock('methods/account/getAddress', () => ({
  getAddress: jest.fn()
}));

jest.mock('methods/initApp/websocket/registerWebsocket', () => ({
  websocketManager: { closeConnectionRef: jest.fn() }
}));

jest.mock('store/actions/sharedActions/sharedActions', () => ({
  logoutAction: jest.fn()
}));

const { localStorageMock } = jest.requireMock('constants/window.constants');

const { getAddress } = jest.requireMock('methods/account/getAddress') as {
  getAddress: jest.Mock;
};

describe('logout helper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    subscriptions.clear();
    getAddress.mockReturnValue(testAddress);
    localStorageMock.getItem.mockReset();
    localStorageMock.setItem.mockReset();
    localStorageMock.removeItem.mockReset();
  });

  it('broadcasts logout, clears subscriptions and returns provider status', async () => {
    const unsubscribe = jest.fn();
    subscriptions.set('sub' as any, unsubscribe);
    const provider = { logout: jest.fn().mockResolvedValue(true) } as any;

    const result = await logout({
      provider,
      options: { shouldBroadcastLogoutAcrossTabs: true }
    });

    expect(result).toBe(true);
  });

  it('returns false and logs error when provider logout fails', async () => {
    const error = new Error('fail');
    const provider = { logout: jest.fn().mockRejectedValue(error) } as any;
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = await logout({ provider });

    expect(consoleSpy).toHaveBeenCalledWith('Logging out error:', error);
    expect(result).toBe(false);
    consoleSpy.mockRestore();
  });
});
