import { account as mockAccount } from '__mocks__';
import { getLatestNonce } from 'methods/account/getLatestNonce';
import { setGasStationMetadata } from 'methods/initApp/setGasStationMetadata/setGasStationMetadata';
import { IProvider } from 'providers/types/providerFactory.types';
import { setAccount } from 'store/actions/account';
import { fetchAccount } from 'utils/account/fetchAccount';
import { accountLogin } from '../accountLogin';

jest.mock('methods/account/getLatestNonce');
jest.mock('methods/initApp/helpers/setGasStationMetadata');
jest.mock('methods/initApp/websocket/registerWebsocket');
jest.mock('methods/trackTransactions/trackTransactions');
jest.mock('store/actions/account');
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
});
