import { pendingTransactionsSessionsSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { checkBatch } from './checkBatch';

export async function checkTransactionStatus() {
  const pendingSessions = pendingTransactionsSessionsSelector(getState());

  const entries = Object.entries(pendingSessions);
  if (entries.length === 0) {
    return;
  }

  await Promise.all(
    entries.map(([sessionId, { transactions }]) =>
      checkBatch({
        sessionId,
        transactionBatch: transactions
      })
    )
  );
}
