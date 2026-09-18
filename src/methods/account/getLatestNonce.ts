import { accountNonceSelector } from '../../store/selectors/accountSelectors';
import { transactionsSliceSelector } from '../../store/selectors/transactionsSelector';
import { getState } from '../../store/store';
import { StoreType } from '../../store/store.types';
import { AccountType } from '../../types/account.types';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from '../../types/enums.types';

const executedStatuses: Array<string | undefined> = [
  TransactionServerStatusesEnum.success,
  TransactionServerStatusesEnum.fail,
  TransactionServerStatusesEnum.executed
];

const pendingSessionStatuses: Array<string | undefined> = [
  TransactionBatchStatusesEnum.signed,
  TransactionBatchStatusesEnum.sent
];

const getNextSessionNonce = (state: StoreType) => {
  const sessions = Object.values(transactionsSliceSelector(state));

  const highestNonce = sessions.reduce((highest, session) => {
    const isSessionPending = pendingSessionStatuses.includes(session.status);

    return (session.transactions ?? []).reduce((sessionHighest, tx) => {
      const isTaken =
        executedStatuses.includes(tx.status) ||
        (isSessionPending &&
          tx.status === TransactionServerStatusesEnum.pending);

      return isTaken ? Math.max(sessionHighest, tx.nonce + 1) : sessionHighest;
    }, highest);
  }, 0);

  return highestNonce;
};

export function getReconciledNonce(
  apiAccount: AccountType,
  state = getState()
) {
  return Math.max(apiAccount.nonce, getNextSessionNonce(state));
}

export function getLatestNonce(apiAccount: AccountType | null) {
  const state = getState();
  const currentAccountNonce = accountNonceSelector(state);

  if (apiAccount == null) {
    return Math.max(getNextSessionNonce(state), currentAccountNonce);
  }

  return Math.max(getReconciledNonce(apiAccount, state), currentAccountNonce);
}
