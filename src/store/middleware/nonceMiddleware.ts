import { StoreType } from 'store/store.types';
import { TransactionBatchStatusesEnum } from 'types/enums.types';

const unsuccessfulSessionStatuses: Array<string | undefined> = [
  TransactionBatchStatusesEnum.fail,
  TransactionBatchStatusesEnum.invalid,
  TransactionBatchStatusesEnum.timedOut,
  TransactionBatchStatusesEnum.cancelled
];

export const nonceMiddleware = (state: StoreType, prevState: StoreType) => {
  if (state.transactions === prevState?.transactions) {
    return;
  }

  const hasNewlyUnsuccessfulSession = Object.entries(
    state.transactions ?? {}
  ).some(
    ([sessionId, session]) =>
      unsuccessfulSessionStatuses.includes(session.status) &&
      prevState?.transactions?.[sessionId]?.status !== session.status
  );

  if (!hasNewlyUnsuccessfulSession) {
    return;
  }

  import('utils/account/reconcileAccountNonce')
    .then(({ reconcileAccountNonce }) => reconcileAccountNonce())
    .catch((error) =>
      console.error('Failed reconciling the account nonce', error)
    );
};
