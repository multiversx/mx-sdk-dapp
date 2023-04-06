import { createDeepEqualSelector } from 'reduxStore/selectors/helpers';
import {
  defaultBatchTransactionErrorMessage,
  defaultBatchTransactionProcessingMessage,
  defaultBatchTransactionSuccessMessage
} from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';
import { TransactionsDisplayInfoType } from 'types';

const defaultBatchTransactionInfo: TransactionsDisplayInfoType = {
  errorMessage: defaultBatchTransactionErrorMessage,
  successMessage: defaultBatchTransactionSuccessMessage,
  processingMessage: defaultBatchTransactionProcessingMessage
};

export const batchTransactionsInfoSelectors = (state: RootState) =>
  state.batchTransactionsInfo;

export const batchTransactionDisplayInfoSelector = createDeepEqualSelector(
  batchTransactionsInfoSelectors,
  (_: RootState, transactionSessionId: string | null) => transactionSessionId,
  (
    transactionsBatchDisplayInfo: TransactionsDisplayInfoType,
    transactionsBatchId: string | null
  ) =>
    transactionsBatchId != null
      ? transactionsBatchDisplayInfo?.[Number(transactionsBatchId)] ||
        defaultBatchTransactionInfo
      : defaultBatchTransactionInfo
);
