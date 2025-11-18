import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { CrossWindowProviderStrategy } from 'providers/strategies/CrossWindowProviderStrategy';
import { ExtensionProviderStrategy } from 'providers/strategies/ExtensionProviderStrategy';
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

describe('ProviderFactory clearInitiatedLogins integration', () => {
  const crossWindowStrategyMock = jest.mocked(CrossWindowProviderStrategy);
  const extensionStrategyMock = jest.mocked(ExtensionProviderStrategy);

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

    expect(clearInitiatedLoginsSpy).toHaveBeenCalledTimes(1);
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

    expect(clearInitiatedLoginsSpy).toHaveBeenCalledTimes(1);
    expect(clearInitiatedLoginsSpy).toHaveBeenCalledWith(null);
  });
});
