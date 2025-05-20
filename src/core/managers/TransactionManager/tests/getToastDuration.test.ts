import {
  AVERAGE_TX_DURATION_MS,
  CROSS_SHARD_ROUNDS
} from 'constants/transactions.constants';
import { accountSelector } from 'store/selectors';
import { TransactionServerStatusesEnum } from 'types';
import { SignedTransactionType } from 'types/transactions.types';
import { getAreTransactionsCrossShards } from '../helpers/getAreTransactionsCorssShards';
import { getToastDuration } from '../helpers/getToastDuration';
import { isBatchTransaction } from '../helpers/isBatchTransaction';

const mockTransaction: SignedTransactionType = {
  hash: 'mockHash',
  status: TransactionServerStatusesEnum.pending,
  nonce: 1,
  value: '1000000000000000000',
  sender: 'erd1mockSender',
  receiver: 'erd1mockReceiver',
  gasLimit: 50000,
  gasPrice: 1000000000,
  data: '',
  chainID: 'D',
  version: 1
};

jest.mock('../helpers/getAreTransactionsCorssShards');
jest.mock('store/store', () => ({ getState: jest.fn() }));
jest.mock('store/selectors', () => ({ accountSelector: jest.fn() }));
jest.mock('../helpers/isBatchTransaction');

describe('getToastDuration', () => {
  const mockShard = 1;
  beforeEach(() => {
    jest.clearAllMocks();
    (accountSelector as jest.Mock).mockReturnValue({ shard: mockShard });
  });

  it('should return CROSS_SHARD_ROUNDS * AVERAGE_TX_DURATION_MS for a cross-shard transaction', () => {
    (isBatchTransaction as unknown as jest.Mock).mockReturnValue(false);
    (getAreTransactionsCrossShards as jest.Mock).mockReturnValue(true);

    const transactions = [mockTransaction];
    const duration = getToastDuration(transactions);

    expect(duration).toBe(CROSS_SHARD_ROUNDS * AVERAGE_TX_DURATION_MS);
  });

  it('should return AVERAGE_TX_DURATION_MS for a single same-shard transaction', () => {
    (isBatchTransaction as unknown as jest.Mock).mockReturnValue(false);
    (getAreTransactionsCrossShards as jest.Mock).mockReturnValue(false);

    const transactions = [mockTransaction];
    const duration = getToastDuration(transactions);

    expect(duration).toBe(AVERAGE_TX_DURATION_MS);
  });

  it('should return correct duration for batch transactions on the same shard', () => {
    (isBatchTransaction as unknown as jest.Mock).mockReturnValue(true);
    (getAreTransactionsCrossShards as jest.Mock).mockReturnValue(false);

    const transactions = [[mockTransaction], [mockTransaction]];
    const duration = getToastDuration(transactions);

    expect(duration).toBe(transactions.length * AVERAGE_TX_DURATION_MS);
  });

  it('should return correct duration for batch transactions with cross-shard', () => {
    (isBatchTransaction as unknown as jest.Mock).mockReturnValue(true);
    (getAreTransactionsCrossShards as jest.Mock).mockReturnValue(true);

    const transactions = [[mockTransaction], [mockTransaction]];
    const duration = getToastDuration(transactions);

    expect(duration).toBe(
      transactions.length * CROSS_SHARD_ROUNDS * AVERAGE_TX_DURATION_MS
    );
  });
});
