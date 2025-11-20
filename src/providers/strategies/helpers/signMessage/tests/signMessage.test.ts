import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { account } from '__mocks__';
import { Address, Message } from 'lib/sdkCore';
import { PendingTransactionsStateManager } from 'managers/internal/PendingTransactionsStateManager/PendingTransactionsStateManager';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import { ProviderFactory } from 'providers/ProviderFactory';
import {
  ProviderTypeEnum,
  ICustomProvider
} from 'providers/types/providerFactory.types';
import { SigningWarningsEnum } from 'types/enums.types';
import { ComponentFactory } from 'utils/ComponentFactory';
import { signMessage } from '../signMessage';

jest.spyOn(ComponentFactory, 'create').mockResolvedValue({
  getEventBus: async () => new EventBus()
});

const mockHandleSignMessage = jest.fn((msg) => Promise.resolve(msg));

describe('signMessage tests', () => {
  const startSigning = async () => {
    const message = new Message({
      address: new Address(account.address),
      data: new Uint8Array(Buffer.from('test message'))
    });

    const signPromise = signMessage({
      message,
      handleSignMessage: mockHandleSignMessage,
      providerType: ProviderTypeEnum.extension
    });

    // wait for the manager to be initialized
    await new Promise((resolve) => setTimeout(resolve));

    return { signPromise, message };
  };

  it('should sign a message', async () => {
    const { signPromise, message } = await startSigning();

    const signedMessage = await signPromise;

    expect(mockHandleSignMessage).toHaveBeenCalledWith(message);
    expect(signedMessage).toBe(message);
  });

  it('should handle custom providers and close event cancellation', async () => {
    const customProvider: ICustomProvider = {
      type: 'custom-provider' as any,
      name: 'Custom Provider',
      iconUrl: 'https://example.com/icon.png',
      constructor: jest.fn()
    };

    // Mock custom providers to trigger the reduce logic
    jest
      .spyOn(ProviderFactory, 'customProviders', 'get')
      .mockReturnValue([customProvider]);

    const message = new Message({
      address: new Address(account.address),
      data: new Uint8Array(Buffer.from('test message'))
    });

    const mockCancelAction = jest.fn().mockResolvedValue(undefined);
    // Prevent handleSignMessage from resolving immediately so we can trigger close first
    const delayedHandleSignMessage = jest.fn(
      () =>
        new Promise<Message>((resolve) =>
          setTimeout(() => resolve(message), 1000)
        )
    );

    const signPromise = signMessage({
      message,
      handleSignMessage: delayedHandleSignMessage,
      cancelAction: mockCancelAction,
      providerType: 'custom-provider'
    });

    // wait for the manager to be initialized and handler to be registered
    await new Promise((resolve) => setTimeout(resolve, 100));

    const manager = PendingTransactionsStateManager.getInstance();
    const closeHandlers = manager.getEventHandlers(
      PendingTransactionsEventsEnum.CLOSE
    );

    expect(closeHandlers.length).toBeGreaterThan(0);
    const closeHandler = closeHandlers[closeHandlers.length - 1];

    // Trigger the close handler to test handleClose (it's async)
    closeHandler();

    // Verify the signPromise rejects with cancelled message
    await expect(signPromise).rejects.toEqual({
      message: SigningWarningsEnum.cancelled
    });

    expect(mockCancelAction).toHaveBeenCalled();
  });
});
