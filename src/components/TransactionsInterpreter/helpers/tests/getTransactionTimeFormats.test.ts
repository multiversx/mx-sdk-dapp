import { getTransactionTimeFormats } from '../getTransactionTimeFormats';
import { TransactionType } from '../types';
import { transactionMock } from './transaction-mock';

describe('parseTransactionTime', () => {
  it('returns an object containing short time format and long time format', () => {
    const transactions: TransactionType[] = [
      {
        ...transactionMock,
        timestamp: 1076
      },
      {
        ...transactionMock,
        timestamp: 3976
      }
    ];

    expect(
      getTransactionTimeFormats(transactions[0]).shortTimeAgo
    ).toBeDefined();
    expect(
      getTransactionTimeFormats(transactions[0]).longTimeAgo
    ).toBeDefined();
    expect(
      getTransactionTimeFormats(transactions[1]).shortTimeAgo
    ).toBeDefined();
    expect(
      getTransactionTimeFormats(transactions[1]).longTimeAgo
    ).toBeDefined();
  });

  it('computes and returns an object containing the short time format of the transaction timestamp', () => {
    const transactions: TransactionType[] = [
      {
        ...transactionMock,
        timestamp: 1076
      },
      {
        ...transactionMock,
        timestamp: 3976
      }
    ];
    const output = ['17 min', '1 hr'];

    expect(getTransactionTimeFormats(transactions[0]).shortTimeAgo).toEqual(
      output[0]
    );
    expect(getTransactionTimeFormats(transactions[1]).shortTimeAgo).toEqual(
      output[1]
    );
  });
  it('computes and returns an object containing the long time format of the transaction timestamp', () => {
    const transactions: TransactionType[] = [
      {
        ...transactionMock,
        timestamp: 1076
      },
      {
        ...transactionMock,
        timestamp: 3976
      }
    ];
    const output = ['17 min 56 sec', '1 hr 6 min'];

    expect(getTransactionTimeFormats(transactions[0]).longTimeAgo).toEqual(
      output[0]
    );
    expect(getTransactionTimeFormats(transactions[1]).longTimeAgo).toEqual(
      output[1]
    );
  });
});
