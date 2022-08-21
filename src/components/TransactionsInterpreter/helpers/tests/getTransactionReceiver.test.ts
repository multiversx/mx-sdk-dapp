import { getTransactionReceiver } from '../getTransactionReceiver';
import { TransactionType, TxActionCategoryEnum, TxActionsEnum } from '../types';
import { baseTransactionMock } from './base-transaction-mock';

describe('getTransactionReceiver', () => {
  it('returns receiver address from transaction body', () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      receiver: 'receiver-hash'
    };

    const result = getTransactionReceiver(transaction);

    expect(result).toEqual(transaction.receiver);
  });

  it('returns receiver address from the transaction action arguments if exists', () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      action: {
        category: TxActionCategoryEnum.esdtNft,
        name: TxActionsEnum.transfer,
        arguments: {
          receiver: 'receiver-hash'
        }
      }
    };

    const result = getTransactionReceiver(transaction);

    expect(result).toEqual(transaction.action?.arguments?.receiver);
  });
});
