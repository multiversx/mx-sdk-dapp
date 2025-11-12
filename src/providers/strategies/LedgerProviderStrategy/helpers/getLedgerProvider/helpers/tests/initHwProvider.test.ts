import { HWProvider } from '@multiversx/sdk-hw-provider';
import { initHwProvider } from '../initHwProvider';

describe('initHwProvider tests', () => {
  it('returns existing initialized provider and sets index', async () => {
    const existing = new HWProvider();
    existing.isInitialized = jest.fn(() => true);
    existing.setAddressIndex = jest.fn(async () => undefined);

    const ledgerProvider = new HWProvider();

    const result = await initHwProvider({
      provider: existing,
      ledgerProvider,
      ledgerLogin: { index: 5 },
      shouldInitProvider: false
    });

    expect(existing.isInitialized).toHaveBeenCalled();
    expect(existing.setAddressIndex).toHaveBeenCalledWith(5);
    expect(result).toBe(existing);
  });

  it('initializes ledgerProvider when needed and sets index', async () => {
    const existing = {
      isInitialized: jest.fn(() => false)
    } as unknown as HWProvider;

    const ledgerProvider = new HWProvider();
    ledgerProvider.init = jest.fn(async () => true);
    ledgerProvider.setAddressIndex = jest.fn(async () => undefined);

    const result = await initHwProvider({
      provider: existing,
      ledgerProvider,
      ledgerLogin: { index: 3 },
      shouldInitProvider: true
    });

    expect(ledgerProvider.init).toHaveBeenCalled();
    expect(ledgerProvider.setAddressIndex).toHaveBeenCalledWith(3);
    expect(result).toBe(ledgerProvider);
  });

  it('throws when initialization fails', async () => {
    const existing = {
      isInitialized: jest.fn(() => false)
    } as unknown as HWProvider;

    const ledgerProvider = new HWProvider() as any;
    ledgerProvider.init = jest.fn(async () => false);

    await expect(
      initHwProvider({
        provider: existing,
        ledgerProvider,
        ledgerLogin: undefined,
        shouldInitProvider: true
      })
    ).rejects.toThrow('Failed to initialize Ledger Provider');
  });
});
