import {
  ServerTransactionType,
  TransactionActionCategoryEnum,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { getTransactionMethod } from '../getTransactionMethod';
import { baseTransactionMock } from './base-transaction-mock';

describe('getTransactionMethod', () => {
  it('returns default value "Transaction" in case of missing "action" field', () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      action: undefined
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual('Transaction');
  });

  it(`returns default value "Transaction" when the transaction is a "${TransactionActionsEnum.transfer}" and the action's category is "${TransactionActionCategoryEnum.esdtNft}"`, () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      action: {
        category: TransactionActionCategoryEnum.esdtNft,
        name: TransactionActionsEnum.transfer
      }
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual('Transaction');
  });

  it(`returns the transaction method read from the action field when the transaction is not a "${TransactionActionsEnum.transfer}" or the action's category is not "${TransactionActionCategoryEnum.esdtNft}"`, () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      action: {
        category: TransactionActionCategoryEnum.scCall,
        name: TransactionActionsEnum.claimRewards
      }
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual(transaction.action?.name);
  });

  it('overrides the transaction method when there is a transaction method defined on the action arguments', () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      action: {
        category: TransactionActionCategoryEnum.scCall,
        name: TransactionActionsEnum.claimRewards,
        arguments: {
          functionName: 'customFunction'
        }
      }
    };

    const result = getTransactionMethod(transaction);

    expect(result).toEqual(transaction.action?.arguments?.functionName);
  });
});
