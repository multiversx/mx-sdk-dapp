import { account } from '__mocks__';
import { Transaction } from 'lib/sdkCore';

export const mockPlainTransactionObject = {
  nonce: 1345,
  value: '0',
  receiver: account.address,
  sender: account.address,
  gasPrice: 1000000000,
  gasLimit: 6000000,
  chainID: 'D',
  version: 1
};

export const mockSignTransactionsInputData = {
  transactions: [Transaction.newFromPlainObject(mockPlainTransactionObject)],
  address: account.address,
  shard: 1
};
