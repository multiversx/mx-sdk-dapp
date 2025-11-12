import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types';
import { SignedTransactionType } from 'types/transactions.types';
import { getAddressFromDataField } from 'utils/validation/isContract';
import { getAreTransactionsCrossShards } from '../helpers/getAreTransactionsCorssShards';
import { isCrossShardTransaction } from '../helpers/isCrossShardTransaction';

jest.mock('utils/validation/isContract', () => ({
  getAddressFromDataField: jest.fn()
}));

jest.mock('../helpers/isCrossShardTransaction', () => ({
  isCrossShardTransaction: jest.fn()
}));

describe('getAreTransactionsOnSameShard', () => {
  const mockGetAddressFromDataField = getAddressFromDataField as jest.Mock;
  const mockIsCrossShardTransaction = isCrossShardTransaction as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if no transactions are provided', () => {
    expect(getAreTransactionsCrossShards()).toBe(true);
  });

  it('should return true if transactions array is empty', () => {
    expect(getAreTransactionsCrossShards([])).toBe(true);
  });

  it('should return true if all transactions are on the same shard', () => {
    const transactions: SignedTransactionType[] = [
      {
        receiver:
          'erd1qqqqqqqqqqqqqpgq6d2ss380cvjhese43930hgzdx8quadm0zeusy9lclj',
        data: 'data1',
        hash: '',
        status: TransactionBatchStatusesEnum.signed,
        nonce: 0,
        value: '',
        sender: '',
        gasPrice: 0,
        gasLimit: 0,
        chainID: '',
        version: 0
      },
      {
        receiver:
          'erd1qqqqqqqqqqqqqpgq6d2ss380cvjhese43930hgzdx8quadm0zeusy9lclj',
        data: 'data2',
        hash: '',
        status: TransactionServerStatusesEnum.pending,
        nonce: 0,
        value: '',
        sender: '',
        gasPrice: 0,
        gasLimit: 0,
        chainID: '',
        version: 0
      }
    ];

    expect(getAreTransactionsCrossShards(transactions, 1)).toBe(true);
  });

  it('should return false if any transaction is not on the same shard', () => {
    const transactions: SignedTransactionType[] = [
      {
        receiver:
          'erd1qqqqqqqqqqqqqpgq6d2ss380cvjhese43930hgzdx8quadm0zeusy9lclj',
        data: 'data1',
        hash: '',
        status: TransactionBatchStatusesEnum.signed,
        nonce: 0,
        value: '',
        sender:
          'erd169achhjktctt8umfj3y2vy8490l5l0e7r9gqaekl9kc89pcwdnpqf2kn0s',
        gasPrice: 0,
        gasLimit: 0,
        chainID: '',
        version: 0
      },
      {
        receiver:
          'erd1qqqqqqqqqqqqqpgq6d2ss380cvjhese43930hgzdx8quadm0zeusy9lclj',
        data: 'data2',
        hash: '',
        status: TransactionServerStatusesEnum.pending,
        nonce: 0,
        value: '',
        sender:
          'erd169achhjktctt8umfj3y2vy8490l5l0e7r9gqaekl9kc89pcwdnpqf2kn0s',
        gasPrice: 0,
        gasLimit: 0,
        chainID: '',
        version: 0
      }
    ];

    mockGetAddressFromDataField.mockReturnValue('receiverAddress');
    mockIsCrossShardTransaction
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    expect(getAreTransactionsCrossShards(transactions, 1)).toBe(false);
  });

  it('should skip transactions with null receiverAddress', () => {
    const transactions: SignedTransactionType[] = [
      {
        receiver:
          'erd1qqqqqqqqqqqqqpgq6d2ss380cvjhese43930hgzdx8quadm0zeusy9lclj',
        data: 'data1',
        hash: '',
        status: TransactionServerStatusesEnum.pending,
        nonce: 0,
        value: '',
        sender:
          'erd169achhjktctt8umfj3y2vy8490l5l0e7r9gqaekl9kc89pcwdnpqf2kn0s',
        gasPrice: 0,
        gasLimit: 0,
        chainID: '',
        version: 0
      },
      {
        receiver:
          'erd1qqqqqqqqqqqqqpgq6d2ss380cvjhese43930hgzdx8quadm0zeusy9lclj',
        data: 'data2',
        hash: '',
        status: TransactionServerStatusesEnum.pending,
        nonce: 0,
        value: '',
        sender:
          'erd169achhjktctt8umfj3y2vy8490l5l0e7r9gqaekl9kc89pcwdnpqf2kn0s',
        gasPrice: 0,
        gasLimit: 0,
        chainID: '',
        version: 0
      }
    ];

    mockGetAddressFromDataField.mockReturnValue(null);

    expect(getAreTransactionsCrossShards(transactions, 2)).toBe(true);
  });
});
