import { getTransactionTokens } from '../getTransactionTokens';
import { TransactionType, TxActionCategoryEnum, TxActionsEnum } from '../types';
import { transactionMock } from './transaction-mock';

describe('getTransactionTokens', () => {
  it('returns empty array when the transaction action details are missing', () => {
    const transaction: TransactionType = {
      ...transactionMock,
      action: undefined
    };

    const result = getTransactionTokens(transaction);

    expect(result).toEqual([]);
  });

  it('returns an array with all existing tokens in the action arguments', () => {
    const transaction: TransactionType = {
      ...transactionMock,
      action: {
        name: TxActionsEnum.transfer,
        category: TxActionCategoryEnum.scCall,
        arguments: {
          token: 'token',
          token1: 'token1',
          token2: 'token2',
          transfers: 'transfers',
          null: null,
          undefined: undefined
        }
      }
    };

    const result = getTransactionTokens(transaction);

    expect(result).toEqual(
      [
        transaction.action?.arguments?.token,
        transaction.action?.arguments?.token1,
        transaction.action?.arguments?.token2,
        transaction.action?.arguments?.transfers
      ].filter((x) => x != null)
    );
  });
});
