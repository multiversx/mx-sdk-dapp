import { account } from '__mocks__';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { nativeAuth } from 'services/nativeAuth';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { accountLogin } from '../accountLogin';
import { extractAddressFromToken } from '../extractAddressFromToken';
import { getMultisigLoginToken } from '../getMultisigLoginToken';
import { isAccessTokenForLogin } from '../isAccessTokenForLogin';
import { loginWithNativeToken } from '../loginWithNativeToken';

jest.mock('methods/network/getNetworkConfig');
jest.mock('services/nativeAuth', () => ({ nativeAuth: jest.fn() }));
jest.mock('store/actions/loginInfo/loginInfoActions', () => ({
  setTokenLogin: jest.fn()
}));
jest.mock('../accountLogin');
jest.mock('../extractAddressFromToken');
jest.mock('../getMultisigLoginToken');
jest.mock('../isAccessTokenForLogin');

const apiAddress = 'https://devnet-api.multiversx.com';

const provider = {
  login: jest.fn()
} as any;

provider.login.mockResolvedValue({
  address: account.address,
  signature: 'sig'
});

const nativeAuthConfig = {
  origin: 'https://localhost:3000'
};

const nativeAuthClient = {
  initialize: jest.fn(),
  getToken: jest.fn()
};

describe('loginWithNativeToken tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getNetworkConfig as jest.Mock).mockReturnValue({
      network: { apiAddress }
    });
    (nativeAuth as jest.Mock).mockReturnValue(nativeAuthClient);
  });

  test('initializes token when none provided and proceeds with login', async () => {
    const initializedToken = 'initialized.token';
    nativeAuthClient.initialize.mockResolvedValueOnce(initializedToken);
    (getMultisigLoginToken as jest.Mock).mockResolvedValue(initializedToken);
    (isAccessTokenForLogin as jest.Mock).mockReturnValue(false);
    (extractAddressFromToken as jest.Mock).mockResolvedValue(account.address);

    await loginWithNativeToken({ provider, nativeAuthConfig });

    expect(nativeAuth).toHaveBeenCalledWith(nativeAuthConfig);

    expect(nativeAuthClient.initialize).toHaveBeenCalledWith({ noCache: true });

    expect(provider.login).toHaveBeenCalledWith({ token: initializedToken });

    expect(getMultisigLoginToken).toHaveBeenCalledWith({
      loginData: { address: account.address, signature: 'sig' },
      nativeAuthConfig,
      loginToken: initializedToken
    });
  });

  test('logs in as the multisig while keeping the signer', async () => {
    const multisigAddress =
      'erd1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqyc44rx';
    provider.login.mockResolvedValueOnce({
      address: account.address,
      signature: 'sig',
      multisig: multisigAddress
    });
    (getMultisigLoginToken as jest.Mock).mockResolvedValue('login.token');
    (isAccessTokenForLogin as jest.Mock).mockReturnValue(false);
    (extractAddressFromToken as jest.Mock).mockResolvedValue(multisigAddress);

    await loginWithNativeToken({
      provider,
      nativeAuthConfig,
      token: 'login.token'
    });

    expect(accountLogin).toHaveBeenCalledWith(
      expect.objectContaining({
        address: multisigAddress,
        signerAddress: account.address
      })
    );
  });

  describe('when the provider returns an accessToken', () => {
    const accessToken = 'provider.access.token';
    const localToken = 'locally.built.token';

    beforeEach(() => {
      provider.login.mockResolvedValueOnce({
        address: account.address,
        signature: 'sig',
        accessToken
      });
      (getMultisigLoginToken as jest.Mock).mockResolvedValue('login.token');
      (extractAddressFromToken as jest.Mock).mockResolvedValue(account.address);
      nativeAuthClient.getToken.mockReturnValue(localToken);
    });

    test('keeps it when it belongs to this login', async () => {
      (isAccessTokenForLogin as jest.Mock).mockReturnValue(true);

      await loginWithNativeToken({
        provider,
        nativeAuthConfig,
        token: 'login.token'
      });

      expect(isAccessTokenForLogin).toHaveBeenCalledWith({
        accessToken,
        address: account.address,
        origin: nativeAuthConfig.origin
      });
      expect(nativeAuthClient.getToken).not.toHaveBeenCalled();
      expect(setTokenLogin).toHaveBeenCalledWith(
        expect.objectContaining({ nativeAuthToken: accessToken })
      );
    });

    test('builds the token locally when it does not belong to this login', async () => {
      (isAccessTokenForLogin as jest.Mock).mockReturnValue(false);
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => null);

      await loginWithNativeToken({
        provider,
        nativeAuthConfig,
        token: 'login.token'
      });

      expect(nativeAuthClient.getToken).toHaveBeenCalledWith({
        address: account.address,
        token: 'login.token',
        signature: 'sig'
      });
      expect(setTokenLogin).toHaveBeenCalledWith(
        expect.objectContaining({ nativeAuthToken: localToken })
      );
      expect(warn).toHaveBeenCalled();

      warn.mockRestore();
    });
  });
});
