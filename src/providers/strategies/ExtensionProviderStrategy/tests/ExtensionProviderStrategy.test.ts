import { testAddress } from '__mocks__/accountConfig';
import { initApp } from 'methods/initApp/initApp';
import { ProviderFactory } from 'providers/ProviderFactory';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { EnvironmentsEnum } from 'types/enums.types';

jest.mock('@multiversx/sdk-extension-provider/out/extensionProvider', () => {
  return {
    ExtensionProvider: {
      getInstance: jest.fn(() => ({
        login: jest.fn().mockResolvedValue({ address: testAddress }),
        init: jest.fn().mockResolvedValue(true),
        isInitialized: jest.fn().mockReturnValue(true),
        setAddress: jest.fn().mockReturnThis(),
        setAccount: jest.fn(),
        getAddress: jest.fn(async () => testAddress),
        logout: jest.fn().mockResolvedValue(true),
        cancelAction: jest.fn(),
        signTransactions: jest.fn(),
        signMessage: jest.fn()
      }))
    }
  };
});

jest.mock('lib/sdkDappUi', () => ({
  defineCustomElements: jest.fn()
}));

describe('ExtensionProviderStrategy tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should login with the provider', async () => {
    await initApp({
      dAppConfig: {
        environment: EnvironmentsEnum.devnet
      }
    });
    const provider = await ProviderFactory.create({
      type: ProviderTypeEnum.extension
    });

    const result = await provider.login();
    expect(result?.address).toBe(testAddress);
  });
});
