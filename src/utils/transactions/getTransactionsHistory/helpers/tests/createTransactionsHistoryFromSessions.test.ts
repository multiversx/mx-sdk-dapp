import { SignedTransactionType } from 'types/transactions.types';
import { createTransactionsHistoryFromSessions } from '../createTransactionsHistoryFromSessions';

describe('createTransactionsHistoryFromSessions', () => {
  it('should return empty array for empty sessions', () => {
    const result = createTransactionsHistoryFromSessions({});
    expect(result).toEqual([]);
  });

  it('should sort sessions by key in descending order and merge transactions', () => {
    const mockTransaction1: SignedTransactionType = {
      hash: 'hash1'
    } as SignedTransactionType;

    const mockTransaction2: SignedTransactionType = {
      hash: 'hash2'
    } as SignedTransactionType;

    const mockTransaction3: SignedTransactionType = {
      hash: 'hash3'
    } as SignedTransactionType;

    const sessions = {
      '1': { transactions: [mockTransaction1] },
      '3': { transactions: [mockTransaction3] },
      '2': { transactions: [mockTransaction2] }
    };

    const result = createTransactionsHistoryFromSessions(sessions);

    expect(result).toEqual([
      mockTransaction3,
      mockTransaction2,
      mockTransaction1
    ]);
  });

  it('should handle sessions without transactions', () => {
    const mockTransaction: SignedTransactionType = {
      hash: 'hash1'
    } as SignedTransactionType;

    const sessions = {
      '1': { transactions: [mockTransaction] },
      '2': { transactions: [] },
      '3': { transactions: [] }
    };

    const result = createTransactionsHistoryFromSessions(sessions);

    expect(result).toEqual([mockTransaction]);
  });
});
