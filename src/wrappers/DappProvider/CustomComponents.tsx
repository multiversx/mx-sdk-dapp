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
import { AllBatchesTransactionsTracker } from 'hooks/transactions/batch/useAllBatchesTransactionsTracker';

export interface CustomComponentsType {
  transactionSender?: {
    component: typeof TransactionSender;
    props?: TransactionSenderType;
  };
  transactionTracker?: {
    component: typeof TransactionsTracker;
    props?: TransactionsTrackerType;
  };
  batchTransactionsTracker?: {
    component: typeof BatchTransactionsTracker;
    enabled?: boolean;
    props?: AllBatchesTransactionsTracker;
  };
}

export function CustomComponents({
  customComponents
}: {
  customComponents?: CustomComponentsType;
}) {
  const transactionSender = customComponents?.transactionSender;
  const transactionTracker = customComponents?.transactionTracker;
  const batchTransactionsTracker = customComponents?.batchTransactionsTracker;

  const TxSender = transactionSender?.component ?? TransactionSender;
  const TxTracker = transactionTracker?.component ?? TransactionsTracker;
  const BatchTxsTracker =
    batchTransactionsTracker?.component ?? BatchTransactionsTracker;

  return (
    <>
      <TxSender {...transactionSender?.props} />

      {!Boolean(batchTransactionsTracker?.enabled) && (
        <TxTracker {...transactionTracker?.props} />
      )}

      {Boolean(batchTransactionsTracker?.enabled) && (
        <BatchTxsTracker {...batchTransactionsTracker?.props} />
      )}

      <LogoutListener />
    </>
  );
}
