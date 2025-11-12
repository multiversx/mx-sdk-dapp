import { account } from '__mocks__/data';
import { registerWebsocketListener } from 'methods/initApp/websocket/registerWebsocket';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { IProvider } from 'providers/types/providerFactory.types';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
import { loginWithNativeToken } from '../helpers/loginWithNativeToken';
import { loginWithoutNativeToken } from '../helpers/loginWithoutNativeToken';
import { login } from '../login';

jest.mock('store/selectors/configSelectors');
jest.mock('store/store');
jest.mock('../helpers/loginWithNativeToken');
jest.mock('../helpers/loginWithoutNativeToken');
jest.mock('methods/initApp/websocket/registerWebsocket');
jest.mock('methods/trackTransactions/trackTransactions');

describe('login tests', () => {
  const mockProvider = {
    login: jest.fn(),
    getAddress: jest.fn()
  } as unknown as IProvider;

  const mockAddress = account.address;
  const mockSignature = 'test-signature';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should login with native token when nativeAuthConfig exists', async () => {
    const mockNativeAuthConfig = {
      origin: 'https://localhost:3000'
    };
    const mockLoginResult = {
      address: mockAddress,
      signature: mockSignature
    };

    (nativeAuthConfigSelector as jest.Mock).mockReturnValue(
      mockNativeAuthConfig
    );
    (loginWithNativeToken as jest.Mock).mockResolvedValue(mockLoginResult);

    const result = await login(mockProvider);

    expect(result).toEqual(mockLoginResult);
  });

  it('should login without native token and setup websocket when nativeAuthConfig does not exist', async () => {
    (nativeAuthConfigSelector as jest.Mock).mockReturnValue(null);
    (loginWithoutNativeToken as jest.Mock).mockResolvedValue({
      address: mockAddress
    });
    (registerWebsocketListener as jest.Mock).mockResolvedValue(undefined);
    (trackTransactions as jest.Mock).mockReturnValue(undefined);

    const result = await login(mockProvider);

    expect(result).toEqual({
      address: mockAddress,
      signature: ''
    });
  });
});
