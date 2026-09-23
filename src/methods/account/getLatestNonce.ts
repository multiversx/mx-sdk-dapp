import {
  accountNonceSelector,
  addressSelector
} from 'store/selectors/accountSelectors';
import { transactionsSliceSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { StoreType } from 'store/store.types';
import { AccountType } from 'types/account.types';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  getNextReservedNonce,
  NONCE_RESERVATION_LIFETIME_MS
} from 'utils/account/nonceReservations';

const executedStatuses: Array<string | undefined> = [
  TransactionServerStatusesEnum.success,
  TransactionServerStatusesEnum.fail,
  TransactionServerStatusesEnum.executed
];

const pendingSessionStatuses: Array<string | undefined> = [
  TransactionBatchStatusesEnum.signed,
  TransactionBatchStatusesEnum.sent
];

const getIsRecentSession = (sessionId: string) =>
  Date.now() - Number(sessionId) < NONCE_RESERVATION_LIFETIME_MS;

const getNextSessionNonce = (state: StoreType, address?: string) => {
  const sessions = Object.entries(transactionsSliceSelector(state));

  const highestNonce = sessions.reduce((highest, [sessionId, session]) => {
    const isSessionPending = pendingSessionStatuses.includes(session.status);
    const isSessionTimedOut =
      session.status === TransactionBatchStatusesEnum.timedOut;

    return (session.transactions ?? []).reduce((sessionHighest, tx) => {
      if (tx.sender !== address) {
        return sessionHighest;
      }

      const isPending = tx.status === TransactionServerStatusesEnum.pending;

      // a timed out transaction may still execute
      const isTimedOut =
        tx.status === TransactionBatchStatusesEnum.timedOut ||
        (isSessionTimedOut && isPending);

      const isTaken =
        executedStatuses.includes(tx.status) ||
        (isSessionPending && isPending) ||
        (isTimedOut && getIsRecentSession(sessionId));

      return isTaken ? Math.max(sessionHighest, tx.nonce + 1) : sessionHighest;
    }, highest);
  }, 0);

  return highestNonce;
};

export function getReconciledNonce(
  apiAccount: AccountType,
  state = getState()
) {
  return Math.max(
    apiAccount.nonce,
    getNextSessionNonce(state, apiAccount.address),
    getNextReservedNonce(apiAccount.address)
  );
}

export function getLatestNonce(apiAccount: AccountType | null) {
  const state = getState();

  if (apiAccount == null) {
    return Math.max(
      getNextSessionNonce(state, addressSelector(state)),
      accountNonceSelector(state)
    );
  }

  return getReconciledNonce(apiAccount, state);
}
