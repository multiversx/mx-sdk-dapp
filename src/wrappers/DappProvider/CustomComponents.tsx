import React from 'react';
import { LogoutListener } from 'components/LogoutListener';
import { TransactionSender } from 'components/TransactionSender';
import { TransactionSenderType } from 'components/TransactionSender/types/transactionSender.types';
import { TransactionsTracker } from 'components/TransactionsTracker';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';

export interface CustomComponentsType {
  transactionSender?: {
    component: typeof TransactionSender;
    props?: TransactionSenderType;
  };
  transactionTracker?: {
    component?: typeof TransactionsTracker;
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
