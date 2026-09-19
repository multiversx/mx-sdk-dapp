import { accountNonceSelector } from 'store/selectors/accountSelectors';
import { transactionsSliceSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { AccountType } from 'types/account.types';
import {
  clearNonceReservations,
  reserveNonces
} from 'utils/account/nonceReservations';
import { getLatestNonce, getReconciledNonce } from '../getLatestNonce';

jest.mock('store/store');
jest.mock('store/selectors/accountSelectors');
jest.mock('store/selectors/transactionsSelector');

describe('getLatestNonce', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return the current account nonce if apiAccount is null', () => {
    const state = {};
    const currentAccountNonce = 5;
    const transactionsSessions = {};

    (getState as jest.Mock).mockReturnValue(state);
    (accountNonceSelector as jest.Mock).mockReturnValue(currentAccountNonce);
    (transactionsSliceSelector as jest.Mock).mockReturnValue(
      transactionsSessions
    );

    const result = getLatestNonce(null);
    expect(result).toBe(currentAccountNonce);
  });

  it('should return the max nonce from transactions if apiAccount is null', () => {
    const state = {};
    const currentAccountNonce = 5;
    const transactionsSessions = {
      1234567890: {
        status: 'sent',
        transactions: [
          { nonce: 10, status: 'pending' },
          { nonce: 15, status: 'pending' }
        ]
      }
    };

    (getState as jest.Mock).mockReturnValue(state);
    (accountNonceSelector as jest.Mock).mockReturnValue(currentAccountNonce);
    (transactionsSliceSelector as jest.Mock).mockReturnValue(
      transactionsSessions
    );

    const result = getLatestNonce(null);
    expect(result).toBe(16); // 15 + 1
  });

  it('should return the max nonce between apiAccount and currentAccountNonce', () => {
    const state = {};
    const currentAccountNonce = 5;
    const transactionsSessions = {};
    const apiAccount: AccountType = {
      nonce: 10,
      address: '',
      balance: '',
      txCount: 0,
      scrCount: 0,
      claimableRewards: '',
      isGuarded: false
    };

    (getState as jest.Mock).mockReturnValue(state);
    (accountNonceSelector as jest.Mock).mockReturnValue(currentAccountNonce);
    (transactionsSliceSelector as jest.Mock).mockReturnValue(
      transactionsSessions
    );

    const result = getLatestNonce(apiAccount);
    expect(result).toBe(apiAccount.nonce);
  });

  it('should return the max nonce between transactions, apiAccount, and currentAccountNonce', () => {
    const state = {};
    const currentAccountNonce = 5;
    const transactionsSessions = {
      1234567890: {
        status: 'sent',
        transactions: [
          { nonce: 10, status: 'pending' },
          { nonce: 15, status: 'pending' }
        ]
      }
    };
    const apiAccount: AccountType = {
      nonce: 12,
      address: '',
      balance: '',
      txCount: 0,
      scrCount: 0,
      claimableRewards: '',
      isGuarded: false
    };

    (getState as jest.Mock).mockReturnValue(state);
    (accountNonceSelector as jest.Mock).mockReturnValue(currentAccountNonce);
    (transactionsSliceSelector as jest.Mock).mockReturnValue(
      transactionsSessions
    );

    const result = getLatestNonce(apiAccount);
    expect(result).toBe(16);
  });

  describe('nonces of finished sessions', () => {
    const apiAccount: AccountType = {
      nonce: 12,
      address: '',
      balance: '',
      txCount: 0,
      scrCount: 0,
      claimableRewards: '',
      isGuarded: false
    };

    const mockSessions = (transactionsSessions: Record<string, unknown>) => {
      (getState as jest.Mock).mockReturnValue({});
      (accountNonceSelector as jest.Mock).mockReturnValue(0);
      (transactionsSliceSelector as jest.Mock).mockReturnValue(
        transactionsSessions
      );
    };

    it('counts transactions that executed, even when they failed', () => {
      mockSessions({
        1: {
          status: 'fail',
          transactions: [
            { nonce: 12, status: 'success' },
            { nonce: 13, status: 'fail' }
          ]
        }
      });

      expect(getLatestNonce(apiAccount)).toBe(14);
    });

    it('ignores transactions of a timed out session that never executed', () => {
      mockSessions({
        1: {
          status: 'timedOut',
          transactions: [{ nonce: 20, status: 'pending' }]
        }
      });

      expect(getLatestNonce(apiAccount)).toBe(apiAccount.nonce);
    });

    it('ignores transactions that were not executed', () => {
      mockSessions({
        1: {
          status: 'invalid',
          transactions: [{ nonce: 20, status: 'not executed' }]
        }
      });

      expect(getLatestNonce(apiAccount)).toBe(apiAccount.nonce);
    });
  });

  describe('getReconciledNonce', () => {
    afterEach(() => {
      clearNonceReservations();
    });

    it('ignores the nonce advanced locally at signing', () => {
      (accountNonceSelector as jest.Mock).mockReturnValue(30);
      (transactionsSliceSelector as jest.Mock).mockReturnValue({});

      const apiAccount = { nonce: 12 } as AccountType;

      expect(getReconciledNonce(apiAccount, {} as any)).toBe(12);
      expect(getLatestNonce(apiAccount)).toBe(12);
    });

    it('keeps the nonces of signed transactions that are not tracked yet', () => {
      (transactionsSliceSelector as jest.Mock).mockReturnValue({});
      reserveNonces('erd1address', [12, 13]);

      const apiAccount = { nonce: 12, address: 'erd1address' } as AccountType;

      expect(getLatestNonce(apiAccount)).toBe(14);
    });

    it('keeps the nonces of transactions still being tracked', () => {
      (transactionsSliceSelector as jest.Mock).mockReturnValue({
        1: {
          status: 'sent',
          transactions: [{ nonce: 14, status: 'pending' }]
        }
      });

      expect(getReconciledNonce({ nonce: 12 } as AccountType, {} as any)).toBe(
        15
      );
    });
  });
});
