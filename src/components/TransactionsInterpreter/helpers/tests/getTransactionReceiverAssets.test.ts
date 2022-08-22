import { getTransactionReceiverAssets } from '../getTransactionReceiverAssets';
import { TransactionType, TxActionCategoryEnum, TxActionsEnum } from '../types';
import { baseTransactionMock } from './base-transaction-mock';

describe('getTransactionReceiverAssets', () => {
  it('returns receiver assets', () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      receiver: 'receiver-hash',
      receiverAssets: {
        name: 'john doe',
        description: 'description',
        iconPng: 'icon.png',
        iconSvg: 'icon.svg',
        tags: ['@tag1', '@tag2']
      }
    };

    const result = getTransactionReceiverAssets(transaction);

    expect(result).toBe(transaction.receiverAssets);
  });

  it('returns "undefined" when the transaction receiver does not match the receiver address from the transaction action arguments', () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      receiver: 'receiver-hash',
      receiverAssets: {
        name: 'john doe',
        description: 'description',
        iconPng: 'icon.png',
        iconSvg: 'icon.svg',
        tags: ['@tag1', '@tag2']
      },
      action: {
        name: TxActionsEnum.transfer,
        category: TxActionCategoryEnum.scCall,
        arguments: {
          receiver: 'receiver-hash-from-action-arguments'
        }
      }
    };

    const result = getTransactionReceiverAssets(transaction);

    expect(result).toBeUndefined();
  });
});
