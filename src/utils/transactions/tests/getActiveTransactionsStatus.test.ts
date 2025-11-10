import {
  failedTransactionsSelector,
  pendingTransactionsSelector,
  successfulTransactionsSelector,
  timedOutTransactionsSelector
} from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { getActiveTransactionsStatus } from '../getActiveTransactionsStatus';

jest.mock('store/store');
jest.mock('store/selectors/transactionsSelector');

describe('getActiveTransactionsStatus tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    const state = {};
    const pendingTransactions = { tx1: { hash: 'hash1' } };
    const timedOutTransactions = {};
    const failedTransactions = {};
    const successfulTransactions = {};

    (getState as jest.Mock).mockReturnValue(state);
    (pendingTransactionsSelector as jest.Mock).mockReturnValue(
      pendingTransactions
    );
    (timedOutTransactionsSelector as jest.Mock).mockReturnValue(
      timedOutTransactions
    );
    (failedTransactionsSelector as jest.Mock).mockReturnValue(
      failedTransactions
    );
    (successfulTransactionsSelector as jest.Mock).mockReturnValue(
      successfulTransactions
    );
  });

  it('should return pending true when there are pending transactions', () => {
    const result = getActiveTransactionsStatus();

    expect(result).toEqual({
      pending: true,
      timedOut: false,
      fail: false,
      success: false
    });
  });
});
