import { account } from '__mocks__/data/storeData/account';
import { network } from '__mocks__/data/storeData/network';
import { providerLabels } from 'constants/providerFactory.constants';
import { ProviderTypeEnum } from '../../../types/providerFactory.types';
import { CrossWindowProviderStrategy } from '../CrossWindowProviderStrategy';

const mockCrossWindowProvider = {
  init: jest.fn(),
  setWalletUrl: jest.fn(),
  setAddress: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  signTransactions: jest.fn(),
  signMessage: jest.fn(),
  cancelAction: jest.fn(),
  isInitialized: jest.fn(),
  getAddress: jest.fn(),
  setAccount: jest.fn()
};

jest.mock('lib/sdkWebWalletCrossWindowProvider', () => ({
  CrossWindowProvider: {
    getInstance: () => mockCrossWindowProvider
  }
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: jest.fn()
}));

const { networkSelector: mockNetworkSelector } = jest.requireMock(
  'store/selectors/networkSelectors'
) as {
  networkSelector: jest.Mock;
};

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

const { getState: mockGetState } = jest.requireMock('store/store') as {
  getState: jest.Mock;
};

jest.mock(
  '../../helpers/signTransactions/helpers/guardTransactions/guardTransactions',
  () => ({
    guardTransactions: jest.fn()
  })
);

const { guardTransactions: mockGuardTransactions } = jest.requireMock(
  '../../helpers/signTransactions/helpers/guardTransactions/guardTransactions'
) as {
  guardTransactions: jest.Mock;
};

jest.mock('../../helpers/signMessage/signMessage', () => ({
  signMessage: jest.fn()
}));

const { signMessage: mockSignMessageHelper } = jest.requireMock(
  '../../helpers/signMessage/signMessage'
) as {
  signMessage: jest.Mock;
};

jest.mock('../../helpers', () => ({
  getPendingTransactionsHandlers: jest.fn()
}));

const { getPendingTransactionsHandlers: mockGetPendingTransactionsHandlers } =
  jest.requireMock('../../helpers') as {
    getPendingTransactionsHandlers: jest.Mock;
  };

describe('CrossWindowProviderStrategy tests', () => {
  const buildHandlers = () => {
    const manager = {
      subscribeToEventBus: jest.fn(),
      updateData: jest.fn(),
      closeUI: jest.fn()
    };
    const onClose = jest.fn();
    return { manager, onClose };
  };

  beforeEach(() => {
    jest.clearAllMocks();
    Object.values(mockCrossWindowProvider).forEach((fn) => fn.mockReset());

    mockNetworkSelector.mockReturnValue(network);
    mockGetState.mockReturnValue({
      config: {
        settings: {}
      }
    });
    mockGuardTransactions.mockImplementation(async (txs) => txs);
    mockSignMessageHelper.mockResolvedValue('signed-message');
    mockGetPendingTransactionsHandlers.mockResolvedValue(buildHandlers());
  });

  it('initializes provider with wallet url and optional address', async () => {
    mockCrossWindowProvider.init.mockResolvedValue(true);
    const strategy = new CrossWindowProviderStrategy({
      address: account.address
    });

    const result = await strategy.init();

    expect(mockCrossWindowProvider.init).toHaveBeenCalled();
    expect(mockCrossWindowProvider.setWalletUrl).toHaveBeenCalledWith(
      network.walletAddress
    );
    expect(mockCrossWindowProvider.setAddress).toHaveBeenCalledWith(
      account.address
    );
    expect(result).toBe(true);
  });

  it('proxies login calls to underlying provider', async () => {
    mockCrossWindowProvider.login.mockResolvedValue({
      address: account.address,
      signature: 'sig'
    });
    const strategy = new CrossWindowProviderStrategy();

    const result = await strategy.login({ token: 'abc' });

    expect(mockCrossWindowProvider.login).toHaveBeenCalledWith({
      token: 'abc'
    });
    expect(result).toEqual({ address: account.address, signature: 'sig' });
  });

  it('proxies logout calls to underlying provider', async () => {
    mockCrossWindowProvider.logout.mockResolvedValue(true);
    const strategy = new CrossWindowProviderStrategy();

    const result = await strategy.logout();

    expect(mockCrossWindowProvider.logout).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('signTransactions resolves signed transactions and closes UI', async () => {
    const handlers = buildHandlers();
    mockGetPendingTransactionsHandlers.mockResolvedValue(handlers);
    const signedTx = [{ hash: 'signed' } as any];
    mockCrossWindowProvider.signTransactions.mockResolvedValue(signedTx);

    const strategy = new CrossWindowProviderStrategy();
    const result = await strategy.signTransactions([{} as any]);

    expect(mockCrossWindowProvider.signTransactions).toHaveBeenCalled();
    expect(handlers.manager.closeUI).toHaveBeenCalled();
    expect(result).toEqual(signedTx);
  });

  it('signTransactions cancels action on error', async () => {
    const handlers = buildHandlers();
    mockGetPendingTransactionsHandlers.mockResolvedValue(handlers);
    const error = new Error('sign error');
    mockCrossWindowProvider.signTransactions.mockRejectedValue(error);

    const strategy = new CrossWindowProviderStrategy();

    await expect(strategy.signTransactions([{} as any])).rejects.toThrow(
      'sign error'
    );

    expect(handlers.onClose).toHaveBeenCalledWith({
      shouldCancelAction: true
    });
    expect(handlers.manager.closeUI).toHaveBeenCalled();
  });

  it('signMessage delegates to helper with cancelAction', async () => {
    const strategy = new CrossWindowProviderStrategy();
    const message = { data: 'hello' } as any;
    mockSignMessageHelper.mockResolvedValue(message);

    const result = await strategy.signMessage(message);

    expect(mockSignMessageHelper).toHaveBeenCalledWith(
      expect.objectContaining({
        message,
        cancelAction: strategy.cancelAction,
        providerType: providerLabels.crossWindow
      })
    );
    expect(result).toBe(message);
  });

  it('cancelAction triggers underlying provider cancel', async () => {
    const strategy = new CrossWindowProviderStrategy();
    await strategy.cancelAction();
    expect(mockCrossWindowProvider.cancelAction).toHaveBeenCalled();
  });

  it('getType returns crossWindow and proxies address utilities', async () => {
    mockCrossWindowProvider.getAddress.mockResolvedValue('erd1user');
    const strategy = new CrossWindowProviderStrategy();

    expect(strategy.getType()).toBe(ProviderTypeEnum.crossWindow);
    const address = await strategy.getAddress();
    expect(mockCrossWindowProvider.getAddress).toHaveBeenCalled();
    expect(address).toBe('erd1user');
  });
});
