import { testAddress } from '__mocks__/accountConfig';
import { getLedgerProvider } from '../getLedgerProvider';

jest.mock('@multiversx/sdk-hw-provider', () => ({
  HWProvider: jest.fn().mockImplementation(() => ({
    mock: 'hw'
  }))
}));

jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn()
}));

jest.mock('providers/helpers/accountProvider', () => ({
  getAccountProvider: jest.fn()
}));

jest.mock('store/selectors/accountSelectors', () => ({
  ledgerAccountSelector: jest.fn()
}));

jest.mock('store/selectors/loginInfoSelectors', () => ({
  ledgerLoginSelector: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('../helpers/getLedgerConfiguration', () => ({
  getLedgerConfiguration: jest.fn()
}));

jest.mock('../helpers/initHwProvider', () => ({
  initHwProvider: jest.fn()
}));

const { HWProvider } = jest.requireMock('@multiversx/sdk-hw-provider') as {
  HWProvider: jest.Mock;
};

const { getIsLoggedIn } = jest.requireMock('methods/account/getIsLoggedIn') as {
  getIsLoggedIn: jest.Mock;
};

const { getAccountProvider } = jest.requireMock(
  'providers/helpers/accountProvider'
) as { getAccountProvider: jest.Mock };

const { ledgerAccountSelector } = jest.requireMock(
  'store/selectors/accountSelectors'
) as { ledgerAccountSelector: jest.Mock };

const { ledgerLoginSelector } = jest.requireMock(
  'store/selectors/loginInfoSelectors'
) as { ledgerLoginSelector: jest.Mock };

const { getState } = jest.requireMock('store/store') as { getState: jest.Mock };

const { getLedgerConfiguration } = jest.requireMock(
  '../helpers/getLedgerConfiguration'
) as { getLedgerConfiguration: jest.Mock };

const { initHwProvider } = jest.requireMock('../helpers/initHwProvider') as {
  initHwProvider: jest.Mock;
};

describe('getLedgerProvider', () => {
  const state = { mock: true };
  const baseProvider = { type: 'ledger' };
  const ledgerLogin = { index: 3 };

  beforeEach(() => {
    jest.clearAllMocks();
    getState.mockReturnValue(state);
    getAccountProvider.mockReturnValue(baseProvider);
    ledgerLoginSelector.mockReturnValue(ledgerLogin);
    (HWProvider as jest.Mock).mockImplementation(() => ({ mock: 'hw' }));
  });

  it('returns current ledger account config without initializing provider', async () => {
    getIsLoggedIn.mockReturnValue(true);
    ledgerAccountSelector.mockReturnValue({
      version: '1.0.0',
      hasContractDataEnabled: true,
      index: 1,
      address: testAddress
    });

    const result = await getLedgerProvider();

    expect(result).toEqual({
      ledgerProvider: { mock: 'hw' },
      ledgerConfig: { version: '1.0.0', dataEnabled: true }
    });
  });

  it('initializes provider when not logged in and returns config', async () => {
    getIsLoggedIn.mockReturnValue(false);
    ledgerAccountSelector.mockReturnValue(null);
    const initializedProvider = { mock: 'initialized' };
    initHwProvider.mockResolvedValue(initializedProvider);
    getLedgerConfiguration.mockResolvedValue({
      version: '2.0.0',
      dataEnabled: false
    });

    const result = await getLedgerProvider();

    expect(result).toEqual({
      ledgerProvider: initializedProvider,
      ledgerConfig: { version: '2.0.0', dataEnabled: false }
    });
  });

  it('rethrows errors from initialization path', async () => {
    getIsLoggedIn.mockReturnValue(false);
    ledgerAccountSelector.mockReturnValue(null);
    const error = new Error('Init failed');
    initHwProvider.mockRejectedValue(error);
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    await expect(getLedgerProvider()).rejects.toThrow('Init failed');

    expect(consoleSpy).toHaveBeenCalledWith(
      'Could not initialize ledger app',
      error
    );
    consoleSpy.mockRestore();
  });
});
