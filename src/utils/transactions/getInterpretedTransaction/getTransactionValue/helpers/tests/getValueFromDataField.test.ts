import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  TransactionActionCategoryEnum,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromDataField } from '../getValueFromDataField';

const createTransaction = (
  overrides: Partial<InterpretedTransactionType> = {}
): InterpretedTransactionType => {
  return {
    ...baseTransactionMock,
    ...overrides
  } as unknown as InterpretedTransactionType;
};

const baseAction = {
  name: TransactionActionsEnum.transfer,
  category: TransactionActionCategoryEnum.scCall
};

describe('getValueFromDataField tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('extracts and returns value from data field', () => {
    const transaction = createTransaction({
      action: baseAction,
      data: 'dHJhbnNmZXJAMGRlMGI2YjNhNzY0MDAwMA==' // 'transfer@0de0b6b3a7640000' in base64
    });

    const result = getValueFromDataField(transaction);

    expect(result.egldValueData.value).toBe('1000000000000000000');
    expect(result.egldValueData.formattedValue).toBeTruthy();
    expect(result.egldValueData.decimals).toBeTruthy();
  });

  it('falls back to transaction value on error', () => {
    const transaction = createTransaction({
      value: '1234',
      data: 'invalid-base64'
    });

    const result = getValueFromDataField(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when decoded value is NaN', () => {
    const transaction = createTransaction({
      value: '1234',
      action: baseAction,
      data: 'dHJhbnNmZXJAbm90aGV4' // 'transfer@nothex' in base64
    });

    const result = getValueFromDataField(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('handles missing action name in data field', () => {
    const transaction = createTransaction({
      value: '1234',
      action: baseAction,
      data: 'MGRlMGI2YjNhNzY0MDAwMA==' // '0de0b6b3a7640000' in base64 (no action name prefix, but valid hex)
    });

    const result = getValueFromDataField(transaction);

    // When action name is missing but hex is valid, it still parses successfully
    expect(result.egldValueData.value).toBe('1000000000000000000');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('handles undefined action', () => {
    const transaction = createTransaction({
      value: '1234',
      action: undefined,
      data: 'c29tZS1kYXRh' // 'some-data' in base64
    });

    const result = getValueFromDataField(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });
});
