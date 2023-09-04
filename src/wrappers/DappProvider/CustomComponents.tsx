import React from 'react';
import { BatchTransactionsTracker } from 'components/BatchTransactionsTracker/BatchTransactionsTracker';
import { LogoutListener } from 'components/LogoutListener';
import { TransactionSender } from 'components/TransactionSender';
import { TransactionSenderType } from 'components/TransactionSender/types/transactionSender.types';
import {
  TransactionsTracker,
  TransactionsTrackerType
} from 'components/TransactionsTracker';
import { BatchTransactionsTrackerProps } from 'hooks/transactions/batch/tracker/useBatchTransactionsTracker';

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
    props?: BatchTransactionsTrackerProps;
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
      <TxTracker {...transactionTracker?.props} />

      <BatchTxsTracker {...batchTransactionsTracker?.props} />

      <LogoutListener />
    </>
  );
}
