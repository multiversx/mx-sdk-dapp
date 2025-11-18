import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { setProviderType } from 'store/actions/loginInfo/loginInfoActions';
import { login as loginHelper } from '../../../DappProvider/helpers/login/login';
import { setAccountProvider } from '../../../helpers/accountProvider';
import { clearInitiatedLogins } from '../../../helpers/clearInitiatedLogins';
import { ProviderFactory } from '../../../ProviderFactory';
import { ProviderTypeEnum } from '../../../types/providerFactory.types';
import { CrossWindowProviderStrategy } from '../CrossWindowProviderStrategy';

const logoutManagerInit = jest.fn();

jest.mock('../../../helpers/accountProvider', () => ({
  setAccountProvider: jest.fn(),
  getAccountProvider: jest.fn()
}));

jest.mock('../../../helpers/clearInitiatedLogins', () => ({
  clearInitiatedLogins: jest.fn()
}));

jest.mock('store/actions/loginInfo/loginInfoActions', () => ({
  setProviderType: jest.fn()
}));

jest.mock('../../../DappProvider/helpers/login/login', () => ({
  login: jest.fn()
}));

jest.mock('managers/LogoutManager/LogoutManager', () => ({
  LogoutManager: {
    getInstance: () => ({
      init: logoutManagerInit
    })
  }
}));

jest.mock('lib/sdkWebWalletCrossWindowProvider', () => {
  class MockCrossWindowProvider {
    setWalletUrl() {
      return undefined;
    }

    setAddress() {
      return undefined;
    }

    init() {
      return Promise.resolve(true);
    }

    static getInstance() {
      return new MockCrossWindowProvider();
    }
  }

  return { CrossWindowProvider: MockCrossWindowProvider };
});

jest.mock('../CrossWindowProviderStrategy');

describe('CrossWindowProviderStrategy tests', () => {
  const crossWindowStrategyMock = jest.mocked(CrossWindowProviderStrategy);
  const mockSetAccountProvider = jest.mocked(setAccountProvider);
  const mockClearInitiatedLogins = jest.mocked(clearInitiatedLogins);
  const mockSetProviderType = jest.mocked(setProviderType);
  const mockLoginHelper = jest.mocked(loginHelper);

  let strategyInstance: any;

  beforeEach(() => {
    jest.clearAllMocks();
    logoutManagerInit.mockReset();

    strategyInstance = {
      init: jest.fn().mockResolvedValue(true),
      login: jest.fn().mockResolvedValue('provider-login'),
      getType: jest.fn().mockReturnValue(ProviderTypeEnum.crossWindow),
      cancelLogin: jest.fn(),
      provider: new CrossWindowProvider()
    };

    crossWindowStrategyMock.mockImplementation(() => strategyInstance);
    mockLoginHelper.mockResolvedValue('login-helper-token' as any);
  });

  it('creates crossWindow provider and clears initiated logins', async () => {
    const dappProvider = await ProviderFactory.create({
      type: ProviderTypeEnum.crossWindow
    });

    expect(strategyInstance.init).toHaveBeenCalled();
    expect(mockSetAccountProvider).toHaveBeenCalledWith(dappProvider);
    expect(mockClearInitiatedLogins).toHaveBeenCalledWith({
      skipLoginMethod: ProviderTypeEnum.crossWindow
    });
    expect(dappProvider).toBeDefined();
  });

  it('performs login via DappProvider and wires store updates', async () => {
    const dappProvider = await ProviderFactory.create({
      type: ProviderTypeEnum.crossWindow
    });

    mockSetAccountProvider.mockClear();
    mockSetProviderType.mockClear();

    const result = await dappProvider.login({ token: 'abc' });

    expect(mockLoginHelper).toHaveBeenCalledWith(strategyInstance, {
      token: 'abc'
    });
    expect(mockSetProviderType).toHaveBeenCalledWith(
      ProviderTypeEnum.crossWindow
    );
    expect(mockSetAccountProvider).toHaveBeenLastCalledWith(dappProvider);
    expect(logoutManagerInit).toHaveBeenCalled();
    expect(result).toBe('login-helper-token');
  });
});
