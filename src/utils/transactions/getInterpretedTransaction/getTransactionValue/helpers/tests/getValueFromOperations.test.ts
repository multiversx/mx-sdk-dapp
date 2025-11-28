import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { VisibleTransactionOperationType } from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromOperations } from '../getValueFromOperations';

const createTransaction = (
  overrides: Partial<InterpretedTransactionType> = {}
): InterpretedTransactionType => {
  return {
    ...baseTransactionMock,
    ...overrides
  } as unknown as InterpretedTransactionType;
};

const createVisibleOperation = (value: string) =>
  ({
    type: VisibleTransactionOperationType.egld,
    value
  }) as any;

describe('getValueFromOperations tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns value from first visible operation', () => {
    const operation = createVisibleOperation('1000');
    const transaction = createTransaction({
      operations: [operation]
    });

    const result = getValueFromOperations(transaction);

    expect(result.egldValueData.value).toBe('1000');
    expect(result.egldValueData.formattedValue).toBeTruthy();
    expect(result.egldValueData.decimals).toBeTruthy();
  });

  it('falls back to transaction value when operations are missing', () => {
    const transaction = createTransaction({
      value: '1234',
      operations: undefined
    });

    const result = getValueFromOperations(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when visible operations are empty', () => {
    const transaction = createTransaction({
      value: '1234',
      operations: [
        {
          type: 'non-visible',
          value: '1000'
        } as any
      ]
    });

    const result = getValueFromOperations(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when operation value is undefined', () => {
    const operation = createVisibleOperation(undefined as any);
    const transaction = createTransaction({
      value: '1234',
      operations: [operation]
    });

    const result = getValueFromOperations(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });
});
