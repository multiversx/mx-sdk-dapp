import { mockPendingTransaction } from '__mocks__/data/mockPendingTransaction';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import {
  SessionTransactionType,
  SignedTransactionType
} from 'types/transactions.types';

export const mockTransactionSession = {
  transactions: [mockPendingTransaction as SignedTransactionType],
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
