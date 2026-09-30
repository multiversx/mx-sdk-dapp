import { mockPendingTransaction } from '__mocks__';
import { getServerTransactionsByHashes } from 'apiCalls/transactions/getServerTransactionsByHashes';
import { TRANSACTIONS_STATUS_NOT_FOUND_TIMEOUT_MS } from 'constants/transactions.constants';
import { TransactionManager } from 'managers/TransactionManager';
import { getStore } from 'store/store';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';
import { checkTransactionStatus } from '../helpers/checkTransactionStatus';

jest.mock('apiCalls/transactions/getServerTransactionsByHashes');
jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: () => false
}));
jest.mock('store/actions/toasts/toastsActions', () => ({
  addTransactionToast: jest.fn()
}));
jest.mock('utils/account/reconcileAccountNonce', () => ({
  reconcileAccountNonce: jest.fn().mockResolvedValue(undefined)
}));

const mockServerTransactions = (
  statuses: Record<string, `${TransactionServerStatusesEnum}`>
) =>
  (getServerTransactionsByHashes as jest.Mock).mockImplementation(
    async (hashes: string[]) =>
      hashes.map((hash) => ({
        ...mockPendingTransaction,
        txHash: hash,
        status: statuses[hash]
      }))
  );

// a hash left out of the response is not found on the network
const mockFoundTransactions = (
  statuses: Record<string, `${TransactionServerStatusesEnum}`>
) =>
  (getServerTransactionsByHashes as jest.Mock).mockImplementation(
    async (hashes: string[]) =>
      hashes
        .filter((hash) => statuses[hash] != null)
        .map((hash) => ({
          ...mockPendingTransaction,
          txHash: hash,
          status: statuses[hash]
        }))
  );

const createTransaction = (hash: string, nonce: number) =>
  ({
    ...mockPendingTransaction,
    hash,
    nonce,
    status: TransactionServerStatusesEnum.pending
  }) as SignedTransactionType;

const getSession = (sessionId: string) =>
  getStore().getState().transactions[sessionId];

describe('transaction session settlement', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('keeps tracking pending transactions after another one of the session failed', async () => {
    const onFail = jest.fn().mockResolvedValue(undefined);
    const onSuccess = jest.fn().mockResolvedValue(undefined);

    const sessionId = await TransactionManager.getInstance().track(
      [createTransaction('hash-a', 1), createTransaction('hash-b', 2)],
      { onFail, onSuccess, disableToasts: true }
    );

    mockServerTransactions({ 'hash-a': 'fail', 'hash-b': 'pending' });
    await checkTransactionStatus();

    expect(getSession(sessionId).status).toBe('sent');
    expect(onFail).not.toHaveBeenCalled();

    mockServerTransactions({ 'hash-a': 'fail', 'hash-b': 'success' });
    await checkTransactionStatus();

    expect(getServerTransactionsByHashes).toHaveBeenLastCalledWith(['hash-b']);
    expect(
      getSession(sessionId).transactions.map(({ status }) => status)
    ).toEqual(['fail', 'success']);
    expect(getSession(sessionId).status).toBe('fail');
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it('runs onFail once when the last transaction of a session fails', async () => {
    const onFail = jest.fn().mockResolvedValue(undefined);

    const sessionId = await TransactionManager.getInstance().track(
      [createTransaction('hash-c', 3)],
      { onFail, disableToasts: true }
    );

    mockServerTransactions({ 'hash-c': 'fail' });
    await checkTransactionStatus();
    await checkTransactionStatus();

    expect(getSession(sessionId).status).toBe('fail');
    expect(onFail).toHaveBeenCalledTimes(1);
  });

  describe('a session with a timed-out transaction', () => {
    let now = Date.now();
    let dateNowSpy: jest.SpyInstance;

    beforeEach(() => {
      dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => now);
    });

    afterEach(() => {
      dateNowSpy.mockRestore();
    });

    const timeOut = async (
      statuses: Record<string, `${TransactionServerStatusesEnum}`>
    ) => {
      mockFoundTransactions(statuses);
      await checkTransactionStatus();
      now += TRANSACTIONS_STATUS_NOT_FOUND_TIMEOUT_MS;
      await checkTransactionStatus();
    };

    it('settles as timed out when the other transaction succeeds afterwards', async () => {
      const sessionId = await TransactionManager.getInstance().track(
        [createTransaction('hash-e', 5), createTransaction('hash-f', 6)],
        { disableToasts: true }
      );

      await timeOut({ 'hash-f': 'pending' });

      mockFoundTransactions({ 'hash-f': 'success' });
      await checkTransactionStatus();

      expect(getSession(sessionId).status).toBe('timedOut');
    });

    it('settles as timed out when the other transaction succeeded before', async () => {
      const sessionId = await TransactionManager.getInstance().track(
        [createTransaction('hash-g', 7), createTransaction('hash-h', 8)],
        { disableToasts: true }
      );

      await timeOut({ 'hash-h': 'success' });

      expect(getSession(sessionId).status).toBe('timedOut');
    });
  });

  it('keeps a successful session successful when onSuccess throws', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const onSuccess = jest.fn().mockRejectedValue(new Error('consumer error'));
    const onFail = jest.fn().mockResolvedValue(undefined);

    const sessionId = await TransactionManager.getInstance().track(
      [createTransaction('hash-d', 4)],
      { onSuccess, onFail, disableToasts: true }
    );

    mockServerTransactions({ 'hash-d': 'success' });
    await checkTransactionStatus();

    expect(getSession(sessionId).status).toBe('success');
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
