import { network } from '__mocks__/data/storeData/network';
import { PROVIDER_SEARCH_PARAM } from 'constants/providerFactory.constants';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { LedgerIdleStateManager } from 'managers/internal/LedgerIdleStateManager/LedgerIdleStateManager';
import { getAddress } from 'methods/account/getAddress';
import { CrossWindowProviderStrategy } from 'providers/strategies/CrossWindowProviderStrategy';
import { ExtensionProviderStrategy } from 'providers/strategies/ExtensionProviderStrategy';
import { IframeProviderStrategy } from 'providers/strategies/IframeProviderStrategy';
import { LedgerProviderStrategy } from 'providers/strategies/LedgerProviderStrategy';
import {
  WalletConnectProviderStrategy,
  WalletConnectV2Error
} from 'providers/strategies/WalletConnectProviderStrategy';
import { WebviewProviderStrategy } from 'providers/strategies/WebviewProviderStrategy';
import { walletConnectConfigSelector } from 'store/selectors/configSelectors';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderFactory } from '../ProviderFactory';
import { ProviderTypeEnum } from '../types/providerFactory.types';

const clearInitiatedLoginsSpy = jest.fn();

jest.mock('../helpers/clearInitiatedLogins', () => {
  const actual = jest.requireActual('../helpers/clearInitiatedLogins');

  return {
    ...actual,
    clearInitiatedLogins: jest
      .fn((...args) => {
        clearInitiatedLoginsSpy(...args);
        return actual.clearInitiatedLogins(...args);
      })
      .mockName('clearInitiatedLogins')
  };
});

jest.mock('../helpers/accountProvider', () => ({
  setAccountProvider: jest.fn(),
  getAccountProvider: jest.fn()
}));

jest.mock('../DappProvider/DappProvider', () => ({
  DappProvider: jest.fn().mockImplementation((provider) => ({
    provider
  }))
}));

jest.mock('lib/sdkWebWalletCrossWindowProvider', () => {
  class MockCrossWindowProvider {
    isInitialized() {
      return true;
    }

    onDestroy() {
      return undefined;
    }

    static getInstance() {
      return new MockCrossWindowProvider();
    }
  }

  return { CrossWindowProvider: MockCrossWindowProvider };
});

jest.mock('providers/strategies/CrossWindowProviderStrategy');
jest.mock('providers/strategies/ExtensionProviderStrategy');
jest.mock('providers/strategies/LedgerProviderStrategy');
jest.mock('providers/strategies/IframeProviderStrategy');
jest.mock('providers/strategies/WalletConnectProviderStrategy');
jest.mock('providers/strategies/WebviewProviderStrategy');

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: jest.fn()
}));

jest.mock('store/selectors/configSelectors', () => ({
  walletConnectConfigSelector: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('methods/account/getAddress', () => ({
  getAddress: jest.fn()
}));

const ledgerIdleStateManagerInit = jest.fn();
jest.mock(
  'managers/internal/LedgerIdleStateManager/LedgerIdleStateManager',
  () => ({
    LedgerIdleStateManager: {
      getInstance: jest.fn(() => ({
        init: ledgerIdleStateManagerInit
      }))
    }
  })
);

const crossWindowStrategyMock = jest.mocked(CrossWindowProviderStrategy);
const extensionStrategyMock = jest.mocked(ExtensionProviderStrategy);
const ledgerStrategyMock = jest.mocked(LedgerProviderStrategy);
const iframeStrategyMock = jest.mocked(IframeProviderStrategy);
const walletConnectStrategyMock = jest.mocked(WalletConnectProviderStrategy);
const webviewStrategyMock = jest.mocked(WebviewProviderStrategy);
const networkSelectorMock = jest.mocked(networkSelector);
const walletConnectConfigSelectorMock = jest.mocked(
  walletConnectConfigSelector
);
const getStateMock = jest.mocked(getState);
const getAddressMock = jest.mocked(getAddress);
const ledgerIdleStateManagerMock = jest.mocked(LedgerIdleStateManager);

describe('ProviderFactory clearInitiatedLogins integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    clearInitiatedLoginsSpy.mockClear();
  });

  it('skips clearing crossWindow method when provider wraps CrossWindowProvider', async () => {
    const strategyInstance = {
      init: jest.fn().mockResolvedValue(true),
      provider: new CrossWindowProvider()
    } as any;

    crossWindowStrategyMock.mockImplementation(() => strategyInstance);

    await ProviderFactory.create({ type: ProviderTypeEnum.crossWindow });

    expect(clearInitiatedLoginsSpy).toHaveBeenCalledWith({
      skipLoginMethod: ProviderTypeEnum.crossWindow
    });
  });

  it('clears initiated logins for non crossWindow providers without skip', async () => {
    const strategyInstance = {
      init: jest.fn().mockResolvedValue(true)
    } as any;

    extensionStrategyMock.mockImplementation(() => strategyInstance);

    await ProviderFactory.create({ type: ProviderTypeEnum.extension });

    expect(clearInitiatedLoginsSpy).toHaveBeenCalledWith(null);
  });
});

describe('ProviderFactory specific provider creation', () => {
  const defaultState = {} as any;
  const createStrategyInstance = () =>
    ({
      init: jest.fn().mockResolvedValue(true)
    }) as any;
  const setNetworkWallet = (walletAddress: string) => {
    networkSelectorMock.mockReturnValue({
      ...network,
      walletAddress
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
    getStateMock.mockReturnValue(defaultState);
    setNetworkWallet(network.walletAddress);
    walletConnectConfigSelectorMock.mockReturnValue({
      walletConnectV2ProjectId: 'project'
    });
    getAddressMock.mockReturnValue('erd1address');
    ledgerIdleStateManagerInit.mockReset();
    ledgerIdleStateManagerMock.getInstance.mockReturnValue({
      init: ledgerIdleStateManagerInit
    } as any);
    ProviderFactory.customProviders = [];
  });

  afterEach(() => {
    ProviderFactory.customProviders = [];
  });

  it('creates ledger provider and initializes idle state manager', async () => {
    const ledgerInstance = createStrategyInstance();
    ledgerStrategyMock.mockImplementation(() => ledgerInstance);
    ledgerIdleStateManagerInit.mockResolvedValue(undefined);
    const anchor = document.createElement('div');

    await ProviderFactory.create({ type: ProviderTypeEnum.ledger, anchor });

    expect(ledgerStrategyMock).toHaveBeenCalledWith({ anchor });
    expect(ledgerIdleStateManagerInit).toHaveBeenCalled();
    expect(ledgerInstance.init).toHaveBeenCalled();
  });

  it('creates iframe strategy for metamask provider', async () => {
    const iframeInstance = createStrategyInstance();
    iframeStrategyMock.mockImplementation(() => iframeInstance);

    await ProviderFactory.create({ type: ProviderTypeEnum.metamask });

    expect(iframeStrategyMock).toHaveBeenCalled();
    expect(iframeInstance.init).toHaveBeenCalled();
  });

  it('creates passkey strategy with wallet param', async () => {
    const crossWindowInstance = createStrategyInstance();
    crossWindowStrategyMock.mockImplementation(() => crossWindowInstance);
    setNetworkWallet(network.walletAddress);

    await ProviderFactory.create({ type: ProviderTypeEnum.passkey });

    expect(crossWindowStrategyMock).toHaveBeenCalledWith({
      walletAddress: expect.stringContaining(
        `${PROVIDER_SEARCH_PARAM}=${ProviderTypeEnum.passkey}`
      )
    });
  });

  it('throws when wallet connect config is missing and succeeds otherwise', async () => {
    walletConnectConfigSelectorMock.mockReturnValue(undefined as any);

    await expect(
      ProviderFactory.create({ type: ProviderTypeEnum.walletConnect })
    ).rejects.toThrow(WalletConnectV2Error.invalidConfig);

    const walletConnectInstance = createStrategyInstance();
    walletConnectStrategyMock.mockImplementation(() => walletConnectInstance);
    walletConnectConfigSelectorMock.mockReturnValue({
      walletConnectV2ProjectId: 'project',
      walletConnectV2RelayAddress: 'relay'
    });
    const anchor = document.createElement('span');

    await ProviderFactory.create({
      type: ProviderTypeEnum.walletConnect,
      anchor
    });

    expect(walletConnectStrategyMock).toHaveBeenCalledWith({
      anchor,
      walletConnectV2ProjectId: 'project',
      walletConnectV2RelayAddress: 'relay'
    });
  });

  it('creates webview provider strategy', async () => {
    const webviewInstance = createStrategyInstance();
    webviewStrategyMock.mockImplementation(() => webviewInstance);

    await ProviderFactory.create({ type: ProviderTypeEnum.webview });

    expect(webviewStrategyMock).toHaveBeenCalled();
    expect(webviewInstance.init).toHaveBeenCalled();
  });

  it('uses custom providers when type not matched', async () => {
    const customInstance = createStrategyInstance();
    const customConstructor = jest.fn().mockResolvedValue(customInstance);
    ProviderFactory.customProviders = [
      {
        type: 'custom-provider',
        name: 'Custom',
        constructor: customConstructor
      }
    ];

    await ProviderFactory.create({
      type: 'custom-provider',
      anchor: undefined
    });

    expect(customConstructor).toHaveBeenCalledWith({
      address: 'erd1address',
      anchor: undefined
    });
    expect(customInstance.init).toHaveBeenCalled();
  });
});
