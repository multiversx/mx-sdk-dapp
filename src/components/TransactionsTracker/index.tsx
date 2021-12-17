import React from 'react';
import { useSelector } from 'react-redux';
import { pendingSignedTransactionsSelector } from 'redux/selectors';
import { SignedTransactionsBodyType } from 'types/transactions';
import TransactionStatusTracker from './TransactionStatusTracker';

export function TransactionsTracker() {
  const pendingSignedTransactions = useSelector(
    pendingSignedTransactionsSelector
  );

  return (
    <React.Fragment>
      {Object.entries(pendingSignedTransactions).map(
        ([sessionId, transactionPayload]) => (
          <TransactionStatusTracker
            key={sessionId}
            sessionId={sessionId}
            transactionPayload={
              transactionPayload as SignedTransactionsBodyType
            }
          />
        )
      )}
    </React.Fragment>
  );
}

export default TransactionsTracker;
