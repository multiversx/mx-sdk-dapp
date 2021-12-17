import React from 'react';
import { useSelector } from 'react-redux';
import { pendingSignedTransactionsSelector } from 'redux/selectors';
import { SignedTransactionsBodyType } from 'types/transactions';
import TransactionStatusTracker from './TransactionStatusTracker';

export function TransactionsTracker() {
  const signedTransactions = useSelector(pendingSignedTransactionsSelector);

  return (
    <React.Fragment>
      {Object.entries(signedTransactions).map(
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
