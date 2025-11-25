import { Message, Transaction } from 'lib/sdkCore';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { EmptyProvider, emptyProvider } from '../emptyProvider';

describe('emptyProvider tests', () => {
  let provider: EmptyProvider;
  const transaction = {} as Transaction;
  const message = {} as Message;

  beforeEach(() => {
    provider = new EmptyProvider();
  });

  it('returns defaults for init/isInitialized/isConnected/getType', async () => {
    await expect(provider.init()).resolves.toBe(false);
    expect(provider.isInitialized()).toBe(false);
    expect(provider.isConnected()).toBe(false);
    expect(provider.getType()).toBe(ProviderTypeEnum.none);
    expect(emptyProvider.getType()).toBe(ProviderTypeEnum.none);
  });

  it('throws for not initialized interactions', async () => {
    const expectThrow = (fn: () => unknown) => {
      expect(fn).toThrow('Provider not initialized');
    };

    expectThrow(() => provider.login());
    expectThrow(() => provider.logout());
    expectThrow(() => provider.getAccount());
    expectThrow(() => provider.setAccount({} as any));
    expectThrow(() => provider.sendTransaction?.(transaction));
    expectThrow(() =>
      provider.signTransaction(transaction, { callbackUrl: 'url' })
    );
    expectThrow(() => provider.signTransactions([transaction]));
    expectThrow(() => provider.signMessage(message));
    expectThrow(() =>
      provider.sendCustomMessage?.({
        method: 'custom',
        params: {}
      })
    );
    expectThrow(() =>
      provider.sendCustomRequest?.({
        request: {} as any
      })
    );
    await expect(provider.getAddress()).rejects.toThrow(
      'Provider not initialized'
    );
  });
});
