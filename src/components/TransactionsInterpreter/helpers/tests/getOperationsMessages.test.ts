import {
  OperationType,
  TransactionOperationActionType,
  VisibleTransactionOperationType
} from 'types/server-transations';
import { getOperationsMessages } from '../getOperationsMessages';
import { baseTransactionMock } from './base-transaction-mock';

describe('getOperationsMessages', () => {
  it('receive empty array if no operations messages exists on the transaction', () => {
    const result = getOperationsMessages(baseTransactionMock);

    expect(result).toEqual([]);
  });

  it('receive an array with all operations messages', () => {
    const baseTransactionOperation = {
      name: 'send',
      type: VisibleTransactionOperationType.egld,
      action: TransactionOperationActionType.transfer,
      esdtType: 'FungibleESDT',
      receiver:
        'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
      sender: 'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
      value: '1',
      decimals: 4,
      identifier: 'EGLD'
    };

    const transaction = {
      ...baseTransactionMock,
      operations: [
        {
          ...baseTransactionOperation,
          message: 'message 0'
        },
        {
          ...baseTransactionOperation,
          message: 'message 1'
        }
      ] as OperationType[]
    };

    const result = getOperationsMessages(transaction);

    expect(result).toEqual(['message 0', 'message 1']);
  });
});
