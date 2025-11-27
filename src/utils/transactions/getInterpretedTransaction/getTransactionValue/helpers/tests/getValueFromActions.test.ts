import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  TransactionActionCategoryEnum,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { baseTransactionMock } from '../../../helpers/tests/baseTransactionMock';
import { getValueFromActions } from '../getValueFromActions';

describe('getValueFromActions tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns value from action arguments when valid', () => {
    const transaction = {
      ...baseTransactionMock,
      action: {
        name: TransactionActionsEnum.transfer,
        category: TransactionActionCategoryEnum.scCall,
        arguments: {
          value: '1000'
        }
      }
    } as unknown as InterpretedTransactionType;

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1000');
    expect(result.egldValueData.formattedValue).toBeTruthy();
    expect(result.egldValueData.decimals).toBeTruthy();
  });

  it('falls back to transaction value when action value is invalid', () => {
    const transaction = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer,
        category: TransactionActionCategoryEnum.scCall,
        arguments: {
          value: 'invalid'
        }
      }
    } as unknown as InterpretedTransactionType;

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when action is undefined', () => {
    const transaction = {
      ...baseTransactionMock,
      value: '1234',
      action: undefined
    } as unknown as InterpretedTransactionType;

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when action arguments is undefined', () => {
    const transaction = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer,
        category: TransactionActionCategoryEnum.scCall
      }
    } as unknown as InterpretedTransactionType;

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });

  it('falls back to transaction value when action arguments value is undefined', () => {
    const transaction = {
      ...baseTransactionMock,
      value: '1234',
      action: {
        name: TransactionActionsEnum.transfer,
        category: TransactionActionCategoryEnum.scCall,
        arguments: {}
      }
    } as unknown as InterpretedTransactionType;

    const result = getValueFromActions(transaction);

    expect(result.egldValueData.value).toBe('1234');
    expect(result.egldValueData.formattedValue).toBeTruthy();
  });
});
