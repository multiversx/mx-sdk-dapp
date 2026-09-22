import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { getAccount } from 'methods/account/getAccount';
import { nativeAuth } from 'services/nativeAuth';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { refreshNativeAuthTokenLogin } from '../refreshNativeAuthTokenLogin';

jest.mock('methods/account/getAccount');
jest.mock('services/nativeAuth');
jest.mock('store/actions/loginInfo/loginInfoActions');
jest.mock('store/selectors/configSelectors', () => ({
  nativeAuthConfigSelector: () => ({ origin: 'https://dapp' })
}));
jest.mock('store/store', () => ({ getState: () => ({}) }));
jest.mock('managers/LogoutManager/LogoutManager', () => {
  const init = jest.fn();
  return { LogoutManager: { getInstance: () => ({ init }) } };
});

const address =
  'erd1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqzu66jx';

describe('refreshNativeAuthTokenLogin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getAccount as jest.Mock).mockReturnValue({ address });
    (nativeAuth as jest.Mock).mockReturnValue({
      initialize: jest.fn().mockResolvedValue('login-token'),
      getToken: jest.fn().mockReturnValue('native-auth-token')
    });
  });

  it('stores the new token and reschedules the session expiry', async () => {
    const result = await refreshNativeAuthTokenLogin({
      signMessageCallback: async (message) => {
        message.signature = new Uint8Array([1, 2]);
        return message;
      }
    });

    expect(result).toBe('native-auth-token');
    expect(setTokenLogin).toHaveBeenCalledWith({
      loginToken: 'login-token',
      signature: '0102',
      nativeAuthToken: 'native-auth-token'
    });
    expect(LogoutManager.getInstance().init).toHaveBeenCalled();
  });

  it('uses the configured native auth settings by default', async () => {
    await refreshNativeAuthTokenLogin({
      signMessageCallback: async (message) => {
        message.signature = new Uint8Array([1]);
        return message;
      }
    });

    expect(nativeAuth).toHaveBeenCalledWith({ origin: 'https://dapp' });
  });
});
