import { Transaction } from '@multiversx/sdk-core/out';
import { mockPendingTransaction } from '__mocks__';
import { testAddress } from '__mocks__/accountConfig';
import { initApp } from 'methods/initApp/initApp';
import { ProviderFactory } from 'providers/ProviderFactory';
import { ExtensionProviderStrategy } from 'providers/strategies/ExtensionProviderStrategy/ExtensionProviderStrategy';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { EnvironmentsEnum } from 'types/enums.types';

const mockSignTransactions = jest.fn();

const extensionProviderMock = {
  login: jest.fn().mockResolvedValue({ address: testAddress }),
  init: jest.fn().mockResolvedValue(true),
  isInitialized: jest.fn().mockReturnValue(true),
  setAddress: jest.fn().mockReturnThis(),
  setAccount: jest.fn(),
  getAddress: jest.fn(async () => testAddress),
  logout: jest.fn().mockResolvedValue(true),
  cancelAction: jest.fn(),
  signTransactions: mockSignTransactions,
  signMessage: jest.fn()
};

jest.mock('@multiversx/sdk-extension-provider/out/extensionProvider', () => ({
  ExtensionProvider: {
    getInstance: jest.fn(() => extensionProviderMock)
  }
}));

jest.mock('lib/sdkDappUi', () => ({
  defineCustomElements: jest.fn()
}));

jest.mock('providers/DappProvider/helpers/computeNonces/computeNonces', () => ({
  computeNonces: jest.fn(({ transactions }) => {
    // Return transactions as-is to avoid calling toPlainObject() on mock objects
    return transactions;
  })
}));

describe('ExtensionProviderStrategy tests', () => {
  const setupProvider = async () => {
    await initApp({
      dAppConfig: {
        environment: EnvironmentsEnum.devnet
      }
    });
    const provider = await ProviderFactory.create({
      type: ProviderTypeEnum.extension
    });
    const result = await provider.login();
    return { provider, result };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should login with the provider', async () => {
    const { result } = await setupProvider();
    expect(result?.address).toBe(testAddress);
  });

  it('should sign transactions via the provider strategy', async () => {
    jest
      .spyOn(ExtensionProviderStrategy.prototype as any, 'initSignState')
      .mockResolvedValue({
        manager: { closeUI: jest.fn() }
      });

    const { provider } = await setupProvider();

    const expectedSigned = [
      Transaction.newFromPlainObject({
        ...mockPendingTransaction,
        signature: 'signed'
      })
    ];

    mockSignTransactions.mockResolvedValueOnce(expectedSigned);

    const result = await provider.signTransactions([
      Transaction.newFromPlainObject(mockPendingTransaction)
    ]);

    expect(result).toEqual(expectedSigned);
  });
});
