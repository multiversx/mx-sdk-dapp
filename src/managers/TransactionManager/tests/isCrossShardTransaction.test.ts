import { Address } from '@multiversx/sdk-core';
import { getShardOfAddress } from '../helpers/getShardOfAddress';
import {
  isCrossShardTransaction,
  IsCrossShardTransactionPropsType
} from '../helpers/isCrossShardTransaction';

jest.mock('@multiversx/sdk-core/out', () => ({
  Address: jest.fn().mockImplementation((address: string) => ({
    pubkey: jest.fn().mockReturnValue(address)
  }))
}));

jest.mock('../helpers/getShardOfAddress', () => ({
  getShardOfAddress: jest.fn()
}));

describe('isCrossShardTransaction', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return false if receiver and sender are in the same shard', () => {
    const props: IsCrossShardTransactionPropsType = {
      receiverAddress:
        'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt',
      senderShard: 1
    };
    (getShardOfAddress as jest.Mock).mockReturnValue(1);

    const result = isCrossShardTransaction(props);

    expect(result).toBe(false);
    expect(Address).toHaveBeenCalledWith(
      'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt'
    );
    expect(getShardOfAddress).toHaveBeenCalledWith(
      'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt'
    );
  });

  it('should return true if receiver and sender are in different shards', () => {
    const props: IsCrossShardTransactionPropsType = {
      receiverAddress:
        'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2',
      senderShard: 1
    };
    (getShardOfAddress as jest.Mock).mockReturnValue(2);

    const result = isCrossShardTransaction(props);

    expect(result).toBe(true);
    expect(Address).toHaveBeenCalledWith(
      'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2'
    );
    expect(getShardOfAddress).toHaveBeenCalledWith(
      'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2'
    );
  });

  it('should return false if senderAddress is provided and addresses are same shard', () => {
    const props: IsCrossShardTransactionPropsType = {
      receiverAddress:
        'erd17rp8l3waauynrhtw0233qf3kcwxxv9e8c0yhkk5l72jrndjm9j4qe275zx',
      senderAddress:
        'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2'
    };
    (getShardOfAddress as jest.Mock).mockReturnValue(2);

    const result = isCrossShardTransaction(props);

    expect(result).toBe(false);
    expect(Address).toHaveBeenCalledWith(
      'erd17rp8l3waauynrhtw0233qf3kcwxxv9e8c0yhkk5l72jrndjm9j4qe275zx'
    );
    expect(Address).toHaveBeenCalledWith(
      'erd17rp8l3waauynrhtw0233qf3kcwxxv9e8c0yhkk5l72jrndjm9j4qe275zx'
    );
  });

  it('should return true if senderAddress is provided and addresses are in different shards', () => {
    const props: IsCrossShardTransactionPropsType = {
      receiverAddress:
        'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt',
      senderAddress:
        'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2'
    };
    (getShardOfAddress as jest.Mock).mockImplementation((address: string) => {
      if (
        address ===
        'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt'
      ) {
        return 1;
      }
      if (
        address ===
        'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2'
      ) {
        return 2;
      }
      return 0;
    });

    const result = isCrossShardTransaction(props);

    expect(result).toBe(true);
    expect(Address).toHaveBeenCalledWith(
      'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt'
    );
    expect(Address).toHaveBeenCalledWith(
      'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt'
    );
    expect(getShardOfAddress).toHaveBeenCalledWith(
      'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt'
    );
    expect(getShardOfAddress).toHaveBeenCalledWith(
      'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2'
    );
  });

  it('should return false if an error is thrown', () => {
    const props: IsCrossShardTransactionPropsType = {
      receiverAddress: 'invalidAddress',
      senderShard: 1
    };
    (Address as unknown as jest.Mock).mockImplementation(() => {
      throw new Error('Invalid address');
    });

    const result = isCrossShardTransaction(props);

    expect(result).toBe(false);
  });
});
