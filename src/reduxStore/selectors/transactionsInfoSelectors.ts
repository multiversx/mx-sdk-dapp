import { createDeepEqualSelector } from 'reduxStore/selectors/helpers';
import {
  defaultTransactionErrorMessage,
  defaultTransactionProcessingMessage,
  defaultTransactionSuccessMessage
} from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';

const defaultTransactionInfo = {
  errorMessage: defaultTransactionErrorMessage,
  successMessage: defaultTransactionSuccessMessage,
  processingMessage: defaultTransactionProcessingMessage
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
