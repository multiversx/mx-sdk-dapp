import { testAddress, testReceiver } from '__mocks__';
import { Address, Transaction } from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import { IProvider } from 'providers/types/providerFactory.types';
import { setAccountNonce } from 'store/actions/account/accountActions';
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

const otherSender =
  'erd1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqzu66jx';

const createTransaction = ({ sender = testAddress, nonce = 0n } = {}) =>
  new Transaction({
    nonce,
    value: 0n,
    sender: Address.newFromBech32(sender),
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
    jest.clearAllMocks();
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

  it('leaves the nonce of another sender alone when co-signing', async () => {
    const provider = {
      getType: () => 'extension',
      signTransactions: jest.fn(async (transactions) => transactions)
    } as unknown as IProvider;

    const [coSigned, own] = await signTransactionsWithProvider({
      provider,
      transactions: [
        createTransaction({ sender: otherSender, nonce: 2n }),
        createTransaction()
      ]
    });

    expect(coSigned.nonce).toBe(2n);
    expect(own.nonce).toBe(7n);
    expect(getNextReservedNonce(testAddress)).toBe(8);
    expect(getNextReservedNonce(otherSender)).toBe(0);
    expect(setAccountNonce).toHaveBeenCalledWith(8);
  });

  it('does not advance the account nonce past a co-signed transaction', async () => {
    const provider = {
      getType: () => 'extension',
      signTransactions: jest.fn(async (transactions) => transactions)
    } as unknown as IProvider;

    await signTransactionsWithProvider({
      provider,
      transactions: [createTransaction({ sender: otherSender, nonce: 500n })]
    });

    expect(getNextReservedNonce(testAddress)).toBe(0);
    expect(setAccountNonce).not.toHaveBeenCalled();
  });

  describe('guarded account', () => {
    const accountGuardian =
      'erd1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqqzw7ud';

    const provider = {
      getType: () => 'extension',
      signTransactions: jest.fn(async (transactions) => transactions)
    } as unknown as IProvider;

    beforeEach(() => {
      (getAccount as jest.Mock).mockReturnValue({
        address: testAddress,
        nonce: 7,
        isGuarded: true,
        activeGuardianAddress: accountGuardian
      });
    });

    it('guards its own transactions with its guardian', async () => {
      const [own] = await signTransactionsWithProvider({
        provider,
        transactions: [createTransaction()]
      });

      expect(own.guardian.toBech32()).toBe(accountGuardian);
      expect(own.options).toBe(2);
    });

    it('leaves the guardian of another sender it co-signs for', async () => {
      const coSigned = createTransaction({ sender: otherSender, nonce: 2n });
      coSigned.guardian = Address.newFromBech32(testAddress);
      coSigned.version = 2;
      coSigned.options = 2;

      const [signed] = await signTransactionsWithProvider({
        provider,
        transactions: [coSigned]
      });

      expect(signed.guardian.toBech32()).toBe(testAddress);
      expect(signed.options).toBe(2);
    });

    it('still guards a transaction sent by a contract', async () => {
      const [signed] = await signTransactionsWithProvider({
        provider,
        transactions: [createTransaction({ sender: testReceiver })]
      });

      expect(signed.guardian.toBech32()).toBe(accountGuardian);
    });
  });
});
