import {
  pendingSessionsByHashesSelector,
  pendingTransactionsSessionsSelector
} from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { checkBatch } from './helpers/checkBatch';

export interface CheckTransactionStatusPropsType {
  hashes?: string[];
}

export async function checkTransactionStatus(
  props: CheckTransactionStatusPropsType = {}
) {
  const { hashes } = props;
  const state = getState();

  const pendingSessions =
    hashes == null
      ? pendingTransactionsSessionsSelector(state)
      : pendingSessionsByHashesSelector(hashes)(state);

  const entries = Object.entries(pendingSessions);
  if (entries.length === 0) {
    return;
  }

  await Promise.all(
    entries.map(([sessionId, { transactions }]) =>
      checkBatch({
        sessionId,
        transactionBatch: transactions,
        hashes
      })
    )
  );
}
