import { testAddress } from '__mocks__';
import { account } from '__mocks__/data/storeData/account';
import { network } from '__mocks__/data/storeData/network';
import { ProviderErrorsEnum } from 'types/provider.types';
import { ProviderTypeEnum } from '../../../types/providerFactory.types';
import { IframeProviderStrategy } from '../IframeProviderStrategy';

const mockIframeProvider = {
  init: jest.fn(),
  setWalletUrl: jest.fn(),
  setAccount: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  signTransactions: jest.fn(),
  signMessage: jest.fn(),
  cancelAction: jest.fn(),
  isInitialized: jest.fn(),
  getAddress: jest.fn()
};

jest.mock('lib/sdkWebWalletIframeProvider', () => ({
  IframeProvider: {
    getInstance: () => mockIframeProvider
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

jest.mock('../../helpers/signTransactions/signTransactions', () => ({
  signTransactions: jest.fn()
}));

const { signTransactions: mockSignTransactionsHelper } = jest.requireMock(
  '../../helpers/signTransactions/signTransactions'
) as {
  signTransactions: jest.Mock;
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

describe('IframeProviderStrategy tests', () => {
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
    Object.values(mockIframeProvider).forEach((fn) =>
      (fn as jest.Mock).mockReset()
    );

    mockNetworkSelector.mockReturnValue(network);
    mockGetState.mockReturnValue({
      config: {
        settings: {}
      },
      account: {
        address: undefined
      }
    });
    mockSignTransactionsHelper.mockImplementation(
      async ({ transactions, handleSign }: any) => handleSign(transactions)
    );
    mockSignMessageHelper.mockResolvedValue('signed-message');
    mockGetPendingTransactionsHandlers.mockResolvedValue(buildHandlers());
  });

  describe('Initialization', () => {
    it('initializes provider with wallet url and optional address', async () => {
      mockIframeProvider.init.mockResolvedValue(true);
      const strategy = new IframeProviderStrategy({
        address: account.address
      });

      const result = await strategy.init();

      expect(result).toBe(true);
    });

    it('throws when iframe wallet url is missing', () => {
      mockNetworkSelector.mockReturnValue({
        ...network,
        iframeWalletAddress: undefined
      });
      const strategy = new IframeProviderStrategy();

      expect(() => strategy.init()).toThrow('Invalid walletUrl');
    });
  });

  describe('Authentication', () => {
    it('proxies login calls to the iframe provider', async () => {
      mockIframeProvider.login.mockResolvedValue({
        address: account.address,
        signature: 'sig'
      });
      const strategy = new IframeProviderStrategy();

      const result = await strategy.login({ token: 'abc' });

      expect(result).toEqual({ address: account.address, signature: 'sig' });
    });

    it('proxies logout calls to the iframe provider', async () => {
      mockIframeProvider.logout.mockResolvedValue(true);
      const strategy = new IframeProviderStrategy();

      const result = await strategy.logout();

      expect(result).toBe(true);
    });
  });

  describe('Transaction Signing', () => {
    it('signs transactions through helper and closes UI', async () => {
      const handlers = buildHandlers();
      mockGetPendingTransactionsHandlers.mockResolvedValue(handlers);
      const transactions = [{ hash: 'tx' } as any];
      const signedTransactions = [{ hash: 'signed' } as any];
      mockIframeProvider.signTransactions.mockResolvedValue(signedTransactions);

      const strategy = new IframeProviderStrategy();
      const result = await strategy.signTransactions(transactions);

      expect(result).toBe(signedTransactions);
    });

    it('cancels action and rethrows on sign error', async () => {
      const handlers = buildHandlers();
      mockGetPendingTransactionsHandlers.mockResolvedValue(handlers);
      const error = new Error('sign error');
      mockSignTransactionsHelper.mockRejectedValue(error);

      const strategy = new IframeProviderStrategy();

      await expect(strategy.signTransactions([{} as any])).rejects.toThrow(
        'sign error'
      );
    });
  });

  describe('Message Signing', () => {
    it('delegates signMessage to helper with cancel support', async () => {
      const strategy = new IframeProviderStrategy();
      const message = { data: 'hello' } as any;
      mockSignMessageHelper.mockResolvedValue(message);

      const result = await strategy.signMessage(message);

      expect(result).toBe(message);
    });
  });

  describe('Utility Methods', () => {
    it('cancelAction calls provider cancel', async () => {
      const strategy = new IframeProviderStrategy();
      await strategy.cancelAction();
      expect(mockIframeProvider.cancelAction).toHaveBeenCalled();
    });

    it('getType returns metamask', () => {
      const strategy = new IframeProviderStrategy();
      expect(strategy.getType()).toBe(ProviderTypeEnum.metamask);
    });

    it('getAddress proxies to provider', async () => {
      mockIframeProvider.getAddress.mockResolvedValue(testAddress);
      const strategy = new IframeProviderStrategy();

      const address = await strategy.getAddress();

      expect(address).toBe(testAddress);
    });

    it('getAddress throws when provider missing', () => {
      const strategy = new IframeProviderStrategy();
      (strategy as any).provider = undefined;

      expect(() => strategy.getAddress()).toThrow(
        ProviderErrorsEnum.notInitialized
      );
    });

    it('setAccount proxies to provider', () => {
      const strategy = new IframeProviderStrategy();
      const providerAccount = { address: account.address } as any;

      strategy.setAccount(providerAccount);

      expect(mockIframeProvider.setAccount).toHaveBeenCalledWith(
        providerAccount
      );
    });

    it('isInitialized proxies to provider', () => {
      mockIframeProvider.isInitialized.mockReturnValue(true);
      const strategy = new IframeProviderStrategy();

      const result = strategy.isInitialized();

      expect(mockIframeProvider.isInitialized).toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });
});
