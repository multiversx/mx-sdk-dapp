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
  logoutListener?: {
    component?: typeof LogoutListener;
  };
}

export function CustomComponents({
  customComponents
}: {
  customComponents?: CustomComponentsType;
}) {
  const transactionSender = customComponents?.transactionSender;
  const transactionTracker = customComponents?.transactionTracker;
  const logoutListener = customComponents?.logoutListener;

  const TxSender = transactionSender?.component ?? TransactionSender;
  const TxTracker = transactionTracker?.component ?? TransactionsTracker;
  const LogOutListener = logoutListener?.component ?? LogoutListener;

  return (
    <>
      <TxSender {...transactionSender?.props} />
      <TxTracker {...transactionTracker?.props} />

      <LogOutListener />
    </>
  );
}
