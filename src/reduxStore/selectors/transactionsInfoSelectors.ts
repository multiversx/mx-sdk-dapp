import { createDeepEqualSelector } from 'reduxStore/selectors/helpers';
import {
  defaultTransactionErrorMessage,
  defaultTransactionProcessingMessage,
  defaultTransactionSuccessMessage,
  StateType
} from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';
import { TransactionsDisplayInfoType } from 'types';

const defaultTransactionInfo: TransactionsDisplayInfoType = {
  errorMessage: defaultTransactionErrorMessage,
  successMessage: defaultTransactionSuccessMessage,
  processingMessage: defaultTransactionProcessingMessage
};

export const transactionsInfoSelectors = (state: RootState) =>
  state.transactionsInfo;

export const transactionDisplayInfoSelector = createDeepEqualSelector(
  transactionsInfoSelectors,
  (_: RootState, transactionSessionId: string | null) => transactionSessionId,
  (transactionsDisplayInfo: StateType, transactionSessionId: string | null) =>
    transactionSessionId != null
      ? transactionsDisplayInfo?.[transactionSessionId] ||
        defaultTransactionInfo
      : defaultTransactionInfo
);
