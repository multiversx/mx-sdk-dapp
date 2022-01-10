import { createDeepEqualSelector } from 'redux/selectors/helpers';
import {
  defaultTransactionDuration,
  defaultTransactionErrorMessage,
  defaultTransactionProcessingMessage,
  defaultTransactionSuccessMessage
} from 'redux/slices';
import { RootState } from '../store';

const defaultTransactionInfo = {
  errorMessage: defaultTransactionErrorMessage,
  successMessage: defaultTransactionSuccessMessage,
  processingMessage: defaultTransactionProcessingMessage,
  transactionDuration: defaultTransactionDuration
};

export const transactionsInfoSelectors = (state: RootState) =>
  state.transactionsInfo;

export const transactionDisplayInfoSelector = createDeepEqualSelector(
  transactionsInfoSelectors,
  (_: RootState, transactionSessionId: string | null) => transactionSessionId,
  (transactionsDisplayInfo: any, transactionSessionId: string | null) =>
    transactionSessionId != null
      ? transactionsDisplayInfo?.[Number(transactionSessionId)] ||
        defaultTransactionInfo
      : defaultTransactionInfo
);
