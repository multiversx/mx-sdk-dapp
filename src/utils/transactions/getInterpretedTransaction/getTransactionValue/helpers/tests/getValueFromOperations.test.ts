import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { VisibleTransactionOperationType } from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromOperations } from '../getValueFromOperations';

jest.mock('../getEgldValueData', () => ({
  getEgldValueData: jest.fn()
}));

jest.mock('../getVisibleOperations', () => ({
  getVisibleOperations: jest.fn()
}));

const { getEgldValueData: mockGetEgldValueData } = jest.requireMock(
  '../getEgldValueData'
) as {
  getEgldValueData: jest.Mock;
};

const { getVisibleOperations: mockGetVisibleOperations } = jest.requireMock(
  '../getVisibleOperations'
) as {
  getVisibleOperations: jest.Mock;
};

describe('getValueFromOperations tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns value from first visible operation', () => {
    const mockValue = { egldValueData: { value: '1000' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const operation = {
      type: VisibleTransactionOperationType.egld,
      value: '1000'
    };
    mockGetVisibleOperations.mockReturnValue([operation]);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      operations: [operation]
    };

    const result = getValueFromOperations(transaction);

    expect(mockGetVisibleOperations).toHaveBeenCalledWith(transaction);
    expect(mockGetEgldValueData).toHaveBeenCalledWith('1000');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when operations are missing', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockGetVisibleOperations.mockReturnValue([]);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      operations: undefined
    };

    const result = getValueFromOperations(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when visible operations are empty', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockGetVisibleOperations.mockReturnValue([]);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      operations: [
        {
          type: 'non-visible',
          value: '1000'
        } as any
      ]
    };

    const result = getValueFromOperations(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when operation value is undefined', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const operation = {
      type: VisibleTransactionOperationType.egld,
      value: undefined
    };
    mockGetVisibleOperations.mockReturnValue([operation]);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      operations: [operation]
    };

    const result = getValueFromOperations(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value on error', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockGetVisibleOperations.mockImplementation(() => {
      throw new Error('Error getting operations');
    });
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      operations: []
    };

    const result = getValueFromOperations(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });
});
