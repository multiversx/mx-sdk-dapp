import React from 'react';
import { useGetPendingTransactions } from 'services/transactions';
import { SignedTransactionsBodyType } from 'types/transactions';
import TransactionStatusTracker from './TransactionStatusTracker';

export function TransactionsTracker() {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  const mappedPendingTransactionsTrackers = pendingTransactionsArray.map(
    ([sessionId, transactionPayload]) => (
      <TransactionStatusTracker
        key={sessionId}
        sessionId={sessionId}
        transactionPayload={transactionPayload as SignedTransactionsBodyType}
      />
    )
  );

  return <React.Fragment>{mappedPendingTransactionsTrackers}</React.Fragment>;
}

export default TransactionsTracker;
