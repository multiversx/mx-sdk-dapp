import { account } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
import { getAddress } from 'methods/account/getAddress';
import { getLatestNonce } from 'methods/account/getLatestNonce';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { fetchAccount } from '../fetchAccount';
import { refreshAccount } from '../refreshAccount';

jest.mock('providers/helpers/accountProvider', () => ({
  getAccountProvider: jest.fn()
}));

jest.mock('methods/account/getAddress', () => ({
  getAddress: jest.fn()
}));

jest.mock('methods/account/getLatestNonce', () => ({
  getLatestNonce: jest.fn()
}));

jest.mock('methods/network/getNetworkConfig', () => ({
  getNetworkConfig: jest.fn()
}));

jest.mock('store/actions/account/accountActions', () => ({
  setAccount: jest.fn()
}));

jest.mock('../fetchAccount', () => ({
  fetchAccount: jest.fn()
}));

describe('refreshAccount tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should initialize provider, fetch account and set account data', async () => {
    const mockProvider = { init: jest.fn().mockResolvedValue(true) } as any;
    (getAccountProvider as jest.Mock).mockReturnValue(mockProvider);
    (getAddress as jest.Mock).mockReturnValue(account.address);
    (getNetworkConfig as jest.Mock).mockReturnValue({
      network
    });

    (fetchAccount as jest.Mock).mockResolvedValue(account);
    (getLatestNonce as jest.Mock).mockReturnValue(account.nonce);

    const result = await refreshAccount();

    expect(mockProvider.init).toHaveBeenCalled();
    expect(fetchAccount).toHaveBeenCalledWith({
      address: account.address,
      baseURL: network.apiAddress
    });

    expect(result).toEqual(account);
  });
});
