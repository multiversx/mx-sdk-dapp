import { account } from '__mocks__';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { accountLogin } from '../accountLogin';
import { loginWithoutNativeToken } from '../loginWithoutNativeToken';

jest.mock('methods/network/getNetworkConfig');
jest.mock('../accountLogin');

const address = account.address;

const apiAddress = 'https://devnet-api.multiversx.com';

const provider = {
  login: jest.fn(),
  getAddress: jest.fn()
} as any;

describe('loginWithoutNativeToken tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getNetworkConfig as jest.Mock).mockReturnValue({
      network: { apiAddress }
    });
  });

  test('logs in, fetches address, calls accountLogin, returns address', async () => {
    provider.login.mockResolvedValue(undefined);
    provider.getAddress.mockResolvedValue(address);
    (accountLogin as jest.Mock).mockResolvedValue(undefined);

    const result = await loginWithoutNativeToken(provider);

    expect(accountLogin).toHaveBeenCalledWith({
      address,
      provider,
      apiAddress
    });

    expect(provider.login).toHaveBeenCalledTimes(1);
    expect(provider.getAddress).toHaveBeenCalledTimes(1);

    expect(result).toEqual({ address });
  });
});
