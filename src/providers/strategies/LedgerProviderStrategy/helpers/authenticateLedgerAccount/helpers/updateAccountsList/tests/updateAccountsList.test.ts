import { testAddress } from '__mocks__/accountConfig';
import { account } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
import { updateAccountsList } from '../updateAccountsList';

jest.mock('methods/network/getNetworkConfig', () => ({
  getNetworkConfig: jest.fn(() => ({
    network
  }))
}));

const createManager = ({ startIndex = 0, allAccounts = [] as any[] } = {}) =>
  ({
    addressesPerPage: 2,
    getAccountScreenData: jest.fn(() => ({ startIndex })),
    getAllAccounts: jest.fn(() => allAccounts),
    updateAccountScreen: jest.fn(),
    updateAllAccounts: jest.fn()
  }) as any;

describe('updateAccountsList tests', () => {
  it('should update screen with existing current accounts and return early', async () => {
    const mockAccounts = [
      { address: account.address, balance: '0', index: 0 },
      { address: testAddress, balance: '0', index: 1 }
    ];

    const manager = createManager({ startIndex: 0, allAccounts: mockAccounts });

    const provider = {
      getAccounts: jest.fn()
    } as any;

    await updateAccountsList({ manager, provider });

    expect(manager.updateAccountScreen).toHaveBeenCalledWith({
      isLoading: false
    });
    expect(manager.updateAccountScreen).toHaveBeenCalledWith({
      accounts: mockAccounts
    });
    expect(provider.getAccounts).not.toHaveBeenCalled();
  });

  it('should fetch accounts, compute balances and update screen', async () => {
    const manager = createManager({ startIndex: 2, allAccounts: [] });

    const provider = {
      getAccounts: jest.fn().mockResolvedValue([testAddress, account.address])
    } as any;

    await updateAccountsList({ manager, provider });

    expect(manager.updateAccountScreen).toHaveBeenCalledWith({
      isLoading: true
    });

    expect(provider.getAccounts).toHaveBeenCalledWith(1, 2);

    expect(manager.updateAllAccounts).toHaveBeenCalled();

    const [lastCall] = (
      manager.updateAccountScreen as jest.Mock
    ).mock.calls.pop();

    expect(lastCall).toEqual({
      accounts: [
        {
          address: testAddress,
          balance: '116.8938',
          index: 2,
          shard: 1,
          usdValue: '$981.91'
        },
        {
          address: account.address,
          balance: '116.8938',
          index: 3,
          shard: 0,
          usdValue: '$981.91'
        }
      ],
      isLoading: false
    });
  });

  it('should log error and not crash when fetching fails', async () => {
    const manager = createManager({ startIndex: 0, allAccounts: [] });

    const provider = {
      getAccounts: jest.fn().mockRejectedValue(new Error('provider error'))
    } as any;

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await updateAccountsList({ manager, provider });

    expect(consoleErrorSpy).toHaveBeenCalled();
    // initial loading state since no existing data
    expect(manager.updateAccountScreen).toHaveBeenCalledWith({
      isLoading: true
    });

    consoleErrorSpy.mockRestore();
  });
});
