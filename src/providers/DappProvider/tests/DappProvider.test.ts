import type { IProvider } from 'providers/types/providerFactory.types';
import { DappProvider } from '../DappProvider';

jest.mock('../helpers/logout/logout', () => ({
  logout: jest.fn()
}));

const { logout: mockLogout } = jest.requireMock('../helpers/logout/logout') as {
  logout: jest.Mock;
};

describe('DappProvider tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLogout.mockReset();
  });

  it('isInitialized proxies call to underlying provider', () => {
    const providerMock = {
      isInitialized: jest.fn().mockReturnValue(true)
    } as unknown as IProvider;

    const dappProvider = new DappProvider(providerMock);

    const result = dappProvider.isInitialized();

    expect(providerMock.isInitialized).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('returns false and warns when logout already running', async () => {
    const providerMock = {} as IProvider;
    const dappProvider = new DappProvider(providerMock);
    (dappProvider as any)._isLoggingOut = true;
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    const result = await dappProvider.logout();

    expect(result).toBe(false);
    expect(warnSpy).toHaveBeenCalledWith('Logout already in progress');
    warnSpy.mockRestore();
  });

  it('resets flag and returns logout result', async () => {
    const providerMock = {} as IProvider;
    mockLogout.mockResolvedValue(true);
    const dappProvider = new DappProvider(providerMock);

    const result = await dappProvider.logout({
      shouldBroadcastLogoutAcrossTabs: false
    });

    expect(mockLogout).toHaveBeenCalledWith({
      provider: providerMock,
      options: { shouldBroadcastLogoutAcrossTabs: false }
    });
    expect(result).toBe(true);
    expect((dappProvider as any)._isLoggingOut).toBe(false);
  });

  it('getProvider returns the same provider instance', () => {
    const providerMock = { getType: jest.fn() } as unknown as IProvider;

    const dappProvider = new DappProvider(providerMock);

    expect(dappProvider.getProvider()).toBe(providerMock);
  });

  it('cancelLogin calls provider cancelLogin when available', () => {
    const providerMock = {
      cancelLogin: jest.fn()
    } as unknown as IProvider;

    const dappProvider = new DappProvider(providerMock);
    dappProvider.cancelLogin();

    expect(providerMock.cancelLogin).toHaveBeenCalled();
  });
});
