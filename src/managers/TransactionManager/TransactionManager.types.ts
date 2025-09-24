import { CreateTransactionsSessionType } from 'store/actions/transactions/transactionsActions';
import { SessionCallbacksType } from './helpers/sessionCallbacks';

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
  /**
   * Callback to be executed when the specific session id is successful
   */
  onSuccess?: SessionCallbacksType['onSuccess'];
  /**
   * Callback to be executed when the specific session id is failed
   */
  onFail?: SessionCallbacksType['onFail'];
};
