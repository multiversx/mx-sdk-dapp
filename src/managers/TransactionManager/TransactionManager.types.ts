import { CreateTransactionsSessionType } from 'store/actions/transactions/transactionsActions';

export type TransactionManagerTrackOptionsType = {
  disableToasts?: boolean;
  /**
   * Optional custom information to be displayed in the toast notification.
   */
  transactionsDisplayInfo?: CreateTransactionsSessionType['transactionsDisplayInfo'];
  /**
   * Optional custom information to be associated with the transaction session.
   */
  sessionInformation?: CreateTransactionsSessionType['sessionInformation'];
};
