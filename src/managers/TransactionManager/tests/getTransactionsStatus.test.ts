import {
  getIsTransactionFailed,
  getIsTransactionNotExecuted,
  getIsTransactionSuccessful
} from 'store/actions/transactions/transactionStateByStatus';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types';
import { SignedTransactionType } from 'types/transactions.types';
import { getTransactionsSessionStatus } from '../helpers/getTransactionsStatus';

jest.mock('store/actions/transactions/transactionStateByStatus');

describe('getTransactionsSessionStatus', () => {
  const mockTransactions: SignedTransactionType[] = [
    {
      status: TransactionServerStatusesEnum.success,
      hash: '',
      nonce: 0,
      value: '',
      receiver: '',
      sender: '',
      gasPrice: 0,
      gasLimit: 0,
      chainID: '',
      version: 0
    },
    {
      status: TransactionServerStatusesEnum.fail,
      hash: '',
      nonce: 0,
      value: '',
      receiver: '',
      sender: '',
      gasPrice: 0,
      gasLimit: 0,
      chainID: '',
      version: 0
    },
    {
      status: TransactionServerStatusesEnum.executed,
      hash: '',
      nonce: 0,
      value: '',
      receiver: '',
      sender: '',
      gasPrice: 0,
      gasLimit: 0,
      chainID: '',
      version: 0
    }
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return invalid if transactions array is empty', () => {
    const result = getTransactionsSessionStatus([]);
    expect(result).toBe(TransactionBatchStatusesEnum.invalid);
  });

  it('should return success if all transactions are successful', () => {
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(true);
    const result = getTransactionsSessionStatus(mockTransactions);
    expect(result).toBe(TransactionBatchStatusesEnum.success);
  });

  it('should return fail if any transaction has failed', () => {
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(false);
    (getIsTransactionFailed as jest.Mock).mockReturnValueOnce(true);
    const result = getTransactionsSessionStatus(mockTransactions);
    expect(result).toBe(TransactionBatchStatusesEnum.fail);
  });

  it('should return invalid if all transactions are not executed', () => {
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(false);
    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);
    (getIsTransactionNotExecuted as jest.Mock).mockReturnValue(true);
    const result = getTransactionsSessionStatus(mockTransactions);
    expect(result).toBe(TransactionBatchStatusesEnum.invalid);
  });

  it('should return null if transactions have mixed statuses', () => {
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(false);
    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);
    (getIsTransactionNotExecuted as jest.Mock).mockReturnValue(false);
    const result = getTransactionsSessionStatus(mockTransactions);
    expect(result).toBeNull();
  });
});
