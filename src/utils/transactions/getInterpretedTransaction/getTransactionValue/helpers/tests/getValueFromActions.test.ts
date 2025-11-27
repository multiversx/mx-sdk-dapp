import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  TransactionActionCategoryEnum,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromActions } from '../getValueFromActions';

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

describe('getValueFromActions tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns value from action arguments when valid', () => {
    const transaction = createTransaction({
      action: {
        ...baseAction,
        arguments: {
          value: '1000'
        }
      }
    });

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1000');
    expect(result.egldValueData.formattedValue).toBeTruthy();
    expect(result.egldValueData.decimals).toBeTruthy();
  });

  it('falls back to transaction value when action value is invalid', () => {
    const transaction = createTransaction({
      value: '1234',
      action: {
        ...baseAction,
        arguments: {
          value: 'invalid'
        }
      }
    });

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when action is undefined', () => {
    const transaction = createTransaction({
      value: '1234',
      action: undefined
    });

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when action arguments is undefined', () => {
    const transaction = createTransaction({
      value: '1234',
      action: baseAction
    });

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when action arguments value is undefined', () => {
    const transaction = createTransaction({
      value: '1234',
      action: {
        ...baseAction,
        arguments: {}
      }
    });

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });
});
