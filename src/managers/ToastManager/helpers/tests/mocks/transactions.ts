import { testAddress } from '__mocks__/accountConfig';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import {
  SessionTransactionType,
  SignedTransactionType
} from 'types/transactions.types';

export const mockTransaction = {
  nonce: 17,
  value: '0',
  receiver: testAddress,
  sender: testAddress,
  gasPrice: 1000000000,
  gasLimit: 6000000,
  chainID: 'D',
  version: 1,
  signature:
    'e8e12f2c5432361b640068f8046819c02511e94cc139257dd1bf557368f4dafe7f446d0df2fe02e7f09358f84b0b2fce88b801a4eb3643ba85c989340bf7820a',
  txHash: 'txPending§§§7cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x',
  receiverShard: 0,
  senderShard: 0,
  status: 'success',
  hash: 'txPending§§§7cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x',
  invalidTransaction: false,
  results: [],
  previousStatus: 'pending',
  hasStatusChanged: true
};

export const mockTransactionSession = {
  transactions: [mockTransaction as SignedTransactionType],
  status: TransactionServerStatusesEnum.success,
  transactionsDisplayInfo: {
    processingMessage: 'Processing Self transaction',
    errorMessage: 'An error has occurred during Self',
    successMessage: 'Self transaction successful'
  },
  interpretedTransactions: {},
  errorMessage: 'An error has occurred during Self'
};

export const mockTransactionSlice: Record<string, SessionTransactionType> = {
  '1759393601910': mockTransactionSession
};
