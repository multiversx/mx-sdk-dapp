import {
  OptionalOperation,
  SessionTypes
} from '@multiversx/sdk-wallet-connect-provider/out';
import { account as storeAccount } from '__mocks__/data/storeData/account';
import { providerLabels } from 'constants/providerFactory.constants';
import { fallbackWalletConnectConfigurations } from 'constants/walletConnect.constants';
import { WalletConnectOptionalMethodsEnum } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { ProviderTypeEnum } from '../../../types/providerFactory.types';
import { WalletConnectV2Error } from '../types';
import { WalletConnectProviderStrategy } from '../WalletConnectProviderStrategy';

const mockWalletConnectProvider = {
  init: jest.fn(),
  isInitialized: jest.fn(),
  connect: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  getAddress: jest.fn(),
  setAccount: jest.fn(),
  signTransactions: jest.fn(),
  signMessage: jest.fn(),
  sendCustomRequest: jest.fn()
};

jest.mock('utils/walletconnect/__sdkWalletconnectProvider', () => {
  const actual = jest.requireActual(
    'utils/walletconnect/__sdkWalletconnectProvider'
  );
  return {
    ...actual,
    WalletConnectV2Provider: jest.fn(() => mockWalletConnectProvider)
  };
});

const mockWalletConnectManager = {
  init: jest.fn(),
  updateData: jest.fn(),
  handleClose: jest.fn(),
  closeUI: jest.fn()
};

jest.mock(
  'managers/internal/WalletConnectStateManager/WalletConnectStateManager',
  () => ({
    WalletConnectStateManager: {
      getInstance: jest.fn(() => mockWalletConnectManager)
    }
  })
);

jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn()
}));

jest.mock('store/selectors/networkSelectors', () => ({
  chainIdSelector: jest.fn()
}));

jest.mock('store/selectors/configSelectors', () => ({
  nativeAuthConfigSelector: jest.fn(),
  providerSettingsSelector: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('store/actions/sharedActions/sharedActions', () => ({
  logoutAction: jest.fn()
}));

jest.mock('../../helpers', () => ({
  getPendingTransactionsHandlers: jest.fn()
}));

jest.mock('../../helpers/signMessage/signMessage', () => ({
  signMessage: jest.fn()
}));

const { WalletConnectV2Provider: MockWalletConnectV2Provider } =
  jest.requireMock('utils/walletconnect/__sdkWalletconnectProvider') as {
    WalletConnectV2Provider: jest.Mock;
  };

const { getIsLoggedIn: mockGetIsLoggedIn } = jest.requireMock(
  'methods/account/getIsLoggedIn'
) as {
  getIsLoggedIn: jest.Mock;
};

const { chainIdSelector: mockChainIdSelector } = jest.requireMock(
  'store/selectors/networkSelectors'
) as {
  chainIdSelector: jest.Mock;
};

const {
  nativeAuthConfigSelector: mockNativeAuthConfigSelector,
  providerSettingsSelector: mockProviderSettingsSelector
} = jest.requireMock('store/selectors/configSelectors') as {
  nativeAuthConfigSelector: jest.Mock;
  providerSettingsSelector: jest.Mock;
};

const { getState: mockGetState } = jest.requireMock('store/store') as {
  getState: jest.Mock;
};

const { logoutAction: mockLogoutAction } = jest.requireMock(
  'store/actions/sharedActions/sharedActions'
) as {
  logoutAction: jest.Mock;
};

const { getPendingTransactionsHandlers: mockGetPendingTransactionsHandlers } =
  jest.requireMock('../../helpers') as {
    getPendingTransactionsHandlers: jest.Mock;
  };

const { signMessage: mockSignMessageHelper } = jest.requireMock(
  '../../helpers/signMessage/signMessage'
) as {
  signMessage: jest.Mock;
};

const defaultConfig = {
  walletConnectV2ProjectId: 'project-id'
};

const buildHandlers = () => {
  const manager = {
    subscribeToEventBus: jest.fn(),
    updateData: jest.fn(),
    closeUI: jest.fn()
  };

  const onClose = jest.fn();

  return { manager, onClose };
};

const createStrategy = () => new WalletConnectProviderStrategy(defaultConfig);

describe('WalletConnectProviderStrategy', () => {
  let approvalMock: jest.Mock<Promise<SessionTypes.Struct | undefined>, []>;

  beforeEach(() => {
    jest.clearAllMocks();

    approvalMock = jest.fn(
      async () => ({ topic: 'topic' }) as SessionTypes.Struct
    );

    Object.values(mockWalletConnectProvider).forEach((mockFn) =>
      mockFn.mockReset()
    );
    Object.values(mockWalletConnectManager).forEach((mockFn) =>
      mockFn.mockReset()
    );

    mockWalletConnectProvider.isInitialized.mockReturnValue(false);
    mockWalletConnectProvider.init.mockResolvedValue(undefined);
    mockWalletConnectProvider.connect.mockResolvedValue({
      uri: 'wc://uri',
      approval: approvalMock
    });
    mockWalletConnectProvider.login.mockResolvedValue({
      address: storeAccount.address,
      signature: 'sig'
    });
    mockWalletConnectProvider.signTransactions.mockResolvedValue([
      { hash: 'signed' } as any
    ]);
    mockWalletConnectProvider.signMessage.mockResolvedValue('signed-message');
    mockWalletConnectProvider.getAddress.mockResolvedValue(
      storeAccount.address
    );
    mockWalletConnectProvider.logout.mockResolvedValue(true);
    mockWalletConnectProvider.sendCustomRequest.mockResolvedValue(undefined);

    mockGetIsLoggedIn.mockReturnValue(false);
    mockChainIdSelector.mockReturnValue('D');
    mockNativeAuthConfigSelector.mockReturnValue(undefined);
    mockProviderSettingsSelector.mockReturnValue({});
    mockGetState.mockReturnValue({ state: 'test' });
    mockLogoutAction.mockReset();
    mockGetPendingTransactionsHandlers.mockReset();
    mockGetPendingTransactionsHandlers.mockResolvedValue(buildHandlers());
    mockSignMessageHelper.mockReset();
    mockSignMessageHelper.mockResolvedValue('signed-message');
  });

  it('initializes provider and updates WalletConnect manager data', async () => {
    const strategy = createStrategy();

    const result = await strategy.init();

    expect(MockWalletConnectV2Provider).toHaveBeenCalledWith(
      expect.objectContaining({
        onClientLogin: expect.any(Function),
        onClientLogout: expect.any(Function),
        onClientEvent: expect.any(Function)
      }),
      'D',
      '',
      defaultConfig.walletConnectV2ProjectId,
      {}
    );
    expect(mockWalletConnectManager.init).toHaveBeenCalledWith(undefined);
    expect(mockWalletConnectProvider.connect).toHaveBeenCalledWith({
      methods: [
        WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
        WalletConnectOptionalMethodsEnum.SIGN_LOGIN_TOKEN
      ]
    });
    expect(mockWalletConnectManager.updateData).toHaveBeenCalledWith({
      wcURI: 'wc://uri',
      walletConnectDeepLink: `${fallbackWalletConnectConfigurations.walletConnectDeepLink}?wallet-connect=${encodeURIComponent('wc://uri')}`
    });
    expect(result).toBe(true);
  });

  it('skips manager init when already logged in', async () => {
    mockGetIsLoggedIn.mockReturnValue(true);
    const strategy = createStrategy();

    await strategy.init();

    expect(mockWalletConnectManager.init).not.toHaveBeenCalled();
  });

  it('returns false and logs out when provider init fails while logged in', async () => {
    mockGetIsLoggedIn.mockReturnValue(true);
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;
    mockWalletConnectProvider.init.mockRejectedValueOnce(
      new Error('init-fail')
    );

    const result = await strategy.init();

    expect(result).toBe(false);
    expect(mockWalletConnectProvider.logout).toHaveBeenCalled();
  });

  it('short circuits init when provider already initialized', async () => {
    const strategy = createStrategy();
    await strategy.init();

    mockWalletConnectProvider.isInitialized.mockReturnValue(true);
    const secondInit = await strategy.init();

    expect(secondInit).toBe(true);
    expect(mockWalletConnectProvider.connect).toHaveBeenCalledTimes(1);
  });

  it('performs login using stored approval and closes manager', async () => {
    const strategy = createStrategy();
    await strategy.init();

    const result = await strategy.login({ token: 'abc' });

    expect(mockWalletConnectProvider.login).toHaveBeenCalledWith({
      approval: expect.any(Function),
      token: 'abc'
    });

    const { approval } = mockWalletConnectProvider.login.mock.calls[0][0];
    await approval();
    expect(approvalMock).toHaveBeenCalled();

    expect(result).toEqual({
      address: storeAccount.address,
      signature: 'sig'
    });
    expect(mockWalletConnectManager.handleClose).toHaveBeenCalledWith({
      isLoginFinished: true
    });
  });

  it('retries login via reconnect when approval is rejected', async () => {
    const strategy = createStrategy();
    const reconnectApproval = jest.fn(async () => ({}) as SessionTypes.Struct);

    mockWalletConnectProvider.connect
      .mockResolvedValueOnce({
        uri: 'wc://uri',
        approval: approvalMock
      })
      .mockResolvedValueOnce({
        uri: 'wc://uri-2',
        approval: reconnectApproval
      });

    mockWalletConnectProvider.login
      .mockRejectedValueOnce(new Error('user reject'))
      .mockResolvedValueOnce({
        address: 'erd2',
        signature: 'sig2'
      });

    await strategy.init();
    const result = await strategy.login();

    expect(mockWalletConnectProvider.init).toHaveBeenCalledTimes(2);
    expect(mockWalletConnectProvider.connect).toHaveBeenCalledTimes(2);
    expect(mockWalletConnectManager.updateData).toHaveBeenLastCalledWith({
      wcURI: 'wc://uri-2',
      walletConnectDeepLink: `${fallbackWalletConnectConfigurations.walletConnectDeepLink}?wallet-connect=${encodeURIComponent('wc://uri-2')}`
    });
    expect(result).toEqual({ address: 'erd2', signature: 'sig2' });

    const reconnectArgs =
      mockWalletConnectProvider.login.mock.calls[1][0].approval;
    await reconnectArgs();
    expect(reconnectApproval).toHaveBeenCalled();
  });

  it('signTransactions resolves and closes signing UI handlers', async () => {
    const handlers = buildHandlers();
    mockGetPendingTransactionsHandlers.mockResolvedValue(handlers);
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;

    const result = await strategy.signTransactions([{ hash: 'tx' } as any]);

    expect(mockGetPendingTransactionsHandlers).toHaveBeenCalledWith({
      cancelAction: expect.any(Function)
    });
    expect(mockWalletConnectProvider.signTransactions).toHaveBeenCalledWith([
      { hash: 'tx' }
    ]);
    expect(handlers.manager.closeUI).toHaveBeenCalled();
    expect(result).toEqual([{ hash: 'signed' }]);
  });

  it('signTransactions rejects and triggers cancel handlers on error', async () => {
    const handlers = buildHandlers();
    mockGetPendingTransactionsHandlers.mockResolvedValue(handlers);
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;
    const error = new Error('sign-error');
    mockWalletConnectProvider.signTransactions.mockRejectedValueOnce(error);

    await expect(
      strategy.signTransactions([{ hash: 'tx' } as any])
    ).rejects.toThrow('sign-error');

    expect(handlers.onClose).toHaveBeenCalledWith({ shouldCancelAction: true });
    expect(handlers.manager.closeUI).toHaveBeenCalled();
  });

  it('signMessage delegates to helper with cancelAction support', async () => {
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;
    const message = { data: 'hello' } as any;

    const result = await strategy.signMessage(message);

    expect(mockSignMessageHelper).toHaveBeenCalledWith(
      expect.objectContaining({
        message,
        handleSignMessage: expect.any(Function),
        cancelAction: strategy.cancelAction,
        providerType: providerLabels.extension
      })
    );
    expect(result).toBe('signed-message');
  });

  it('cancelAction sends custom request and aborts controller', async () => {
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;
    const abortSpy = jest.spyOn(AbortController.prototype, 'abort');
    (strategy as any).cancelActionAbortController = new AbortController();

    await strategy.cancelAction();

    expect(mockWalletConnectProvider.sendCustomRequest).toHaveBeenCalledWith({
      request: {
        method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
        params: { action: OptionalOperation.CANCEL_ACTION }
      }
    });
    expect(abortSpy).toHaveBeenCalled();
    abortSpy.mockRestore();
  });

  it('logs errors when sendCustomRequest fails', async () => {
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const error = new Error('send-error');
    mockWalletConnectProvider.sendCustomRequest.mockRejectedValueOnce(error);

    await (strategy as any).sendCustomRequest({
      action: OptionalOperation.CANCEL_ACTION,
      method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      WalletConnectV2Error.actionError,
      error
    );
    consoleSpy.mockRestore();
  });

  it('proxies basic provider utilities', async () => {
    const strategy = createStrategy();
    (strategy as any).provider = mockWalletConnectProvider;
    mockWalletConnectProvider.getAddress.mockResolvedValueOnce(
      storeAccount.address
    );
    mockWalletConnectProvider.isInitialized.mockReturnValueOnce(true);

    expect(strategy.getType()).toBe(ProviderTypeEnum.walletConnect);
    await expect(strategy.getAddress()).resolves.toBe(storeAccount.address);

    strategy.setAccount(storeAccount as any);
    expect(mockWalletConnectProvider.setAccount).toHaveBeenCalledWith(
      storeAccount
    );

    expect(strategy.isInitialized()).toBe(true);
    await expect(strategy.logout()).resolves.toBe(true);
  });
});
