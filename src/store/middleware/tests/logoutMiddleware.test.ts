import { account, testAddress } from '__mocks__';
import { resetInsecureDefaultWarnings } from 'methods/initApp/helpers/flagsConfig';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { setAccount } from 'store/actions/account/accountActions';
import { setFlagsConfig } from 'store/actions/config/configActions';
import { loginAction } from 'store/actions/sharedActions/sharedActions';
import { getState, initStore } from 'store/store';
import { AccountType } from 'types/account.types';
import { logoutMiddleware } from '../logoutMiddleware';

jest.mock('providers/helpers/accountProvider', () => ({
  getAccountProvider: jest.fn()
}));

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

const expireSession = () => {
  initStore(() => localStorage);
  setFlagsConfig({ enforceSessionExpiry: true });
  loginAction({
    address: testAddress,
    providerType: ProviderTypeEnum.extension
  } as any);
  setAccount({
    ...account,
    address: testAddress,
    claimableRewards: '0',
    isGuarded: false
  } as AccountType);

  const state = getState();

  return {
    ...state,
    loginInfo: { ...state.loginInfo, loginExpiresAt: Date.now() - 1000 }
  };
};

describe('logoutMiddleware', () => {
  beforeEach(() => {
    localStorage.clear();
    resetInsecureDefaultWarnings();
    jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logs out the provider of an expired session', async () => {
    const provider = {
      getType: () => ProviderTypeEnum.extension,
      logout: jest.fn().mockResolvedValue(true)
    };
    (getAccountProvider as jest.Mock).mockReturnValue(provider);

    logoutMiddleware(expireSession());
    await flush();

    expect(provider.logout).toHaveBeenCalledTimes(1);
  });

  it('does not log out a webview provider when its session expires', async () => {
    const provider = {
      getType: () => ProviderTypeEnum.webview,
      logout: jest.fn().mockResolvedValue(true)
    };
    (getAccountProvider as jest.Mock).mockReturnValue(provider);

    logoutMiddleware(expireSession());
    await flush();

    expect(provider.logout).not.toHaveBeenCalled();
  });
});
