import { Transaction } from 'lib/sdkCore';
import { CrossWindowProviderStrategy } from '../CrossWindowProviderStrategy/CrossWindowProviderStrategy';
import { ExtensionProviderStrategy } from '../ExtensionProviderStrategy/ExtensionProviderStrategy';
import { finalizeSignedTransactions } from '../helpers/signTransactions/helpers/finalizeSignedTransactions';
import { WebviewProviderStrategy } from '../WebviewProviderStrategy/WebviewProviderStrategy';

jest.mock(
  'providers/strategies/helpers/signTransactions/helpers/finalizeSignedTransactions',
  () => ({
    finalizeSignedTransactions: jest.fn(
      async ({ signedTransactions }) => signedTransactions
    )
  })
);

const strategies = [
  ['extension', () => new ExtensionProviderStrategy()],
  ['cross-window', () => new CrossWindowProviderStrategy()],
  ['webview', () => new WebviewProviderStrategy()]
] as const;

describe.each(strategies)('%s signTransactions options', (_, create) => {
  it('passes the signed transactions and the options to the shared finalize step', async () => {
    const strategy = create();
    const signed = [{ signed: true }] as unknown as Transaction[];
    const options = { skipGuardian: true, callback: jest.fn() };

    (strategy as any).provider = {
      signTransactions: jest.fn().mockResolvedValue(signed)
    };
    jest.spyOn(strategy as any, 'initSignState').mockResolvedValue({
      manager: { closeUI: jest.fn() },
      onClose: jest.fn()
    });

    await strategy.signTransactions([] as Transaction[], options);

    expect(finalizeSignedTransactions).toHaveBeenLastCalledWith({
      signedTransactions: signed,
      options
    });
  });
});
