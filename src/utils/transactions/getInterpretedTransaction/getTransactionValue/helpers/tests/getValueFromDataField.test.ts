import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { TransactionActionsEnum } from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromDataField } from '../getValueFromDataField';

jest.mock('../getEgldValueData', () => ({
  getEgldValueData: jest.fn()
}));

jest.mock('utils/decoders/base64Utils', () => ({
  decodeBase64: jest.fn()
}));

const { getEgldValueData: mockGetEgldValueData } = jest.requireMock(
  '../getEgldValueData'
) as {
  getEgldValueData: jest.Mock;
};

const { decodeBase64: mockDecodeBase64 } = jest.requireMock(
  'utils/decoders/base64Utils'
) as {
  decodeBase64: jest.Mock;
};

describe('getValueFromDataField tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('extracts and returns value from data field', () => {
    const mockValue = { egldValueData: { value: '1000' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockDecodeBase64.mockReturnValue('transfer@0de0b6b3a7640000');
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      action: {
        name: TransactionActionsEnum.transfer
      },
      data: 'dHJhbnNmZXJAMGRlMGI2YjNhNzY0MDAwMA=='
    };

    const result = getValueFromDataField(transaction);

    expect(mockDecodeBase64).toHaveBeenCalledWith(transaction.data);
    expect(mockGetEgldValueData).toHaveBeenCalledWith('1000000000000000000');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value on error', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockDecodeBase64.mockImplementation(() => {
      throw new Error('Decode error');
    });
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      data: 'invalid'
    };

    const result = getValueFromDataField(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('falls back to transaction value when decoded value is NaN', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockDecodeBase64.mockReturnValue('transfer@invalidhex');
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer
      },
      data: 'dHJhbnNmZXJAbm90aGV4'
    };

    const result = getValueFromDataField(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('handles missing action name in data field', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockDecodeBase64.mockReturnValue('0de0b6b3a7640000');
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer
      },
      data: 'MGRlMGI2YjNhNzY0MDAwMA=='
    };

    const result = getValueFromDataField(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });

  it('handles undefined action', () => {
    const mockValue = { egldValueData: { value: '1234' } };
    mockGetEgldValueData.mockReturnValue(mockValue);
    mockDecodeBase64.mockReturnValue('some-data');
    const transaction: InterpretedTransactionType = {
      ...baseTransactionMock,
      value: '1234',
      action: undefined,
      data: 'c29tZS1kYXRh'
    };

    const result = getValueFromDataField(transaction);

    expect(mockGetEgldValueData).toHaveBeenCalledWith('1234');
    expect(result).toBe(mockValue);
  });
});
