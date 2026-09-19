import { testAddress } from '__mocks__';
import { Address, Transaction } from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import { IProvider } from 'providers/types/providerFactory.types';
import {
  clearNonceReservations,
  getNextReservedNonce
} from 'utils/account/nonceReservations';
import { signTransactionsWithProvider } from '../signTransactionsWithProvider';

jest.mock('methods/account/getAccount');
jest.mock('utils/account/refreshAccount', () => ({
  refreshAccount: jest.fn().mockResolvedValue(undefined)
}));
jest.mock('store/actions/account/accountActions', () => ({
  setAccountNonce: jest.fn()
}));

const createTransaction = () =>
  new Transaction({
    nonce: 0n,
    value: 0n,
    sender: Address.newFromBech32(testAddress),
    receiver: Address.newFromBech32(testAddress),
    gasLimit: 50_000n,
    chainID: 'D'
  });

const createDeferredProvider = () => {
  const pending: Array<(transactions: Transaction[]) => void> = [];

  const provider = {
    getType: () => 'extension',
    signTransactions: jest.fn(
      (transactions: Transaction[]) =>
        new Promise<Transaction[]>((resolve) =>
          pending.push(() => resolve(transactions))
        )
    )
  } as unknown as IProvider;

  const signAll = () => pending.forEach((resolve) => resolve([]));

  return { provider, signAll };
};

describe('signTransactionsWithProvider', () => {
  beforeEach(() => {
    clearNonceReservations();
    (getAccount as jest.Mock).mockReturnValue({
      address: testAddress,
      nonce: 7,
      isGuarded: false
    });
  });

  it('gives concurrent signings distinct nonces', async () => {
    const { provider, signAll } = createDeferredProvider();

    const first = signTransactionsWithProvider({
      provider,
      transactions: [createTransaction()]
    });
    const second = signTransactionsWithProvider({
      provider,
      transactions: [createTransaction()]
    });

    await new Promise(process.nextTick);
    signAll();

    const [[firstSigned], [secondSigned]] = await Promise.all([first, second]);

    expect(firstSigned.nonce).toBe(7n);
    expect(secondSigned.nonce).toBe(8n);
  });

  it('holds the signed nonces until they are tracked', async () => {
    const provider = {
      getType: () => 'extension',
      signTransactions: jest.fn(async (transactions) => transactions)
    } as unknown as IProvider;

    await signTransactionsWithProvider({
      provider,
      transactions: [createTransaction(), createTransaction()]
    });

    expect(getNextReservedNonce(testAddress)).toBe(9);
  });

  it('releases the nonces when signing fails', async () => {
    const provider = {
      getType: () => 'extension',
      signTransactions: jest.fn().mockRejectedValue(new Error('cancelled'))
    } as unknown as IProvider;

    await expect(
      signTransactionsWithProvider({
        provider,
        transactions: [createTransaction()]
      })
    ).rejects.toThrow('cancelled');

    expect(getNextReservedNonce(testAddress)).toBe(0);
  });
});
