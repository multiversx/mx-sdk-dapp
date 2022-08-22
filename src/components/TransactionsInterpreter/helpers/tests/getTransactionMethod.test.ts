import { getTransactionMethod } from '../getTransactionMethod';
import { TransactionType, TxActionCategoryEnum, TxActionsEnum } from '../types';
import { baseTransactionMock } from './base-transaction-mock';

describe('getTransactionMethod', () => {
  it('returns default value "Transaction" in case of missing "action" field ', () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      action: undefined
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual('Transaction');
  });

  it(`returns default value "Transaction" when the transaction is a "${TxActionsEnum.transfer}" and the action's category is "${TxActionCategoryEnum.esdtNft}"`, () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      action: {
        category: TxActionCategoryEnum.esdtNft,
        name: TxActionsEnum.transfer
      }
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual('Transaction');
  });

  it(`returns the transaction method read from the action field when the transaction is not a "${TxActionsEnum.transfer}" or the action's category is not "${TxActionCategoryEnum.esdtNft}"`, () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      action: {
        category: TxActionCategoryEnum.scCall,
        name: TxActionsEnum.claimRewards
      }
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual(transaction.action?.name);
  });

  it('overrides the transaction method when there is a transaction method defined on the action arguments', () => {
    const transaction: TransactionType = {
      ...baseTransactionMock,
      action: {
        category: TxActionCategoryEnum.scCall,
        name: TxActionsEnum.claimRewards,
        arguments: {
          functionName: 'customFunction'
        }
      }
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual(transaction.action?.arguments?.functionName);
  });
});
