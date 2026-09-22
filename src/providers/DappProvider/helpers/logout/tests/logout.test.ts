import { logout } from '../logout';

const mockGetFlagsConfig = jest.fn();
const mockLogoutAction = jest.fn();

jest.mock('methods/initApp/helpers/getFlagsConfig', () => ({
  getFlagsConfig: () => mockGetFlagsConfig()
}));

jest.mock('store/actions/sharedActions/sharedActions', () => ({
  logoutAction: () => mockLogoutAction()
}));

jest.mock('methods/account/getAddress', () => ({
  getAddress: () => 'erd1qqq'
}));

jest.mock('methods/initApp/websocket/registerWebsocket', () => ({
  websocketManager: { closeConnectionRef: jest.fn() }
}));

jest.mock('constants/window.constants', () => ({
  safeWindow: { localStorage: undefined }
}));

jest.mock('providers/helpers/emptyProvider', () => ({
  emptyProvider: { logout: jest.fn() }
}));

jest.mock('managers/LogoutManager/LogoutManager', () => ({
  LogoutManager: { getInstance: () => ({ stop: jest.fn() }) }
}));

const makeProvider = (logoutImpl: () => Promise<boolean>) =>
  ({ logout: jest.fn(logoutImpl) }) as any;

describe('logout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => null);
    jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => jest.restoreAllMocks());

  describe('default behaviour', () => {
    beforeEach(() =>
      mockGetFlagsConfig.mockReturnValue({ strictLogout: false })
    );

    it('clears local state and returns the provider result', async () => {
      const result = await logout({
        provider: makeProvider(async () => true)
      });

      expect(result).toBe(true);
      expect(mockLogoutAction).toHaveBeenCalled();
    });

    it('swallows a provider failure, leaving state already cleared', async () => {
      const result = await logout({
        provider: makeProvider(async () => {
          throw new Error('cable unplugged');
        })
      });

      expect(result).toBe(false);
      expect(mockLogoutAction).toHaveBeenCalled();
    });
  });

  describe('strictLogout on', () => {
    beforeEach(() =>
      mockGetFlagsConfig.mockReturnValue({ strictLogout: true })
    );

    it('logs the provider out before clearing local state', async () => {
      const callOrder: string[] = [];
      mockLogoutAction.mockImplementation(() => callOrder.push('logoutAction'));
      const provider = makeProvider(async () => {
        callOrder.push('provider.logout');
        return true;
      });

      await expect(logout({ provider })).resolves.toBe(true);
      expect(callOrder).toEqual(['provider.logout', 'logoutAction']);
    });

    it('keeps the session when the provider throws', async () => {
      const provider = makeProvider(async () => {
        throw new Error('cable unplugged');
      });

      await expect(logout({ provider })).rejects.toThrow('cable unplugged');
      expect(mockLogoutAction).not.toHaveBeenCalled();
    });

    it('keeps the session when the provider reports failure', async () => {
      const provider = makeProvider(async () => false);

      await expect(logout({ provider })).rejects.toThrow(
        'Provider logout did not succeed'
      );
      expect(mockLogoutAction).not.toHaveBeenCalled();
    });
  });

  it('clears the session when strict logout runs without an initialized provider', async () => {
    mockGetFlagsConfig.mockReturnValue({ strictLogout: true });
    const { emptyProvider } = jest.requireMock(
      'providers/helpers/emptyProvider'
    );

    await expect(logout({ provider: emptyProvider })).resolves.toBe(true);

    expect(mockLogoutAction).toHaveBeenCalled();
    expect(emptyProvider.logout).not.toHaveBeenCalled();
  });
});
