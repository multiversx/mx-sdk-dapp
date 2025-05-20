import { accountNonceSelector } from 'store/selectors/accountSelectors';
import { transactionsSliceSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { AccountType } from 'types/account.types';
import { getLatestNonce } from '../getLatestNonce';

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
        transactions: [{ nonce: 10 }, { nonce: 15 }]
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
        transactions: [{ nonce: 10 }, { nonce: 15 }]
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
});
