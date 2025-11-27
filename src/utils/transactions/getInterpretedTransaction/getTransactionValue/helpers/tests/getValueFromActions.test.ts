import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { TransactionActionsEnum } from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromActions } from '../getValueFromActions';

jest.mock('../getEgldValueData', () => ({
  getEgldValueData: jest.fn()
}));

const { getEgldValueData: mockGetEgldValueData } = jest.requireMock(
  '../getEgldValueData'
) as {
  getEgldValueData: jest.Mock;
};

describe('getValueFromActions tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns value from action arguments when valid', () => {
    const mockValue = { egldValueData: { value: '1000' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      action: {
        name: TransactionActionsEnum.transfer,
        arguments: {
          value: '1000'
        }
      }
    };

    const result = getValueFromActions(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1000');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when action value is invalid', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer,
        arguments: {
          value: 'invalid'
        }
      }
    };

    const result = getValueFromActions(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when action is undefined', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: undefined
    };

    const result = getValueFromActions(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when action arguments is undefined', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer
      }
    };

    const result = getValueFromActions(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when action arguments value is undefined', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer,
        arguments: {}
      }
    };

    const result = getValueFromActions(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });
});
