import { Transaction } from 'lib/sdkCore';
import { finalizeSignedTransactions } from '../finalizeSignedTransactions';

const signed = [{ id: 'signed' }] as unknown as Transaction[];
const replaced = [{ id: 'replaced' }] as unknown as Transaction[];
const guarded = [{ id: 'guarded' }] as unknown as Transaction[];

describe('finalizeSignedTransactions', () => {
  it('runs the callback, then guards its result', async () => {
    const guardTransactions = jest.fn().mockResolvedValue(guarded);
    const callback = jest.fn().mockResolvedValue(replaced);

    const result = await finalizeSignedTransactions({
      signedTransactions: signed,
      options: { callback },
      guardTransactions
    });

    expect(callback).toHaveBeenCalledWith(signed);
    expect(guardTransactions).toHaveBeenCalledWith(replaced);
    expect(result).toBe(guarded);
  });

  it('keeps the signed transactions when the callback returns nothing', async () => {
    const guardTransactions = jest.fn(async (transactions) => transactions);

    const result = await finalizeSignedTransactions({
      signedTransactions: signed,
      options: { callback: jest.fn().mockResolvedValue(undefined) },
      guardTransactions
    });

    expect(result).toBe(signed);
  });

  it('skips guarding when asked to', async () => {
    const guardTransactions = jest.fn();

    const result = await finalizeSignedTransactions({
      signedTransactions: signed,
      options: { skipGuardian: true },
      guardTransactions
    });

    expect(guardTransactions).not.toHaveBeenCalled();
    expect(result).toBe(signed);
  });
});
