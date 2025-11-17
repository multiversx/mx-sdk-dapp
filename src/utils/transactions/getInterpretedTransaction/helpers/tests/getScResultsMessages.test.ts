import {
  ResultType,
  ServerTransactionType
} from 'types/serverTransactions.types';
import { getScResultsMessages } from '../getScResultsMessages';
import { baseTransactionMock } from './baseTransactionMock';

describe('getScResultsMessages', () => {
  it('receive empty array if no results exists on the transaction', () => {
    const result = getScResultsMessages(baseTransactionMock);

    expect(result).toEqual([]);
  });

  it('receive an array with all results messages', () => {
    const baseTransactionResult = {
      callType: '',
      value: '1',
      gasLimit: 100,
      gasPrice: 0.001,
      hash: 'tx-hash',
      nonce: 0,
      sender: 'sender-hash',
      originalTxHash: 'original-tx-hash',
      prevTxHash: 'prev-tx-hash'
    } as ResultType;

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      results: [
        {
          ...baseTransactionResult,
          returnMessage: 'message 0'
        },
        {
          ...baseTransactionResult,
          returnMessage: 'message 1'
        }
      ] as ResultType[]
    };

    const result = getScResultsMessages(transaction);

    expect(result).toEqual(['message 0', 'message 1']);
  });
});
