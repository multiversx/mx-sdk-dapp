import { account } from '__mocks__';
import { Transaction } from 'lib/sdkCore';

export const mockSignTransactionsInputData = {
  transactions: [
    Transaction.newFromPlainObject({
      nonce: 1345,
      value: '0',
      receiver: account.address,
      sender: account.address,
      gasPrice: 1000000000,
      gasLimit: 6000000,
      chainID: 'D',
      version: 1
    })
  ],
  address: account.address,
  shard: 1
};

export const mockOptionallyGuardedTransactions = [
  {
    nonce: 1345,
    value: '0',
    receiver: account.address,
    sender: account.address,
    gasPrice: 1000000000,
    gasLimit: 6000000,
    chainID: 'D',
    version: 1,
    signature:
      '342ff7cadbfe9d24746b17569b2c8a32c218f057efb8273c8cd0ce0fa0c86e4337378bb65d3819f9556109483c0d600c7e5907f5525ab3b4c53f4e9d3f0ca600'
  }
];
