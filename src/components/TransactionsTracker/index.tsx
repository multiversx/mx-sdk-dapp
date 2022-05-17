import React, { useContext } from 'react';
import OverrideDefaultBehaviourContext from 'contexts/OverrideDefaultBehaviourContext';
import { GetTransactionsByHashesType } from 'contexts/types';
import { useGetPendingTransactions } from 'services/transactions';
import { SignedTransactionsBodyType } from 'types/transactions';
import TransactionStatusTracker from './TransactionStatusTracker';

export interface TransactionsTrackerType {
  refetchTimestamp?: number;
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export function TransactionsTracker({
  refetchTimestamp,
  getTransactionsByHash: getTxByHash
}: TransactionsTrackerType) {
  const { pendingTransactionsArray } = useGetPendingTransactions();
  const { getTransactionsByHash: defaultGetTxByHash } = useContext(
    OverrideDefaultBehaviourContext
  );
  const getTransactionsByHash = getTxByHash ?? defaultGetTxByHash;

  const mappedPendingTransactionsTrackers = pendingTransactionsArray.map(
    ([sessionId, transactionBatch]) => (
      <TransactionStatusTracker
        key={sessionId}
        getTransactionsByHash={getTransactionsByHash}
        sessionId={sessionId}
        refetchTimestamp={refetchTimestamp}
        transactionBatch={transactionBatch as SignedTransactionsBodyType}
      />
    )
  );

  return <React.Fragment>{mappedPendingTransactionsTrackers}</React.Fragment>;
}

export default TransactionsTracker;
