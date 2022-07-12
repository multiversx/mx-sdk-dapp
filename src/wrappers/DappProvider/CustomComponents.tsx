import React from 'react';
import { LogoutListener } from 'components/LogoutListener';
import {
  TransactionSender,
  TransactionSenderType
} from 'components/TransactionSender';
import { TransactionsTracker } from 'components/TransactionsTracker';
import { TransactionsTrackerType } from 'components/TransactionsTracker/useTransactionsTracker';

export interface CustomComponentsType {
  transactionSender?: {
    component: typeof TransactionSender;
    props?: TransactionSenderType;
  };
  transactionTracker?: {
    component: typeof TransactionsTracker;
    props?: TransactionsTrackerType;
  };
}

export function CustomComponents({
  customComponents
}: {
  customComponents?: CustomComponentsType;
}) {
  const transactionSender = customComponents?.transactionSender;
  const transactionTracker = customComponents?.transactionTracker;

  const TxSender = transactionSender?.component ?? TransactionSender;
  const TxTracker = transactionTracker?.component ?? TransactionsTracker;

  return (
    <>
      <TxSender {...transactionSender?.props} />
      <TxTracker {...transactionTracker?.props} />
      <LogoutListener />
    </>
  );
}
