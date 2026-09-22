import type { IProvider } from 'providers/types/providerFactory.types';
import { DappProvider } from '../DappProvider';

jest.mock('../helpers/logout/logout', () => ({
  logout: jest.fn()
}));

jest.mock('../helpers/login/login', () => ({
  login: jest.fn()
}));

jest.mock('providers/helpers/accountProvider', () => ({
  setAccountProvider: jest.fn()
}));

jest.mock('managers/LogoutManager/LogoutManager', () => {
  const init = jest.fn();
  return { LogoutManager: { getInstance: () => ({ init }) } };
});

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

  it('allows a retry after a logout that threw', async () => {
    const providerMock = {} as IProvider;
    mockLogout.mockRejectedValueOnce(new Error('provider still active'));
    mockLogout.mockResolvedValueOnce(true);
    const dappProvider = new DappProvider(providerMock);

    await expect(dappProvider.logout()).rejects.toThrow(
      'provider still active'
    );

    await expect(dappProvider.logout()).resolves.toBe(true);
    expect(mockLogout).toHaveBeenCalledTimes(2);
  });

  it('does not register the provider when login returns no account', async () => {
    const { login: mockLogin } = jest.requireMock('../helpers/login/login');
    const { setAccountProvider } = jest.requireMock(
      'providers/helpers/accountProvider'
    );
    const { LogoutManager } = jest.requireMock(
      'managers/LogoutManager/LogoutManager'
    );
    mockLogin.mockResolvedValue(null);
    const providerMock = { getType: jest.fn() } as unknown as IProvider;

    const result = await new DappProvider(providerMock).login();

    expect(result).toBeNull();
    expect(setAccountProvider).not.toHaveBeenCalled();
    expect(LogoutManager.getInstance().init).not.toHaveBeenCalled();
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
