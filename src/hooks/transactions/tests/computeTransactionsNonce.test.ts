import { GAS_LIMIT, GAS_PRICE } from 'constants/index';
import { newTransaction } from 'models/newTransaction';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { computeTransactionsNonce } from '../helpers/computeTransactionsNonce';

const mockedTransactions = [
  {
    nonce: 0,
    hash: '5996572de1fc5df2c456602467e8cc1a446b8145ae79df8f6c670e0732ab3b04',
    status: TransactionServerStatusesEnum.pending,
    value: '10',
    receiver: 'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk',
    sender: 'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk',
    data: '',
    chainID: 'D',
    version: 1,
    gasPrice: GAS_PRICE,
    gasLimit: GAS_LIMIT
  },
  {
    nonce: 0,
    hash: '8970fe5f5548caa994e495798ee1874b07f4ac2156d6a3a9636f450211350784',
    status: TransactionServerStatusesEnum.fail,
    value: '10',
    receiver: 'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk',
    sender: 'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk',
    data: '',
    chainID: 'D',
    version: 1,
    gasPrice: GAS_PRICE,
    gasLimit: GAS_LIMIT
  },
  {
    nonce: 0,
    hash: 'd4d84be4aa09cf5d45f79ffed87c971e5d883e7581d31e00d585f65b2da0564d',
    status: TransactionServerStatusesEnum.pending,
    value: '10',
    receiver: 'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk',
    sender: 'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk',
    data: '',
    chainID: 'D',
    version: 1,
    gasPrice: GAS_PRICE,
    gasLimit: GAS_LIMIT
  }
];

describe('computeTransactionsNonce', () => {
  it('should return empty array if transactions array is empty', () => {
    const latestNonce = 123;

    const result = computeTransactionsNonce({
      latestNonce,
      transactions: []
    });

    expect(result).toEqual([]);
  });

  it('should set nonces correctly for non-empty transactions array', () => {
    const latestNonce = 123;
    const transactions = mockedTransactions.map((tx) => {
      tx.nonce = 0;
      const newTx = newTransaction(tx);
      return newTx;
    });

    const result = computeTransactionsNonce({
      latestNonce,
      transactions
    });

    expect(result).toEqual(transactions);
  });

  it('should handle transactions with higher nonces correctly', () => {
    const latestNonce = 123;

    const transactions = mockedTransactions.map((tx, i) => {
      tx.nonce = 125 + i;
      const newTx = newTransaction(tx);
      return newTx;
    });

    const result = computeTransactionsNonce({
      latestNonce,
      transactions
    });

    expect(result).toEqual(transactions);
  });
});
