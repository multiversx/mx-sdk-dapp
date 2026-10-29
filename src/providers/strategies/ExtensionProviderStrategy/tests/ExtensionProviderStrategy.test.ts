import { Transaction } from '@multiversx/sdk-core/out';
import { mockPendingTransaction } from '__mocks__';
import { testAddress } from '__mocks__/accountConfig';
import { Address, Message } from 'lib/sdkCore';
import { initApp } from 'methods/initApp/initApp';
import { ProviderFactory } from 'providers/ProviderFactory';
import { ExtensionProviderStrategy } from 'providers/strategies/ExtensionProviderStrategy/ExtensionProviderStrategy';
import { EXTENSION_REPLY_ERROR } from 'providers/strategies/ExtensionProviderStrategy/helpers/withExtensionReply';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { EnvironmentsEnum } from 'types/enums.types';

const mockSignTransactions = jest.fn();

const extensionProviderMock = {
  login: jest.fn().mockResolvedValue({ address: testAddress }),
  init: jest.fn().mockResolvedValue(true),
  isInitialized: jest.fn().mockReturnValue(true),
  setAddress: jest.fn().mockReturnThis(),
  setAccount: jest.fn(),
  getAccount: jest.fn(() => ({ address: '' })),
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

jest.mock('providers/strategies/helpers/signMessage/signMessage', () => ({
  signMessage: jest.fn()
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

  describe('replies that do not come from the extension', () => {
    const postOtherReply = () =>
      window.dispatchEvent(
        new MessageEvent('message', {
          data: { target: 'erdw-contentScript', type: '', data: {} }
        })
      );

    it('refuses the login result and restores the previous account', async () => {
      extensionProviderMock.login.mockImplementationOnce(async () => {
        postOtherReply();
        return { address: 'erd1other' };
      });

      const strategy = new ExtensionProviderStrategy();

      await expect(
        (strategy as unknown as { _login: () => Promise<unknown> })._login()
      ).rejects.toThrow(EXTENSION_REPLY_ERROR);

      expect(extensionProviderMock.setAccount).toHaveBeenLastCalledWith({
        address: ''
      });
    });

    it('refuses signed transactions', async () => {
      jest
        .spyOn(ExtensionProviderStrategy.prototype as any, 'initSignState')
        .mockResolvedValue({
          manager: { closeUI: jest.fn() },
          onClose: jest.fn()
        });

      mockSignTransactions.mockImplementationOnce(async (transactions) => {
        postOtherReply();
        return transactions;
      });

      const strategy = new ExtensionProviderStrategy();

      await expect(
        strategy.signTransactions([
          Transaction.newFromPlainObject(mockPendingTransaction)
        ])
      ).rejects.toThrow(EXTENSION_REPLY_ERROR);
    });
  });

  describe('signMessage', () => {
    const mockSignMessageHelper = jest.requireMock(
      'providers/strategies/helpers/signMessage/signMessage'
    ).signMessage as jest.Mock;

    beforeEach(() => {
      mockSignMessageHelper.mockClear();
    });

    it('should sign a message successfully', async () => {
      const { provider } = await setupProvider();
      const message = new Message({
        address: new Address(testAddress),
        data: new Uint8Array(Buffer.from('test message'))
      });
      const expectedSignedMessage = new Message({
        address: new Address(testAddress),
        data: new Uint8Array(Buffer.from('test message')),
        signature: new Uint8Array([1, 2, 3])
      });

      mockSignMessageHelper.mockResolvedValueOnce(expectedSignedMessage);

      const result = await provider.signMessage(message);

      expect(mockSignMessageHelper).toHaveBeenCalledWith({
        message,
        handleSignMessage: expect.any(Function),
        cancelAction: expect.any(Function),
        providerType: expect.any(String)
      });
      expect(result).toEqual(expectedSignedMessage);
    });
  });
});
