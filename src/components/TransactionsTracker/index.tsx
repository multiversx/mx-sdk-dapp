import React from 'react';
import { useGetPendingTransactions } from 'services/transactions';
import { SignedTransactionsBodyType } from 'types/transactions';
import TransactionStatusTracker from './TransactionStatusTracker';

export function TransactionsTracker({
  refetchTimestamp
}: {
  refetchTimestamp?: number;
}) {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  const mappedPendingTransactionsTrackers = pendingTransactionsArray.map(
    ([sessionId, transactionBatch]) => (
      <TransactionStatusTracker
        key={sessionId}
        sessionId={sessionId}
        refetchTimestamp={refetchTimestamp}
        transactionBatch={transactionBatch as SignedTransactionsBodyType}
      />
    )
  );

  return <React.Fragment>{mappedPendingTransactionsTrackers}</React.Fragment>;
}

export default TransactionsTracker;
