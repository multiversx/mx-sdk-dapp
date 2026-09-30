import { account as mockAccount } from '__mocks__';
import { getLatestNonce } from 'methods/account/getLatestNonce';
import { setGasStationMetadata } from 'methods/initApp/gasStationMetadata/setGasStationMetadata';
import { registerWebsocketListener } from 'methods/initApp/websocket/registerWebsocket';
import { IProvider } from 'providers/types/providerFactory.types';
import { setAccount } from 'store/actions/account';
import { loginAction } from 'store/actions/sharedActions/sharedActions';
import { resumeSessionExpiryCheck } from 'store/middleware/logoutMiddleware';
import { fetchAccount } from 'utils/account/fetchAccount';
import { accountLogin } from '../accountLogin';

jest.mock('methods/account/getLatestNonce');
jest.mock('methods/initApp/gasStationMetadata/setGasStationMetadata');
jest.mock('methods/initApp/websocket/registerWebsocket');
jest.mock('methods/trackTransactions/trackTransactions');
jest.mock('store/actions/account');
jest.mock('store/actions/sharedActions/sharedActions');
jest.mock('store/middleware/logoutMiddleware', () => ({
  resumeSessionExpiryCheck: jest.fn()
}));
jest.mock('utils/account/fetchAccount');

describe('accountLogin tests', () => {
  const mockProvider: IProvider = {
    getType: jest.fn(() => 'testProvider')
  } as unknown as IProvider;

  const mockApiAddress = 'https://api.multiversx.com';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully login an account', async () => {
    (fetchAccount as jest.Mock).mockResolvedValue(mockAccount);
    (getLatestNonce as jest.Mock).mockReturnValue(15);

    await accountLogin({
      address: mockAccount.address,
      provider: mockProvider,
      apiAddress: mockApiAddress
    });

    expect(setAccount).toHaveBeenCalledWith({
      ...mockAccount,
      nonce: 15
    });

    expect(setGasStationMetadata).toHaveBeenCalledWith({
      shard: 0,
      apiAddress: mockApiAddress
    });
  });

  it('resumes a deferred session expiry check once logged in', async () => {
    (fetchAccount as jest.Mock).mockResolvedValue(mockAccount);
    const callOrder: string[] = [];
    (loginAction as jest.Mock).mockImplementation(() =>
      callOrder.push('login')
    );
    (resumeSessionExpiryCheck as jest.Mock).mockImplementation(() =>
      callOrder.push('resume')
    );

    await accountLogin({
      address: mockAccount.address,
      provider: mockProvider,
      apiAddress: mockApiAddress
    });

    expect(callOrder).toEqual(['login', 'resume']);
  });

  it('stores an uppercase address in lowercase', async () => {
    (fetchAccount as jest.Mock).mockResolvedValue(mockAccount);

    await accountLogin({
      address: mockAccount.address.toUpperCase(),
      provider: mockProvider,
      apiAddress: mockApiAddress,
      signerAddress: mockAccount.address.toUpperCase()
    });

    expect(fetchAccount).toHaveBeenCalledWith({
      address: mockAccount.address,
      baseURL: mockApiAddress
    });
    expect(loginAction).toHaveBeenCalledWith({
      address: mockAccount.address,
      providerType: 'testProvider',
      signerAddress: mockAccount.address
    });
    expect(registerWebsocketListener).toHaveBeenCalledWith(mockAccount.address);
  });
});
