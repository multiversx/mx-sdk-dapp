import { waitForLedgerSelection } from '../waitForLedgerSelection';

jest.mock('../updateAccountsList', () => ({
  updateAccountsList: jest.fn().mockResolvedValue(undefined)
}));

const { updateAccountsList } = jest.requireMock('../updateAccountsList') as {
  updateAccountsList: jest.Mock;
};

describe('waitForLedgerSelection tests', () => {
  let manager: any;
  let provider: any;
  let login: any;
  const explorerAddress = 'https://explorer.test';
  const authData = {
    data: 'data',
    confirmAddressText: 'Confirm Ledger Address',
    authText: 'Authorise Authentication Token'
  };

  beforeEach(() => {
    jest.clearAllMocks();
    manager = {
      addressesPerPage: 3,
      updateStartIndex: jest.fn(),
      subscribeToAuthEvents: jest.fn(),
      unsubscribeFromAuthEvents: jest.fn(),
      updateConfirmScreen: jest.fn(),
      getConfirmScreenData: jest.fn().mockReturnValue(null)
    };
    provider = {
      tokenLogin: jest.fn()
    };
    login = jest.fn();
  });

  function getSubscribedHandlers() {
    const [calls] = (manager.subscribeToAuthEvents as jest.Mock).mock.calls;
    return calls[0];
  }

  it('handleGoToPage updates startIndex and refreshes the accounts list', async () => {
    const promise = waitForLedgerSelection({
      manager,
      provider,
      login,
      token: undefined,
      explorerAddress,
      authData
    });

    const { handleGoToPage } = getSubscribedHandlers();
    await handleGoToPage(2);

    expect(manager.updateStartIndex).toHaveBeenCalledWith(3);
    expect(updateAccountsList).toHaveBeenCalledWith({ manager, provider });

    // ensure we can still reject to avoid dangling promise
    const { handleCancel } = getSubscribedHandlers();
    handleCancel();
    await expect(promise).rejects.toEqual('User cancelled login');
  });

  it('handleAccessWallet resolves with address and signature, unsubscribes', async () => {
    const token = 'tok123';
    const addressIndex = 5;
    const selectedAddress = 'erd1...';
    const returned = {
      address: selectedAddress,
      signature: Buffer.from('abcd', 'hex')
    };
    provider.tokenLogin.mockResolvedValue(returned);

    const promise = waitForLedgerSelection({
      manager,
      provider,
      login,
      token: token,
      explorerAddress,
      authData
    });

    const { handleAccessWallet } = getSubscribedHandlers();
    await handleAccessWallet({ addressIndex, selectedAddress });
    const result = await promise;

    expect(manager.updateConfirmScreen).toHaveBeenCalledWith(
      expect.objectContaining({
        selectedAddress,
        explorerLink: expect.any(String)
      })
    );
    expect(result).toEqual({
      address: selectedAddress,
      signature: 'abcd',
      addressIndex
    });
    expect(manager.unsubscribeFromAuthEvents).toHaveBeenCalledWith({
      handleCancel: expect.any(Function),
      handleAccessWallet: expect.any(Function),
      handleGoToPage: expect.any(Function)
    });
  });

  it('on accessWallet rejection goes back to accounts list if confirm screen is visible', async () => {
    const token = 'tok123';
    const addressIndex = 0;
    const selectedAddress = 'erd1...';
    provider.tokenLogin.mockRejectedValue(new Error('rejected'));
    manager.getConfirmScreenData.mockReturnValue({ any: 'value' });

    void waitForLedgerSelection({
      manager,
      provider,
      login,
      token: token,
      explorerAddress,
      authData
    });

    const { handleAccessWallet } = getSubscribedHandlers();
    await handleAccessWallet({ addressIndex, selectedAddress });

    expect(updateAccountsList).toHaveBeenCalledWith({ manager, provider });
  });

  it('handleCancel rejects and unsubscribes', async () => {
    const promise = waitForLedgerSelection({
      manager,
      provider,
      login,
      token: undefined,
      explorerAddress,
      authData
    });

    const { handleCancel } = getSubscribedHandlers();
    handleCancel();

    await expect(promise).rejects.toEqual('User cancelled login');
    expect(manager.unsubscribeFromAuthEvents).toHaveBeenCalledWith({
      handleCancel: expect.any(Function),
      handleAccessWallet: expect.any(Function),
      handleGoToPage: expect.any(Function)
    });
  });
});
