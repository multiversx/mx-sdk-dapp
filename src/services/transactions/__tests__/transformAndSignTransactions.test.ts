import { Transaction } from '@multiversx/sdk-core';
import { newTransaction } from 'models/newTransaction';
import * as accountUtils from 'utils/account/getAccount';
import * as nonceUtils from 'utils/account/getLatestNonce';
import { transformAndSignTransactions } from '../transformAndSignTransactions';

jest.mock('@multiversx/sdk-core', () => {
  const originalModule = jest.requireActual('@multiversx/sdk-core');

  return {
    ...originalModule,
    Address: jest.fn().mockImplementation((address) => ({
      toHex: jest.fn().mockReturnValue(address),
      hex: jest.fn().mockReturnValue(address)
    }))
  };
});

jest.mock('reduxStore/store', () => ({
  store: {
    getState: jest.fn(() => ({}))
  }
}));

jest.mock('reduxStore/selectors', () => ({
  addressSelector: jest.fn(() => 'erd1sender'),
  chainIDSelector: jest.fn(() => ({ valueOf: () => 'T' }))
}));

jest.mock('utils/account/getAccount', () => ({
  getAccount: jest.fn()
}));

jest.mock('utils/account/getLatestNonce', () => ({
  getLatestNonce: jest.fn()
}));

jest.mock('models/newTransaction', () => ({
  newTransaction: jest.fn()
}));

describe('transformAndSignTransactions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (accountUtils.getAccount as jest.Mock).mockResolvedValue({ nonce: 5 });
    (nonceUtils.getLatestNonce as jest.Mock).mockReturnValue(5);
  });

  it('should transform simple transactions to Transaction objects', async () => {
    const simpleTransaction = {
      value: '100',
      receiver: 'erd1receiver',
      data: 'test-data',
      gasPrice: 1000000000,
      gasLimit: 50000,
      chainID: 'T'
    };

    const mockTransaction = {
      id: 'mock-transaction'
    } as unknown as Transaction;
    (newTransaction as jest.Mock).mockReturnValue(mockTransaction);

    const result = await transformAndSignTransactions({
      transactions: [simpleTransaction]
    });

    expect(result).toEqual([mockTransaction]);
    expect(newTransaction).toHaveBeenCalledWith(
      expect.objectContaining({
        value: simpleTransaction.value,
        receiver: simpleTransaction.receiver,
        data: simpleTransaction.data,
        gasPrice: simpleTransaction.gasPrice,
        gasLimit: simpleTransaction.gasLimit,
        chainID: simpleTransaction.chainID,
        nonce: 5
      })
    );
  });

  it('should include relayer information when present', async () => {
    const transactionWithRelayer = {
      value: '100',
      receiver: 'erd1receiver',
      data: 'test-data',
      gasPrice: 1000000000,
      gasLimit: 50000,
      chainID: 'T',
      relayer: 'erd1relayer',
      relayerSignature: 'signature123'
    };

    const mockTransaction = {
      id: 'mock-transaction-with-relayer'
    } as unknown as Transaction;
    (newTransaction as jest.Mock).mockReturnValue(mockTransaction);

    const result = await transformAndSignTransactions({
      transactions: [transactionWithRelayer]
    });

    expect(result).toEqual([mockTransaction]);
    expect(newTransaction).toHaveBeenCalledWith(
      expect.objectContaining({
        value: transactionWithRelayer.value,
        receiver: transactionWithRelayer.receiver,
        data: transactionWithRelayer.data,
        relayer: transactionWithRelayer.relayer,
        relayerSignature: transactionWithRelayer.relayerSignature
      })
    );
  });
});
