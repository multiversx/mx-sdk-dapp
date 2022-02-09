import React from 'react';
import { useGetPendingTransactions } from 'services/transactions';
import { SignedTransactionsBodyType } from 'types/transactions';
import TransactionStatusTracker from './TransactionStatusTracker';

interface TransactionsTrackerPropsType {
  completedTransactionsDelay: number;
}

export function TransactionsTracker({
  completedTransactionsDelay
}: TransactionsTrackerPropsType) {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  return (
    <React.Fragment>
      {pendingTransactionsArray.map(([sessionId, transactionPayload]) => (
        <TransactionStatusTracker
          completedTransactionsDelay={completedTransactionsDelay}
          key={sessionId}
          sessionId={sessionId}
          transactionPayload={transactionPayload as SignedTransactionsBodyType}
        />
      ))}
    </React.Fragment>
  );
}

export default TransactionsTracker;
