import {
  InterpretedTransactionType,
  VisibleTransactionOperationType
} from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getVisibleOperations } from '../getVisibleOperations';

const createTransaction = (
  overrides: Partial<InterpretedTransactionType> = {}
): InterpretedTransactionType => {
  return {
    ...baseTransactionMock,
    transactionDetails: {} as any,
    links: {} as any,
    ...overrides
  } as unknown as InterpretedTransactionType;
};

describe('getVisibleOperations tests', () => {
  it('returns empty array when operations are missing', () => {
    const transaction = createTransaction({
      operations: undefined
    });

    const result = getVisibleOperations(transaction);

    expect(result).toEqual([]);
  });

  it('filters and returns only visible operations', () => {
    const transaction = createTransaction({
      operations: [
        {
          type: VisibleTransactionOperationType.egld,
          value: '1000'
        } as any,
        {
          type: 'non-visible-type',
          value: '2000'
        } as any,
        {
          type: VisibleTransactionOperationType.esdt,
          value: '3000'
        } as any
      ]
    });

    const result = getVisibleOperations(transaction);

    expect(result).toHaveLength(2);
    expect(result[0].type).toBe(VisibleTransactionOperationType.egld);
    expect(result[1].type).toBe(VisibleTransactionOperationType.esdt);
  });
});
