import React from 'react';
import { LogoutListener } from 'components/LogoutListener';
import {
  TransactionSender,
  TransactionSenderType
} from 'components/TransactionSender';
import {
  TransactionsTracker,
  TransactionsTrackerType
} from 'components/TransactionsTracker';
import { BatchTransactionsTracker } from 'components/BatchTransactionsTracker/BatchTransactionsTracker';
import { BatchTransactionsTrackerProps } from 'hooks/transactions/batch/tracker/useAllBatchTransactionsTracker';
import { BatchTransactionsSender } from 'components/BatchTransactionsSender';

export interface CustomComponentsType {
  transactionSender?: {
    component: typeof TransactionSender;
    props?: TransactionSenderType;
  };
  transactionTracker?: {
    component: typeof TransactionsTracker;
    props?: TransactionsTrackerType;
  };
  batchTransactionsSender?: {
    component: typeof BatchTransactionsSender;
    props?: object;
  };
  batchTransactionsTracker?: {
    component: typeof BatchTransactionsTracker;
    props?: BatchTransactionsTrackerProps;
  };
}

export function CustomComponents({
  customComponents,
  enableBatchTransactions
}: {
  customComponents?: CustomComponentsType;
  enableBatchTransactions?: boolean;
}) {
  const transactionSender = customComponents?.transactionSender;
  const transactionTracker = customComponents?.transactionTracker;
  const batchTransactionsSender = customComponents?.batchTransactionsSender;
  const batchTransactionsTracker = customComponents?.batchTransactionsTracker;

  const TxSender = transactionSender?.component ?? TransactionSender;
  const TxTracker = transactionTracker?.component ?? TransactionsTracker;
  const BatchTxsSender =
    batchTransactionsSender?.component ?? BatchTransactionsSender;
  const BatchTxsTracker =
    batchTransactionsTracker?.component ?? BatchTransactionsTracker;

  return (
    <>
      {!enableBatchTransactions && (
        <>
          <TxSender {...transactionSender?.props} />
          <TxTracker {...transactionTracker?.props} />
        </>
      )}

      {Boolean(enableBatchTransactions) && (
        <>
          <BatchTxsSender {...batchTransactionsSender?.props} />
          <BatchTxsTracker {...batchTransactionsTracker?.props} />
        </>
      )}

      <LogoutListener />
    </>
  );
}
