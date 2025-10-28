import { account } from '__mocks__';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { nativeAuth } from 'services/nativeAuth';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { extractAddressFromToken } from '../extractAddressFromToken';
import { getMultisigLoginToken } from '../getMultisigLoginToken';
import { loginWithNativeToken } from '../loginWithNativeToken';

jest.mock('methods/network/getNetworkConfig');
jest.mock('services/nativeAuth', () => ({ nativeAuth: jest.fn() }));
jest.mock('services/nativeAuth/helpers/decodeNativeAuthToken');
jest.mock('store/actions/loginInfo/loginInfoActions', () => ({
  setTokenLogin: jest.fn()
}));
jest.mock('../accountLogin');
jest.mock('../extractAddressFromToken');
jest.mock('../getMultisigLoginToken');

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
    (decodeNativeAuthToken as jest.Mock).mockReturnValue(null);
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
});
