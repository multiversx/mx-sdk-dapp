import { testAddress } from '__mocks__';
import { network } from '__mocks__/data/storeData/network';
import { authenticateLedgerAccount } from '../authenticateLedgerAccount';

jest.mock(
  'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager',
  () => ({
    LedgerConnectStateManager: {
      getInstance: jest.fn()
    }
  })
);

jest.mock('methods/network/getExplorerAddress', () => ({
  getExplorerAddress: jest.fn(() => network.explorerAddress)
}));

jest.mock('../helpers/getAuthTokenText', () => ({
  getAuthTokenText: jest.fn(() => ({ title: 'Auth token' }))
}));

jest.mock('../helpers/updateAccountsList', () => ({
  updateAccountsList: jest.fn()
}));

jest.mock('../helpers/waitForLedgerSelection', () => ({
  waitForLedgerSelection: jest.fn(() =>
    Promise.resolve({
      address: testAddress,
      signature: 'sig',
      addressIndex: 1
    })
  )
}));

jest.mock('store/actions/loginInfo/loginInfoActions', () => ({
  setLedgerLogin: jest.fn()
}));

jest.mock('store/actions/account/accountActions', () => ({
  setLedgerAccount: jest.fn()
}));

const { LedgerConnectStateManager } = jest.requireMock(
  'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager'
) as {
  LedgerConnectStateManager: { getInstance: jest.Mock };
};

describe('authenticateLedgerAccount', () => {
  const managerMock = { id: 'manager' };

  beforeEach(() => {
    jest.clearAllMocks();
    LedgerConnectStateManager.getInstance.mockReturnValue(managerMock);
  });

  it('refreshes accounts, waits for selection and stores login info', async () => {
    const config = { version: '1.0.0', dataEnabled: true } as any;
    const provider = { login: jest.fn() } as any;
    const login = jest.fn() as any;

    const result = await authenticateLedgerAccount({
      options: { token: 'abc' },
      config,
      provider,
      login
    });

    expect(result).toEqual({ address: testAddress, signature: 'sig' });
  });
});
