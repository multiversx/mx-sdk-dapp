import {
  ServerTransactionType,
  TransactionActionCategoryEnum,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { getTransactionReceiver } from '../getTransactionReceiver';
import { baseTransactionMock } from './baseTransactionMock';

describe('getTransactionReceiver', () => {
  it('returns receiver address from transaction body', () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      receiver: 'receiver-hash'
    };

    const result = getTransactionReceiver(transaction);

    expect(result).toEqual(transaction.receiver);
  });

  it('returns receiver address from the transaction action arguments if exists', () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      action: {
        category: TransactionActionCategoryEnum.esdtNft,
        name: TransactionActionsEnum.transfer,
        arguments: {
          receiver: 'receiver-hash'
        }
      }
    };

    const result = getTransactionReceiver(transaction);

    expect(result).toEqual(transaction.action?.arguments?.receiver);
  });
});
