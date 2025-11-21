import { mockPendingTransaction } from '__mocks__/data/mockPendingTransaction';
import { account } from '__mocks__/data/storeData/account';
import { ProviderTypeEnum } from '../../../types/providerFactory.types';
import { WebviewProviderStrategy } from '../WebviewProviderStrategy';

const mockWebviewProvider = {
  init: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  setAccount: jest.fn(),
  isInitialized: jest.fn(),
  signTransactions: jest.fn(),
  signMessage: jest.fn(),
  cancelAction: jest.fn()
};

jest.mock('@multiversx/sdk-webview-provider/out/WebviewProvider', () => ({
  WebviewProvider: {
    getInstance: jest.fn(() => mockWebviewProvider)
  }
}));

jest.mock('constants/window.constants', () => {
  const localStorage = { clear: jest.fn() };
  const sessionStorage = { clear: jest.fn() };
  return {
    safeWindow: {
      localStorage,
      sessionStorage
    },
    version: 'test-version'
  };
});

const { WebviewProvider } = jest.requireMock(
  '@multiversx/sdk-webview-provider/out/WebviewProvider'
) as {
  WebviewProvider: { getInstance: jest.Mock };
};

const { safeWindow: mockSafeWindow, version: mockedVersion } = jest.requireMock(
  'constants/window.constants'
) as {
  safeWindow: {
    localStorage: { clear: jest.Mock };
    sessionStorage: { clear: jest.Mock };
  };
  version: string;
};

type StrategyConfig = {
  address?: string;
};

const createStrategy = (config?: StrategyConfig) =>
  new WebviewProviderStrategy(config);

const sampleTransactions = [mockPendingTransaction as any];
const sampleSignedTransactions = [mockPendingTransaction as any];
const sampleMessage = { data: 'hello' } as any;

describe('WebviewProviderStrategy tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockWebviewProvider.init.mockResolvedValue(true);
    mockWebviewProvider.logout.mockResolvedValue(true);
    mockWebviewProvider.isInitialized.mockReturnValue(false);
    mockWebviewProvider.signTransactions.mockResolvedValue(
      sampleSignedTransactions
    );
    mockWebviewProvider.signMessage.mockResolvedValue('signed-message');
  });

  it('creates provider instance with reset callback that clears storage', async () => {
    const strategy = createStrategy();

    expect(strategy).toBeDefined();
    expect(WebviewProvider.getInstance).toHaveBeenCalledWith(
      expect.objectContaining({
        resetStateCallback: expect.any(Function)
      })
    );

    const { resetStateCallback } = WebviewProvider.getInstance.mock.calls[0][0];
    resetStateCallback();

    expect(mockSafeWindow.localStorage.clear).toHaveBeenCalled();
    expect(mockSafeWindow.sessionStorage.clear).toHaveBeenCalled();
    expect(typeof (strategy as any)._login).toBe('function');
    await (strategy as any)._login?.({ token: 'abc' });
    expect(mockWebviewProvider.login).toHaveBeenCalledWith({ token: 'abc' });
  });

  it('initializes provider and sets account when address provided', async () => {
    const strategy = createStrategy({ address: account.address });

    const result = await strategy.init();

    expect(mockWebviewProvider.init).toHaveBeenCalledWith(mockedVersion);
    expect(mockWebviewProvider.setAccount).toHaveBeenCalledWith({
      address: account.address
    });
    expect(result).toBe(true);
  });

  it('init skips setAccount when no address available', async () => {
    const strategy = createStrategy();

    await strategy.init();

    expect(mockWebviewProvider.setAccount).not.toHaveBeenCalled();
  });

  it('logout proxies to provider', async () => {
    const strategy = createStrategy();

    const result = await strategy.logout();

    expect(mockWebviewProvider.logout).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('getType returns webview enum', () => {
    const strategy = createStrategy();

    expect(strategy.getType()).toBe(ProviderTypeEnum.webview);
  });

  it('getAddress throws because method not implemented', () => {
    const strategy = new WebviewProviderStrategy();

    expect(() => strategy.getAddress()).toThrow('Method not implemented.');
  });

  it('setAccount delegates to provider', () => {
    const strategy = createStrategy();

    strategy.setAccount(account);

    expect(mockWebviewProvider.setAccount).toHaveBeenCalledWith(account);
  });

  it('isInitialized reads provider state', () => {
    mockWebviewProvider.isInitialized.mockReturnValueOnce(true);
    const strategy = createStrategy();

    expect(strategy.isInitialized()).toBe(true);
  });

  it('signTransactions resolves signed transactions', async () => {
    const strategy = createStrategy();

    const result = await strategy.signTransactions(sampleTransactions);

    expect(mockWebviewProvider.signTransactions).toHaveBeenCalledWith(
      sampleTransactions
    );
    expect(result).toEqual(sampleSignedTransactions);
  });

  it('signTransactions cancels action and rethrows on error', async () => {
    const strategy = createStrategy();
    const error = new Error('sign error');
    mockWebviewProvider.signTransactions.mockRejectedValueOnce(error);

    await expect(strategy.signTransactions(sampleTransactions)).rejects.toThrow(
      'sign error'
    );
    expect(mockWebviewProvider.cancelAction).toHaveBeenCalled();
  });

  it('signMessage resolves signed message', async () => {
    const strategy = createStrategy();

    const result = await strategy.signMessage(sampleMessage);

    expect(mockWebviewProvider.signMessage).toHaveBeenCalledWith(sampleMessage);
    expect(result).toBe('signed-message');
  });

  it('signMessage cancels action and rethrows on error', async () => {
    const strategy = createStrategy();
    const error = new Error('message error');
    mockWebviewProvider.signMessage.mockRejectedValueOnce(error);

    await expect(strategy.signMessage({} as any)).rejects.toThrow(
      'message error'
    );
    expect(mockWebviewProvider.cancelAction).toHaveBeenCalled();
  });

  it('cancelAction delegates to provider', async () => {
    const strategy = createStrategy();

    await strategy.cancelAction();

    expect(mockWebviewProvider.cancelAction).toHaveBeenCalled();
  });
});
